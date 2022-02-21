import { Container } from './style';
import { getUnitAssets } from '../../api/unit';
import { getAssetImage } from '../../api/asset';
import { IUnit, IAsset } from '../../interfaces';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Typography } from 'antd';
import colors from '../../colors';

const { Title } = Typography;

interface IData {
    running?: number;
    stopped?: number;
    alerting?: number;
}

interface IHealhLevelData {
    name: string;
    y: number;
    color: string;
}

interface IAssetImage {
    _id: string;
    image: any;
}

export default function UnitScreen() {
    const [unit, setUnit] = useState<IUnit | null>(null);
    const [assets, setAssets] = useState<Array<IAsset>>([]);
    const [assetImages, setAssetImages] = useState<Array<IAssetImage>>([]);
    const [data, setData] = useState<IData>({});
    const [healthLevels, setHealthLevels] = useState<Array<IHealhLevelData>>([]);

    useEffect(() => {
        let cancel = false;
        const unitId = window.location.pathname.split('/').slice(-1)[0];
        
        getUnitAssets(unitId).then(res => {
            if (!cancel) {
                setUnit(res.unit);
                setAssets(res.assets);
                res.assets.forEach((asset:IAsset) => {
                    getAssetImage(asset._id)
                    .then(imageRes => {
                        if (!cancel && imageRes.status === 200) {
                            setAssetImages((prevAssetsImages:Array<IAssetImage>) => [
                                ...prevAssetsImages,
                                { _id: asset._id, image: imageRes }
                            ]);
                        } else if (!cancel && imageRes.status === 204) {
                            setAssetImages((prevAssetsImages:Array<IAssetImage>) => [
                                ...prevAssetsImages,
                                { _id: asset._id, image: null }
                            ]);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                })
            }
        }).catch(err => {
            console.error(err);
        });

        return () => {
            cancel = true;
        };
    }, []);

    useEffect(() => {
        setData({
            running: assets.filter(asset => asset.status === 'running').length,
            alerting: assets.filter(asset => asset.status === 'alerting').length,
            stopped: assets.filter(asset => asset.status === 'stopped').length,
        });
    }, [assets]);

    useEffect(() => {
        setHealthLevels(assets.map((asset:IAsset) => {
            const color =
                asset.healthLevel > 75 ? colors.successGreen
                : asset.healthLevel > 50 ? colors.warningOrange
                : colors.errorRed;
            return {
                name: asset.name,
                y: asset.healthLevel,
                color,
            }
        }));
    }, [assets]);

    const pieChartOptions = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Status'
        },
        series: [{
            data: [{
                name: 'Operando Normalmente',
                y: data.running,
                color: colors.successGreen,
            }, {
                name: 'Operando com Alertas',
                y: data.alerting,
                color: colors.warningOrange,
            }, {
                name: 'Inopertantes',
                y: data.stopped,
                color: colors.errorRed,
            }],
        }],
    }

    const barChartOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Níveis de Saúde'
        },
        series: {
            name: null,
            data: healthLevels,
        },
        xAxis: {
            categories: healthLevels.map(level => level.name),
        },
        yAxis: {
            title: {
                text: 'Nível de Saúde'
            },
            min: 0,
            max: 100,
        },
        legend: {
            enabled: false,
        },
    }

    const AssetImageComponent = ({ assetId }: {assetId: string}) => {
        const i = assetImages.findIndex(image => image._id === assetId);
        if (i === -1) return <></>; // could be a loading image/icon
        const assetImage = assetImages[i].image;
        return (
            <img
                src={`data:${assetImage.headers['content-type']};base64,${assetImage.data.toString('base64')}`}
                alt='asset'
            />
        )
    };

    return (
        <Container>
            <Title level={2}>{unit?.name}</Title>
            <div id='chart-container'>
                <HighchartsReact highcharts={Highcharts} options={pieChartOptions} className='chart'/>
                <HighchartsReact highcharts={Highcharts} options={barChartOptions} className='chart'/>
            </div>
            <div> {
                assets.map(asset => (
                    <div key={asset._id}>
                        <Title level={3}>{asset.name}</Title>
                        <p>{asset.description}</p>
                        <AssetImageComponent assetId={asset._id}/>
                    </div>
                ))
            } </div>
        </Container>
    );
};

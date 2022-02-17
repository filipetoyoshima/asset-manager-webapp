import { Container } from './style';
import { getUnitAssets } from '../../api/unit';
import { IUnit, IAsset } from '../../interfaces';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import colors from '../../colors';

interface IData {
    running?: number;
    stopped?: number;
    alerting?: number;
}

export default function UnitScreen() {
    const [unit, setUnit] = useState<IUnit | null>(null);
    const [assets, setAssets] = useState<Array<IAsset>>([]);
    const [data, setData] = useState<IData>({});

    useEffect(() => {
        let cancel = false;
        const unitId = window.location.pathname.split('/').slice(-1)[0];
        
        getUnitAssets(unitId).then(res => {
            if (!cancel) {
                setUnit(res.unit);
                setAssets(res.assets);
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

    const chartOptions = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Assets'
        },
        series: [{
            data: [{
                name: 'Operando Normalmente',
                y: data.running,
                color: colors.successGreen,
            }, {
                name: 'Operando con Problemas',
                y: data.alerting,
                color: colors.warningOrange,
            }, {
                name: 'Operando con Alertas',
                y: data.stopped,
                color: colors.errorRed,
            }],
        }],
    }

    return (
        <Container>
            <div>
                <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
            </div>
            <div>{JSON.stringify(assets)}</div>
        </Container>
    );
};

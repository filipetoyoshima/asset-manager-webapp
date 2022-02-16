import { useEffect, useState } from 'react'
import { CustomRow } from './style';
import { Row, Col } from 'antd';
import { IUnit, IAsset } from '../../interfaces';
import { getUnitAssets } from '../../api/unit';

interface IProps {
    unit: IUnit
};

function UnitCard({ unit }: IProps) {
    const [assets, setAssets] = useState<Array<IAsset>>([]);
    const [runningAssets, setRunningAssets] = useState<Number | null>(null);
    const [alertingAssets, setAlertingAssets] = useState<Number | null>(null);
    const [stoppedAssets, setStoppedAssets] = useState<Number | null>(null);
    
    useEffect(() => {
        getUnitAssets(unit._id)
            .then(data => {
                setAssets(data.unit);
                setRunningAssets(data.assets.filter((asset:IAsset) => asset.status === 'running').length);
                setAlertingAssets(data.assets.filter((asset:IAsset) => asset.status === 'alerting').length);
                setStoppedAssets(data.assets.filter((asset:IAsset) => asset.status === 'stopped').length);
            });
    }, [unit._id]);

    return (
        <CustomRow>
            <Col span={18}>
                <span className='title'>{unit.name}</span>
                <span className='description'>{unit.description}</span>
            </Col>
            <Col span={6}>
                <Row id='assets-status'>
                    <Col span={8}>
                        <div className='info-label running'>{runningAssets}</div>
                    </Col>
                    <Col span={8}>
                        <div className='info-label alerting'>{alertingAssets}</div>
                    </Col>
                    <Col span={8}>
                        <div className='info-label stopped'>{stoppedAssets}</div>
                    </Col>
                </Row>
            </Col>
        </CustomRow>
    )
};

export default UnitCard;
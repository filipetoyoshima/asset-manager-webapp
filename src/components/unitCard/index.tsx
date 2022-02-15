import React from 'react'
import { CustomRow } from './style';
import { Row, Col } from 'antd';
import { IUnit } from '../../interfaces';

interface IProps {
    unit: IUnit
};

function UnitCard({ unit }: IProps) {

    return (
        <CustomRow>
            <Col span={18}>
                <span className='title'>{unit.name}</span>
                <span className='description'>{unit.description}</span>
            </Col>
            <Col span={6}>
                <Row id='assets-status'>
                    <Col span={8}>
                        <div className='info-label running'>6</div>
                    </Col>
                    <Col span={8}>
                        <div className='info-label alerting'>6</div>
                    </Col>
                    <Col span={8}>
                        <div className='info-label stopped'>6</div>
                    </Col>
                </Row>
            </Col>
        </CustomRow>
    )
};

export default UnitCard;
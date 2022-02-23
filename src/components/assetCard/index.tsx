import { useEffect, useState } from 'react'
import { IAsset } from '../../interfaces'
import { getAssetImage } from '../../api/asset'
import { Container } from './style'
import { Row, Col, Progress } from 'antd';
import colors from '../../colors'
import placeholder from '../../images/placeholder.jpg';
import { TailSpin } from 'react-loading-icons';

interface IProps {
    asset: IAsset
}

interface IImage {
    data: any,
    headers: {
        'content-type': string
        'content-length': number
    }
}

function AssetCard({ asset }: IProps) {

    const [image, setImage] = useState<IImage | null>(null)
    const [color, setColor] = useState<string>(colors.contrastGray)
    const [strokeColor, setStrokeColor] = useState<string>(colors.contrastGray)

    useEffect(() => {
        getAssetImage(asset._id)
            .then(res => {
                if (res.status === 200) {
                    if (res.headers['content-type'] && res.headers['content-length']) {
                        setImage({
                            data: res.data,
                            headers: {
                                'content-type': res.headers['content-type'],
                                'content-length': parseInt(res.headers['content-length'])
                            }
                        })
                    }
                } else if (res.status === 204) {
                    setImage({
                        data: null,
                        headers: {
                            'content-type': '',
                            'content-length': 0
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [asset])

    useEffect(() => {
        switch (asset.status) {
            case 'running':
                setColor(colors.successGreen)
                break
            case 'alerting':
                setColor(colors.warningOrange)
                break
            case 'stopped':
                setColor(colors.errorRed)
                break
        }
        console.log(asset.status)
    }, [asset])

    useEffect(() => {
        switch (true) {
            case asset.healthLevel > 75:
                setStrokeColor(colors.successGreen)
                break
            case asset.healthLevel > 50:
                setStrokeColor(colors.warningOrange)
                break
            default:
                setStrokeColor(colors.errorRed)
                break
        }
    }, [asset])

    return (
        <Container color={color}>
            <Row>
                <Col span={8}>
                    <div id='image'>
                        {image != null ?
                            image.data != null ?
                                <img
                                    src={`data:${image.headers['content-type']};base64,${image.data.toString('base64')}`}
                                    alt={`${asset.name}`}
                                />
                            :
                                <img
                                    src={placeholder}
                                    alt='placeholder'
                                />
                        :
                            <TailSpin stroke={colors.contrastGray}/> // TODO: Loading
                        }
                    </div>
                </Col>
                <Col span={16}>
                    <div id='text-info'>
                        <Row>
                            <span className='name'>{asset.name}</span>
                        </Row>
                        <Row>
                            <span className='model'>{asset.model}</span>
                        </Row>
                        <Row>
                            <div id='description-wrapper'>
                                <p className='description'>{asset.description}</p>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <div id='condition'>
                    <Row>
                        <Col span={6}>
                            <div className='status-wrapper'>
                                <div className='status'>
                                    <span className='status-name'>{asset.status}</span>
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            <Progress percent={asset.healthLevel} strokeColor={strokeColor} />
                        </Col>
                    </Row>
                </div>
            </Row>            
        </Container>
    )
};

export default AssetCard;
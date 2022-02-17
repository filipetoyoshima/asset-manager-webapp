import { useEffect, useState } from 'react';
import { Container, NonStyledLink } from './style';
import { getMyCompanyUnits } from '../../api/company';
import { ICompany, IUnit } from '../../interfaces';
import UnitCard from '../../components/unitCard';
import { Typography } from 'antd';

const { Title } = Typography

function ListUnit() {
    const [company, setCompany] = useState<ICompany | null>(null);
    const [units, setUnits] = useState<Array<IUnit>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMyCompanyUnits()
            .then(res => {
                setCompany(res.company);
                setUnits(res.units);
                setLoading(false);
            }).catch(err => {
                console.error(err);
            });
    }, []);


    return (
        <Container>
            <div id='wrapper'>
                {loading || company == null ?
                    <div>Loading...</div> :
                    <div>
                        <Title level={2}>{company.name}</Title>
                        <div id='unit-list'>
                            {units.map((unit) =>
                                <NonStyledLink to={`unit/${unit._id}`}>
                                    <UnitCard unit={unit}/>
                                </NonStyledLink>
                            )}
                        </div>
                    </div>
                }
            </div>
        </Container>
    )
}

export default ListUnit
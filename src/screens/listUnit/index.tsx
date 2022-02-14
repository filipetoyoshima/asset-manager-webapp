import { useEffect, useState } from 'react'
import { Container } from './style'
import { getMyCompanyUnits } from '../../api/company'
import { ICompany, IUnit } from '../../interfaces'

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
            {loading || company == null ?
                <div>Loading...</div> :
                <div>
                    <h1>{company.name}</h1>
                    {units.map((unit) => 
                        <div key={unit._id}>{unit.name}</div>
                    )}
                </div>
            }
        </Container>
    )
}

export default ListUnit
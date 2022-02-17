import { Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import ListUnit from '../screens/listUnit';
import UnitScreen from '../screens/unitScreen';


export default function LoggedRoutes() {
    return (
        <LayoutComponent>
            <Routes>
                <Route path='/' element={<ListUnit/>} />
                <Route path='/unit/:id' element={<UnitScreen/>} />
            </Routes>
        </LayoutComponent>
    );
}
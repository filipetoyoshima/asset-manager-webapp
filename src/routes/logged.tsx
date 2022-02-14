import { Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import ListUnit from '../screens/listUnit';


export default function LoggedRoutes() {
    return (
        <LayoutComponent>
            <Routes>
                <Route path='/' element={<ListUnit/>} />
            </Routes>
        </LayoutComponent>
    );
}
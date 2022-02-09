import { Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/layout';


export default function LoggedRoutes() {
    return (
        <LayoutComponent>
            <span>Rotas logadas</span>
            <Routes>
                <Route path='/' element={<span>Works!</span>} />
            </Routes>
        </LayoutComponent>
    );
}
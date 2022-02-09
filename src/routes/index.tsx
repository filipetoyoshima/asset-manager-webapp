import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../screens/login/index';
import LoggedRoutes from './logged';


export default function Router() {
    console.log('Router');
    console.log(useLocation());
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/in/*' element={<LoggedRoutes/>}/>
        </Routes>
    );
}
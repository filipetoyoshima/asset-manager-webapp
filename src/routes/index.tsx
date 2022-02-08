import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../screens/home/index';


export default function Router() {
    console.log('Router');
    console.log(useLocation());
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );
}
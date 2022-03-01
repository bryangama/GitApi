
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Repositorio from './pages/Repositorio';
import Header from "./pages/Header";





function Rotas(){
return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/repositorio/:repositorio'} element={<Repositorio/>}/>
        </Routes>
    </BrowserRouter>

);

}
export default Rotas;
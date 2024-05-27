import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Estudante } from "./pages/Estudante/estudante";
import { Classe } from "./pages/Classe/classe";
import { Frequencia } from "./pages/Frequencia/frequencia";

function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/estudante"  element={<Estudante />}/>
            <Route path="/classe"  element={<Classe />}/>
            <Route path="/frequencia"  element={<Frequencia />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes

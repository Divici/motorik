import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Tryouts from "./components/Tryouts";
import Women from "./components/Women";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/tryouts' element={<Tryouts/>} />
        <Route path='/teams/uspl' element={<Tryouts/>} />
        <Route path='/teams/u23' element={<Tryouts/>} />
        <Route path='/teams/women' element={<Women/>} />

      </Routes>
    </div>
  )
}

export default App

import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Tryouts from "./components/Tryouts";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/tryouts' element={<Tryouts/>} />

      </Routes>
    </div>
  )
}

export default App

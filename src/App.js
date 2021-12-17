import { Route, Routes } from "react-router-dom";
import Level from "./components/Level";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Level l='2' e={0} o={0} />} />
            <Route path="2" element={<Level l='3' e={1} o={0} />} />
            <Route path="3" element={<Level l='4' e={2} o={3} />} />
            <Route path="4" element={<Level l='5' e={5} o={4} />} />
            <Route path="5" element={<Level l='6' e={6} o={7} />} />
            <Route path="6" element={<Level l='7' e={9} o={8} />} />
            <Route path="7" element={<Level l='8' e={10} o={11} />} />
            <Route path="8" element={<Level l='9' e={13} o={12} />} />
            <Route path="9" element={<Level l='10' e={9} o={12} />} />
            <Route path="10" element={<Level l='11' e={11} o={13} />} />
        </Routes>
    );
};

export default App;

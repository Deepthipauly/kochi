import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Places from "./Places";
import Sites from "./Sites";
import About from "./About";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Places />}></Route>
        <Route path="/viewSite/:id" element={<Sites />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

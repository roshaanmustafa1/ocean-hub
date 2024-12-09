import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.js";
import Navbar from "./features/navbar/Navbar.js";
import Footer from "./features/footer/Footer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

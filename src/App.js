import Footer from "./component/footer";
import Header from "./component/header";
import "./css/header_footer.css";
import Contents1 from "./component/contents1";
import Contents2 from "./component/contents2";
import 구구단출력end별찍기 from "./component/contents3";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/component" element={<Contents1 />} />
          <Route exact path="/component2" element={<Contents2 />} />
          <Route exact path="/component3" element={<구구단출력end별찍기 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

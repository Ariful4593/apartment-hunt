import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './component/Home/Footer/Footer';
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

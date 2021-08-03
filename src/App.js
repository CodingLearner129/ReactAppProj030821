import './App.css';
import Header from "./MyComponents/Header";
import {All} from "./MyComponents/All";
import {Music} from "./MyComponents/Music";
import {Business} from "./MyComponents/Business";
import {Sports} from "./MyComponents/Sports";
import {Workshops} from "./MyComponents/Workshops";
import {Footer} from "./MyComponents/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Header title="Events List" searchBar={false}/>
      <Switch>
        <Route exact path="/">
          <All/>
        </Route>
        <Route exact path="/music">
          <Music/>
        </Route>
        <Route exact path="/business">
          <Business/>
        </Route>
        <Route exact path="/sports">
          <Sports/>
        </Route>
        <Route exact path="/workshops">
          <Workshops/>
        </Route>
      </Switch>
      <Footer/>
    </Router>  
    </>
        );
}

export default App;

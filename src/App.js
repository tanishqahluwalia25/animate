import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/hero" component={Hero} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

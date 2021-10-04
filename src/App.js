import React from "react";
import ObjectExample from "./tutorial/react-redux/setup/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./tutorial/11-react-router/setup/Error";
import SingleProduct from "./tutorial/react-redux/setup/singleProducst";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ObjectExample />
          </Route>
          <Route path="/products/:id" children={<SingleProduct />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

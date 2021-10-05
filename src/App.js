import React from "react";
// import ObjectExample from "./tutorial/react-redux/setup/index";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Error from "./tutorial/11-react-router/setup/Error";
// import SingleProduct from "./tutorial/react-redux/setup/singleProducst";
import ObjectExample from "./tutorial/15-formik";
import { GlobalStyle } from "./tutorial/14-styled-component/GlobalStyle/GlobalStyle.style";
import { ThemeProvider } from "styled-components";
import Theme from "./tutorial/14-styled-component/Theme/theme";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="container">
        <GlobalStyle />
        {/* <Router>
        <Switch>
          <Route path="/" exact>
            <ObjectExample />
          </Route>
          <Route path="/products/:id" children={<SingleProduct />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router> */}
        <ObjectExample />
      </div>
    </ThemeProvider>
  );
}

export default App;

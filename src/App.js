import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MyCollections from "./pages/MyCollections/";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/collections" component={MyCollections} />
          <Route exact path="/" render={() => <Redirect to="/collections" />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

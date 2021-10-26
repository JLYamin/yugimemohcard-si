import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MyCollections from "./pages/MyCollections";
import NewCollection from "./pages/NewCollection";
import ViewCollection from "./pages/ViewCollection";
import NewCard from "./pages/NewCard";
import Header from "./components/Header";
import EditCollection from "./pages/EditCollection";
import EditCard from "./pages/EditCard";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cards/new" component={NewCard} />
          <Route path="/cards/:id/edit" component={EditCard} />
          <Route path="/collections/new" component={NewCollection} />
          <Route path="/collections/:id/edit" component={EditCollection} />
          <Route path="/collections/:id" component={ViewCollection} />
          <Route path="/collections" component={MyCollections} />
          <Route exact path="/" render={() => <Redirect to="/collections" />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import MyCollection from "./pages/MyCollection/";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/collections" />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

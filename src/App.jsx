import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Details from './views/Characters/Details';
import List from './views/Characters/List';


//All the Routers will go here

export default function App() {
  return(
    <Switch>
      <Route path="/characters/:name/5">
        <Details />
      </Route>
      <Route path="/characters">
        <List />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

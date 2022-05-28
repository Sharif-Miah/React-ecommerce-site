import './App.css'
import Header from './common/Header/Header';
import Pages from '../src/pages/Pages';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
              <Route path="/" exact>
                <Pages />
              </Route>
            </Switch>
    </Router>
    </>
  );
}

export default App;

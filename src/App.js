import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path ="/" exact component={Home} /> // exact pour exclure tout les chemins contenant un /, on ne veut que le chemin /
          <Route path ="/competences" component={Knowledges} />
          <Route component={NotFound} />
          <Route path= "/contact" component={Contact} />
          <Route path= "/portefolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
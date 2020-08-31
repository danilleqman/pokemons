import React from "react";
import { PagePokemons } from "./pages/PagePokemons/PagePokemons";
import { Route, Switch } from "react-router-dom";

import { PagePokemon } from "./pages/PagePokemon/PagePokemon";
import { PageAbility } from "./pages/PageAbility/PageAbility";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PagePokemons} />
      <Route
        path="/pokemon/:id"
        render={({ match, history }) => (
          <PagePokemon history={history} id={match.params.id} />
        )}
      />
      <Route
        path="/ability/:id"
        render={({ match, history }) => (
          <PageAbility history={history} id={match.params.id} />
        )}
      />
    </Switch>
  );
}

export default App;

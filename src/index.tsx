import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config";

import App from "./App";
import { CharactersProvider } from "./GlobalContext/charactersContext";

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client}>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </ApolloProvider>,
  rootElement
);

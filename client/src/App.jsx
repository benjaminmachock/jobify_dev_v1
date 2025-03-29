import { Outlet } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { Nav } from "./components/Nav/Nav.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const client = new ApolloClient({
  uri: "graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Nav />
        <Outlet />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;

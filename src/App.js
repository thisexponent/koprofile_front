import React from 'react';
import {ApolloProvider} from "react-apollo"
import client from "./Client"
import Layout from "./Layout";
import Profile from "./Profile";

function App() {
  return (
      <ApolloProvider client={client}>
        <Layout/>
        <Profile/>
      </ApolloProvider>
  );
}

export default App;

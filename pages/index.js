import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ApolloProvider } from "react-apollo";
import { httpClient } from "../src/Communication/CommunicationModule";

/**
 * Main view
 * 
 * @function Task
 * @author Gressia Valdez
 */

function Task () {
  return (
    <ApolloProvider client={httpClient} addTypename={false}>
      <p> Hello world</p>
    </ApolloProvider>
  );
};

export default Task;
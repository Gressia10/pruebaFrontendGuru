import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ApolloProvider } from "react-apollo";
import { httpClient } from "../src/Communication/CommunicationModule";
// import Link from 'next/link'
import { Provider } from 'react-redux';
import store from '../src/store'
import {Home} from "./views/Home"
import Products from './views/pru'
import {ListWithDataAndState} from '../src/connect'

/**
 * Main view
 * 
 * @function Task
 * @author Gressia Valdez
 */

function Task () {
  return (
    <Provider store={store}>
      <ApolloProvider client={httpClient} addTypename={false}>
        {/* <Products></Products> */}
        <Home></Home>
        {/* <ListWithDataAndState></ListWithDataAndState> */}
      </ApolloProvider>
    </Provider>
    /* <ul>
          <Link href="/">
            <Home></Home>
          </Link>
        {/* <li>
          
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul> */
  );
};

export default Task;
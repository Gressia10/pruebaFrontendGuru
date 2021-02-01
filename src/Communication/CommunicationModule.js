import fetch from "unfetch";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import {createUploadLink} from "apollo-upload-client";
import { onError } from "apollo-link-error";
import { HttpLink } from"apollo-link-http";
import { config } from "../services/Config/Config";
import {ErrorResponse} from "../services/Api/error";
import {toast} from "react-toastify";

export const baseRoute = () => {
  return config.baseRoute;
};

export const token = () => {
  return config.api_key;
}

const uploadLink = createUploadLink({
  uri: baseRoute()
});

const link = new HttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
  
  fetchOptions:{
    mode: 'no-cors',
  }
  // defaultOptions: {
  //   mutate: {
  //     errorPolicy: "all",
  //   }
  // }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      // 'authorization': 'Bearer _961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx',
      'authorization': token() ? `Bearer ${token()}` : "",
      // 'Accept-Language': 'en-US',
      // 'Content-Type': 'application/graphql',
      "Access-Control-Allow-Origin": "*"
    }
  });

  return forward(operation);
});

const toastError = onError((raw) => {
  console.log("aquiiiii");
  console.log(token());
  console.log(raw);
  // console.log(baseRoute())
  //ErrorResponse.fromRaw(raw).errorMessages().forEach(m => toast.error(m));
});
export const httpClient = new ApolloClient({
  // uri: baseRoute(),
  link: toastError.concat(authMiddleware).concat(link),
  cache: new InMemoryCache(),
  fetch: fetch,
});
// const cache = new InMemoryCache();
// export const httpClient = new ApolloClient({
//   uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
//   link: toastError.concat(link),
//   request: (operation) => {
//     operation.setContext({
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         'Accept-Language': 'en-US',
//       },
//     });
//   },
//   cache,
// });
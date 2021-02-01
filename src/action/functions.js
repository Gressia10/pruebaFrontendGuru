import {allBussines} from '../client/client'
import * as actions from './actions'
import {READ_BUSSINES_QUERY} from '../queries/bussines'
import {useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux'
import { Query } from "react-apollo";

export default function fetchAllBussines () {
    console.log("aquiiii");
    // const dispatch = useDispatch();

    // <Query
    //         query={READ_BUSSINES_QUERY}
    //         variables={{offset:1}}
    //         fetchPolicy={"cache-and-network"}
    //         // pollInterval={5000}
    //       >
    //           console.log("balabala")
    //         {({ data, error }) => {

    //           if(error) console.log(error);
            
    //           if(data){
    //             console.log(data);
    //             <div>{data}</div>
    //           }
    //           return null;
    //         }}
    //       </Query>

    // const { loading, error, data } = useQuery(READ_BUSSINES_QUERY, {
    //     variables: { offset: 0, limit : 10 }
    // });
    // if(error) console.log(error);
    // if (loading) console.log("loading");
    // console.log(data.search);

    allBussines();
    return (dispatch) => {
        allBussines()
        .then(res => {
            dispatch(actions.all(res));
        }).catch(res => {console.log(res);})
    }
};
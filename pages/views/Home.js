import React, {useEffect } from "react";
import fetchAllBussines from '../../src/action/functions'
import {allBussines} from '../../src/client/client'
import {READ_BUSSINES_QUERY} from '../../src/queries/bussines'
import { Query } from "react-apollo";
import {before, after} from '../../src/action/actions'
import { useSelector, useDispatch } from 'react-redux'
import {useQuery } from '@apollo/client';

export function Home () {
    
    const fetchs = useSelector((data) => data.fetchs)
    const count = useSelector((data) => data.pagination)
    const dispatch = useDispatch()
    const offset = count * 10 - 10;

    return (
        <div>
        <h1>
            Count: <span>{count}</span>
        </h1>
        <Query
            query={READ_BUSSINES_QUERY}
            variables={{offset:offset}}
            fetchPolicy={"cache-and-network"}
            // errorPolicy= {'ignore'}
            // pollInterval={500}
          >
            {({ data, error, loading }) => {
                console.log("balablabla");
                console.log(loading);
                if (loading) return <div><h1>Cargando</h1></div>
                // if(error) console.log("bbbbb"+error);
                    
                if(data){
                    if(Object.keys(data).length > 0) {
                        console.log("aaaaa");
                    }
                    // console.log(data.search);
                }else{
                    // location.reload();
                    console.log("aaaaquiii");
                }
                return null;
            }}
        </Query>
        <button onClick={() => dispatch(before())}>-1</button>
        <button onClick={() => dispatch(after())}>+1</button>
        <button onClick={()=> dispatch(fetchAllBussines())}>b</button>
        <p> Hello world</p>
        </div>
    );
};

export default Home;
    
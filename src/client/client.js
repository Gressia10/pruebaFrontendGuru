import {useQuery } from '@apollo/client';
import {READ_BUSSINES_QUERY} from '../queries/bussines'

export function allBussines() {
    console.log("aaaa aqui");
    const { loading, error, data } = useQuery(READ_BUSSINES_QUERY, {
        variables: { offset: 0, limit : 10 }
    });
    if(error) console.log(error);
    if (loading) console.log("loading");
    return data.search;
}
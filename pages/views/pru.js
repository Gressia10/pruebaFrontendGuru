import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Products = (props) => { 
  const { loading, search, error } = props.data
  
  if (loading) return <h1>Cargando</h1>
  console.log(search)
  console.log("bbb");
  console.log(error);
  return (
    <div>
        <h1>Holla</h1>
      {/* {search.map(p => (
        <div key={search.total}>
          <h1>{search.total}</h1>
        </div>
      ))} */}
    </div>
  )
}

const Query = gql`
    query search($offset: Int!){
    search(
            location: "san francisco",
            offset:$offset
            limit: 10) {
        total
        business {
            name
            url
        }
    }
}`


// export default graphql(Query)(Products)

// export default graphql(QueryTodos, {
//     options: (props) => ({ variables: { userId: props.userId } })
//   })( Home );

export default graphql(Query, {
    options: () => ({variables: { offset: 0 }, fetchPolicy:"cache-and-network" })
  })(Products);
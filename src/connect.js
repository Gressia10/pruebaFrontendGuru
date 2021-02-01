import { connect } from 'react-redux';
import fetchAllBussines from './action/functions'
import Home from './../pages/views/Home'
import { graphql } from 'react-apollo';
import {READ_BUSSINES_QUERY} from './queries/bussines'

export default connect(
    (state) => ({data: state.pagination}),
    {fetchAllBussines})
    (Home);

// const withCloneList = graphql(READ_BUSSINES_QUERY, {
  
//     props: ({ props, mutate }) => ({
//         readData() {
//         return mutate()
//           .then(result => {
//             props.fetchs(result);
//           });
//       },
//     }),
//   })(Home);

// //   const ListWithData = withCloneList;
// export const ListWithDataAndState = connect(
//     (state) => ({ data: state.fetchs}),
//     {fetchAllBussines}
// )(withCloneList);
import gql from "graphql-tag";

export const READ_BUSSINES_QUERY = gql`
query search ($offset: Int!){
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
}`;

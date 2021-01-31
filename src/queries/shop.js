import gql from "graphql-tag";

export const READ_SHOP_QUERY = gql`
query search ($offset: Int!, $limit: Int!){
    search(
            location: "san francisco",
            offset:$offset
            limit: $limit) {
        total
        business {
            name
            url
        }
    }
}`;

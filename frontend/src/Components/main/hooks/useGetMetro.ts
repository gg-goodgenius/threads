import { gql, useLazyQuery } from "@apollo/client";

export const useGetMetro = () => {
    const [getMetres] = useLazyQuery(GET_METRO);
    return {getMetres};
}

const GET_METRO = gql`
    query GetMetro {
        getMetres {
            id
            name
            color
        }
    }
`;

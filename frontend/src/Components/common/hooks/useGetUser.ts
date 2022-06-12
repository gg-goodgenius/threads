import { gql, useLazyQuery } from "@apollo/client";
import { GetUser, GetUserVariables } from "./__generated__/GetUser";

export const useGetUser = () => {
    const [getUser] = useLazyQuery<GetUser, GetUserVariables>(GET_USER);
    return getUser;
}

const GET_USER = gql`
    query GetUser($id: Int) {
        user: getUser(id: $id) {
            id
            firstName
            lastName
        }
    }
`;

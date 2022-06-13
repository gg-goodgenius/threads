import { gql, useLazyQuery } from "@apollo/client";
import { GetTags } from "./__generated__/GetTags";

export const useGetTags = () => {
    const [getTags, { loading }] = useLazyQuery<GetTags>(GET_TAGS)
    return {
        getTags,
        loading
    }
}

export const GET_TAGS = gql`
    query GetTags {
        tags: getTags {
            id
            name
            color
        }
    }
`;

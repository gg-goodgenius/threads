import { gql, useLazyQuery } from "@apollo/client";
import { GetEvents } from "./__generated__/GetEvents";

export const useGetEvents = () => {
    const [getEvents, { loading }] = useLazyQuery<GetEvents>(GET_EVENTS);
    return { getEvents, loading};
}


const GET_EVENTS = gql`
    query GetEvents($tags: [Int],$metro: [Int]) {
        events: getVolunteerEvents(tags: $tags, metro: $metro) {
            id
            image
            title
            tags {
                name
                color
            }
            dateEvent
            memberCount
            members {
                id
                image
            }
        }
    }
`;

import { gql, useLazyQuery } from "@apollo/client";
import { GetEvents } from "./__generated__/GetEvents";

export const useGetEvents = () => {
    const [getEvents, { loading }] = useLazyQuery<GetEvents>(GET_EVENTS);
    return { getEvents, loading};
}


const GET_EVENTS = gql`
    query GetEvents {
        events: getVolunteerEvents {
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

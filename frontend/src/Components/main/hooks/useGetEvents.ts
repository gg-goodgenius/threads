import { gql } from "@apollo/client";

export const useGetEvents = () => {

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
        }
    }
`;

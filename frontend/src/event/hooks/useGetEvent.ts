import { gql, useLazyQuery } from "@apollo/client";

export const useGetEvent = () => {
    const [getEvent] = useLazyQuery(GET_EVENT, {
        fetchPolicy: 'network-only'
    });
    return {getEvent}
}

const GET_EVENT = gql`
    query GetEvent($id: Int!){
        event: getVolunteerEvent(id: $id) {
            id
            title
            tags {
                name
                color
            }
            image
            dateEvent
            metro {
                name
                color
            }
            descriptionOther
            isSubscribe
        }
    }
`;

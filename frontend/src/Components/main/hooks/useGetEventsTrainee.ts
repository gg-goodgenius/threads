import { gql, useLazyQuery } from "@apollo/client";
import { GetEventsTrainee } from "./__generated__/GetEventsTrainee";

export const useGetEventsTrainee = () => {
    const [getEventsTrainee] = useLazyQuery<GetEventsTrainee>(GET_EVENTS_TRAINEE);
    return { getEventsTrainee };
}

const GET_EVENTS_TRAINEE = gql`
    query GetEventsTrainee {
        events: getInternEvents {
            id
            title
            organization
            image
            metro {
                name
                color
            }
            dateStartRequest
            description
        }
    }
`;

import { gql, useMutation } from "@apollo/client";

export const useSubscribeEvent = () => {
    const [subscribeEvent] = useMutation(SUBSCRIBE_EVENT);
    return {subscribeEvent};
}

const SUBSCRIBE_EVENT = gql`
    mutation SubscribeEvent($id: Int!) {
        subscribeEvent(id: $id) {
            ok
        }
    }
`;

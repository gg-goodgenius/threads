import {EventComponent} from "../Event.component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetEvent } from "../hooks/useGetEvent";

export const EventContainer = () => {
    const {getEvent} = useGetEvent();
    const [event, setEvent] = useState();
    const {id} = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            const res = await getEvent({
                variables: {
                    id: id ? parseInt(id) : 1
                }
            });
            if(res.data?.event) {
                setEvent(res.data.event);
            }
        }
        fetchEvent().then()
    }, [])

    return(<EventComponent event={event} />);
}

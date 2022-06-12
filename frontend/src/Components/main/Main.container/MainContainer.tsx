import { MainComponent } from "../Main.component";
import { useGetEvents } from "../hooks/useGetEvents";
import { useEffect, useState } from "react";
import { GetEvents_events } from "../hooks/__generated__/GetEvents";

export const MainContainer = () => {
    const [events, setEvents] = useState<(GetEvents_events | null)[]>([]);
    const [eventsTrainee, setEventsTrainee] = useState([]);
    const { getEvents } = useGetEvents();

    useEffect(() => {
        const fetchEvents = async () => {
            const result = await getEvents();
            if(result.data?.events) {
                setEvents(result.data.events);
            }
        }
        fetchEvents().then()
    }, [])

    return(
        <MainComponent
            events={events}
            // eventsTrainee={eventsTrainee}
        />
    );
}

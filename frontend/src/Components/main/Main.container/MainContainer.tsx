import { MainComponent } from "../Main.component";
import { useGetEvents } from "../hooks/useGetEvents";
import { useEffect, useState } from "react";
import { GetEvents_events } from "../hooks/__generated__/GetEvents";
import { useGetEventsTrainee } from "../hooks/useGetEventsTrainee";
import { GetEventsTrainee_events } from "../hooks/__generated__/GetEventsTrainee";

export const MainContainer = () => {
    const [selectedTags, setSelectedTags] = useState<number[]>([])
    const [selectedMetro, setSelectedMetro] = useState<number[]>([]);
    const [events, setEvents] = useState<(GetEvents_events | null)[]>([]);
    const [eventsTrainee, setEventsTrainee] = useState<(GetEventsTrainee_events | null)[]>([]);
    const { getEvents } = useGetEvents();
    const { getEventsTrainee } = useGetEventsTrainee();

    useEffect(() => {
        const fetchEvents = async () => {
            const resultEvents = await getEvents();
            if(resultEvents.data?.events) {
                setEvents(resultEvents.data.events);
            }

            const resultEventsTrainee  = await getEventsTrainee();
            if(resultEventsTrainee.data?.events) {
                setEventsTrainee(resultEventsTrainee.data.events);
            }
        }
        fetchEvents().then()
    }, [])

    useEffect(() => {
        const fetchEvents = async () => {
            const resultEvents = await getEvents({
                variables: {
                    tags: selectedTags,
                    metro: selectedMetro
                }
            });
            if(resultEvents.data?.events) {
                setEvents(resultEvents.data.events);
            }
        }
        fetchEvents().then()
    }, [selectedTags, selectedMetro])

    return(
        <MainComponent
            events={events}
            eventsTrainee={eventsTrainee}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedMetro={selectedMetro}
            setSelectedMetro={setSelectedMetro}
        />
    );
}

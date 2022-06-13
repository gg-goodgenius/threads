import { FilterEvents } from "../FilterEvents.component";
import { useEffect, useState } from "react";
import { useGetTags } from "../hooks/useGetTags";
import { GetTags_tags } from "../hooks/__generated__/GetTags";
import { FilterEventsTraineeComponent } from "../FilterEventsTrainee.component";
import { useGetMetro } from "../hooks/useGetMetro";
import { GetMetro_getMetres } from "../hooks/__generated__/GetMetro";

type Props = {
    isTrainee: boolean,
    selectedTags: number[],
    setSelectedTags: (e: number[]) => void,
    setSelectedMetro: (e: number[]) => void,
    selectedMetro: number[]
}

export const FilterContainer = ({isTrainee, setSelectedTags, selectedTags, setSelectedMetro, selectedMetro}: Props) => {
    const {getTags} = useGetTags();
    const {getMetres} = useGetMetro();
    const [tags, setTags] = useState<(GetTags_tags | null)[]>([]);
    const [metres, setMetres] = useState<(GetMetro_getMetres | null)[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const tags = await getTags();
            if (tags.data?.tags) {
                setTags(tags.data.tags);
            }
        }
        fetchEvents().then()

        const fetchMetro = async () => {
            const metres = await getMetres();
            if (metres.data?.getMetres) {
                setMetres(metres.data.getMetres);
            }
        }
        fetchMetro().then()
    }, [])

    return (
        !isTrainee ? <FilterEvents
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
            selectedMetro={selectedMetro}
            setSelectedMetro={setSelectedMetro}
            tags={tags}
            metres={metres}
        /> : <FilterEventsTraineeComponent />
    );
}

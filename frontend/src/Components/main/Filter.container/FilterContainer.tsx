import { FilterEvents } from "../FilterEvents.component";
import { useEffect, useState } from "react";
import { useGetTags } from "../hooks/useGetTags";
import { GetTags_tags } from "../hooks/__generated__/GetTags";
import { FilterEventsTraineeComponent } from "../FilterEventsTrainee.component";

type Props = {
    isTrainee: boolean,
    selectedTags: number[],
    setSelectedTags: (e: number[]) => void
}

export const FilterContainer = ({isTrainee, setSelectedTags, selectedTags}: Props) => {
    const {getTags} = useGetTags();
    const [tags, setTags] = useState<(GetTags_tags | null)[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const tags = await getTags();
            if (tags.data?.tags) {
                setTags(tags.data.tags);
            }
        }
        fetchEvents().then()
    }, [])

    return (
        !isTrainee ? <FilterEvents setSelectedTags={setSelectedTags} selectedTags={selectedTags} tags={tags}/> : <FilterEventsTraineeComponent />
    );
}

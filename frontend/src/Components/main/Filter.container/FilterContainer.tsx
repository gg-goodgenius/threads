import { FilterEvents } from "../FilterEvents.component";
import { useEffect, useState } from "react";
import { useGetTags } from "../hooks/useGetTags";
import { GetTags_tags } from "../hooks/__generated__/GetTags";

type Props = {
    isTrainee: boolean
}

export const FilterContainer = ({ isTrainee } : Props) => {
    const [selectedTags] = useState<number[]>([])
    const {getTags} = useGetTags();
    const [tags, setTags] = useState<(GetTags_tags | null)[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const tags = await getTags();
            if(tags.data?.tags) {
                setTags(tags.data.tags);
            }
        }
        fetchEvents().then()
    }, [])

    return(
        <FilterEvents  selectedTags={selectedTags} tags={tags}/>
    );
}

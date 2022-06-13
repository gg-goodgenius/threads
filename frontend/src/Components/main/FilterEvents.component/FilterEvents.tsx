import './scss/index.scss'
import { Tag } from "../../common/Tag";
import './scss/index.scss'

type Props = {
    tags: any[],
    selectedTags: number[],
    setSelectedTags: (e: number[]) => void
}

export const FilterEvents = (props : Props) => {
    return(
        <div className='filter-events'>
            <h1 className='title'>Поиск по хэштегам 😎</h1>
            <div className='tags'>
                {props.tags.map(t =>
                    <Tag
                        color={props.selectedTags.includes(t?.id) ? '#' + t?.color : '#E5E5E5'}
                        onClick={() => {
                            const tags = [...props.selectedTags, t?.id];
                            props.setSelectedTags(tags)
                        }}
                    >
                        {t?.name}
                    </Tag>)}
            </div>
        </div>
    );
}

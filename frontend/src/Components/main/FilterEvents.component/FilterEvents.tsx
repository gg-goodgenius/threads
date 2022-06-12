import './scss/index.scss'
import { Tag } from "../../common/Tag";
import './scss/index.scss'

type Props = {
    tags: any[],
    selectedTags: number[]
}

export const FilterEvents = (props : Props) => {
    return(
        <div className='filter-events'>
            <h1 className='title'>Поиск по хэштегам 😎</h1>
            <div className='tags'>
                {props.tags.map(t => <Tag color={'#' + t?.color}>{t?.name}</Tag>)}
            </div>
        </div>
    );
}

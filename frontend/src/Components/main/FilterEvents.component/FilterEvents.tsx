import './scss/index.scss'
import { Tag } from "../../common/Tag";
import './scss/index.scss'
import { Checkbox } from "antd";
import Avatar from "antd/es/avatar/avatar";

type Props = {
    tags: any[],
    metres: any[],
    selectedTags: number[],
    setSelectedTags: (e: number[]) => void,
    setSelectedMetro: (e: number[]) => void,
    selectedMetro: number[]
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
                            if(props.selectedTags.includes(t.id)) {
                                props.setSelectedTags(props.selectedTags.filter(e => e != t.id))
                            } else {
                                const tags = [...props.selectedTags, t.id];
                                props.setSelectedTags(tags)
                            }
                        }}
                    >
                        {t?.name}
                    </Tag>)}
            </div>
            <h1 className='title'>Поиск по станциям метро</h1>
            <div className='metro'>
                {props.metres.map(t =>
                    <div>
                        <Checkbox
                            onClick={() => {
                                if(props.selectedMetro.includes(t.id)) {
                                    props.setSelectedMetro(props.selectedMetro.filter(e => e != t.id))
                                } else {
                                    const newMetro = [...props.selectedMetro, t.id];
                                    props.setSelectedMetro(newMetro)
                                }
                            }}
                        >
                            <Avatar size={18} style={{
                                marginRight: 4,
                                backgroundColor: '#' + t.color
                            }} />{t?.name}
                        </Checkbox>
                    </div>)
                }
            </div>
        </div>
    );
}

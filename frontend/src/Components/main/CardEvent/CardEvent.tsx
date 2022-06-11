import {Card} from "../../common/Card";
import {Tag} from "../../common/Tag";

import './scss/index.scss';
import {TagDate} from "../../common/TagDate";
import {UsersStack} from "../../common/UsersStack";

type Props = {
    image?: string,
    title: string,
    tags: {
        color: string,
        title: string
    }[],
    dates: string[],
    photos?: string[],
    counter: string

}

export const CardEvent = (props: Props) => {
    return(
        <Card>
            <div className='card-event'>
                <div className='tags'>
                    {props.tags.map((tag) => <Tag color={tag.color}>#{tag.title}</Tag>)}
                </div>
                {props.image && <img className='preview' src={props.image}/>}
                <h1 className='title'>Региональный волонтёрский центр «Зоозащиты»</h1>
                <div className='dates'>
                    {props.dates.map(date => <TagDate>{date}</TagDate>)}
                </div>
                <div className='participates'>
                    {props.photos ?<UsersStack photos={props.photos}/> : <div />}
                    <span className='counter'>{props.counter}</span>
                </div>
            </div>
        </Card>
    );
}
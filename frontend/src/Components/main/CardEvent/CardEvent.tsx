import {Card} from "../../common/Card";
import {Tag} from "../../common/Tag";

import './scss/index.scss';
import {TagDate} from "../../common/TagDate";
import {UsersStack} from "../../common/UsersStack";
import {ReactComponent as Check} from '../../../icons/check.svg';
import {ReactComponent as Favorite} from "../../../icons/Favorite.svg";
import {ReactComponent as inFavorite} from "../../../icons/inFavorite.svg";
import {Link} from "react-router-dom";
import moment from "moment";

type Props = {
    id: number,
    image?: string | null,
    title: string,
    tags: {
        color: string,
        name: string
    }[],
    dates?: string[],
    photos?: string[],
    memberCount?: number | null
    dateEvent?: any
}

export const CardEvent = (props: Props) => {
    return (
        <Link to={`/event/${props.id}`}>
            <Card>
                <div className='card-event'>
                    <div className='box-tags'>
                        <div className='tags'>
                            {props.tags.map((tag) => <Tag color={'#' + tag.color}>#{tag.name}</Tag>)}
                        </div>
                        <Favorite/>
                    </div>
                    {props.image && <img className='preview' src={props.image}/>}
                    <h1 className='title'>{props.title}</h1>
                    <div className='dates'>
                        <TagDate>{moment(props.dateEvent).format('MMMM Do')}</TagDate>
                    </div>
                    <div className='participates'>
                        {/*{props.photos ? <UsersStack photos={props.photos}/> : <div/>}*/}
                        <div className='box-counter'>
                            <Check/>
                            <span className='counter'>{props.memberCount}</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

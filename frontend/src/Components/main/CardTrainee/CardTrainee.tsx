import {Card} from "../../common/Card";
import {Tag} from "../../common/Tag";

import './scss/index.scss';
import {TagDate} from "../../common/TagDate";
import {UsersStack} from "../../common/UsersStack";
import {ReactComponent as Check} from '../../../icons/check.svg';
import {ReactComponent as Favorite} from "../../../icons/Favorite.svg";
import {ReactComponent as inFavorite} from "../../../icons/inFavorite.svg";
import {Link} from "react-router-dom";
import {Metro} from "../../common/Metro";

type Props = {
    id: number,
    image?: string | null,
    title: string,
    photos?: string[],
    organization?: string | null,
    description?: string | null,
    metro?: {
        name?: string | null,
        color?: string | null
    } | null
}

export const CardTrainee = (props: Props) => {
    return (
            <Card disable>
                <div className='card-trainee'>
                    <div className='box-organization'>
                        <h1 className='organization'>{props.organization}</h1>
                        <Favorite/>
                    </div>
                    {props.image && <img className='preview' src={props.image}/>}
                    <h1 className='title'>{props.title}</h1>
                    <Metro label={props.metro?.name} color={props.metro?.color} />
                    <span className='description'>
                        {props.description}
                    </span>
                </div>
            </Card>
    );
}

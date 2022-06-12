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
    image?: string,
    title: string,
    tags: {
        color: string,
        title: string
    }[],
    dates: string[],
    photos?: string[],
    counter: string,
    organization: {
        name: string
    }

}

export const CardTrainee = (props: Props) => {
    return (
        <Link to={`/event/${props.id}`}>
            <Card>
                <div className='card-trainee'>
                    <div className='box-organization'>
                        <h1 className='organization'>{props.organization.name}</h1>
                        <Favorite/>
                    </div>
                    {props.image && <img className='preview' src={props.image}/>}
                    <h1 className='title'>Маркетолог</h1>
                    <Metro label={'Лубянка'} color={'red'} />
                    <span className='description'>
                        sfvjfdsjkasjfksadhfjkashfdjkh
                    </span>
                </div>
            </Card>
        </Link>
    );
}
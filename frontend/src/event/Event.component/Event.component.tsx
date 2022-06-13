import { Card } from "../../Components/common/Card";
import './scss/index.scss';
import { Tag } from "../../Components/common/Tag";
import { ComingSoon } from "../../Components/common/ComingSoon/ComingSoon";
import { PrimaryButton } from "../../Components/common/PrimaryButtton";

type Props = {
    event: any,
    subscribeEvent: any,
    setEvent: any
}

export const EventComponent = (props: Props) => {
    return (
        <div className='page-event'>
            <Card stretched disable>
                <div className='card-event'>
                    <h1 className='title'>{props.event?.title}</h1>
                    <div className='info'>
                        <img className='image' src={props.event?.image}/>
                        <span className='description'>
                            {props.event?.descriptionOther}
                        </span>
                    </div>
                    {!props.event?.isSubscribe ? <PrimaryButton onClick={async () => {
                        await props.subscribeEvent({
                            variables: {
                                id: props.event.id
                            }
                        })
                        props.setEvent({
                            ...props.event,
                            isSubscribe: true
                        })
                    }}>Записаться</PrimaryButton> : <span>Вы уже записались</span>}
                </div>
            </Card>
        </div>
    );
}

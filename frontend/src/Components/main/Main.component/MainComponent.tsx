import {Plock} from 'react-plock';
import './scss/index.scss';
import {CardEvent} from "../CardEvent";
import {useState} from "react";
import {PrimaryButton} from "../../common/PrimaryButtton";
import {Card} from "../../common/Card";
import {Avatar, Radio} from "antd";

import {CardTrainee} from "../CardTrainee";
import { GetEvents_events } from "../hooks/__generated__/GetEvents";
import { FilterContainer } from "../Filter.container";
import { GetEventsTrainee_events } from "../hooks/__generated__/GetEventsTrainee";

type Props = {
    events: (GetEvents_events | null)[],
    eventsTrainee: (GetEventsTrainee_events | null)[],
    selectedTags: number[],
    setSelectedTags: (e: number[]) => void,
    setSelectedMetro: (e: number[]) => void,
    selectedMetro: number[]
}

export const MainComponent = (props: Props) => {
    const [isTrainee, setIsTrainee] = useState(false);

    return (
        <div className='page-main'>
            <div className='cards'>
                <div className='top'>
                    <h1 className='supertitle'>{!isTrainee ? '🔥 Все волонтерства' : '⚡ Все стажировки'}</h1>
                    <div className='switch'>
                        <PrimaryButton onClick={() => setIsTrainee(false)}
                                       bgColor={isTrainee ? '#fff' : ''}>Волонтерства</PrimaryButton>
                        <PrimaryButton onClick={() => setIsTrainee(true)}
                                       bgColor={!isTrainee ? '#fff' : ''}>Стажировки</PrimaryButton>
                    </div>
                </div>
                {!isTrainee ?
                    <Plock>
                        {props.events.map((event) => {
                            if(event?.id) {
                                return <CardEvent
                                            id={event.id}
                                            title={event.title}
                                            image={event.image}
                                            tags={event.tags}
                                            memberCount={event.memberCount}
                                            dateEvent={event.dateEvent}
                                            // photos={event.members.map(m => m.image)}
                                />
                            }
                        })}
                    </Plock>
                    :
                    <Plock>
                        {props.eventsTrainee.map((event) => {
                            if(event?.id) {
                                return <CardTrainee
                                    id={event.id}
                                    title={event.title}
                                    image={event.image}
                                    description={event.description}
                                    organization={event.organization}
                                    metro={event.metro}
                                    // tags={event.tags}
                                    // photos={event.members.map(m => m.image)}
                                />
                            }
                        })}
                    </Plock>
                }
            </div>
            <div className='filter'>
                <FilterContainer
                    isTrainee={isTrainee}
                    selectedTags={props.selectedTags}
                    setSelectedTags={props.setSelectedTags}
                    selectedMetro={props.selectedMetro}
                    setSelectedMetro={props.setSelectedMetro}
                />
            </div>
        </div>
    );
};

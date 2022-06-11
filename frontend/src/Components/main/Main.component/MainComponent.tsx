import { Plock } from 'react-plock';
import './scss/index.scss';
import {CardEvent} from "../CardEvent";
import {useState} from "react";
import {PrimaryButton} from "../../common/PrimaryButtton";

export const MainComponent = () => {
    const [isTrainee, setIsTrainee] = useState(false);

    return(
        <div className='page-main'>
            <div className='left'>
                <div className='top'>
                    <h1 className='supertitle'>🔥 Все волонтерства</h1>
                    <div className='switch'>
                        <PrimaryButton onClick={() => setIsTrainee(false)} bgColor={isTrainee ? '#fff' : ''}>Волонтерства</PrimaryButton>
                        <PrimaryButton onClick={() => setIsTrainee(true)} bgColor={!isTrainee ? '#fff' : ''}>Стажировки</PrimaryButton>
                    </div>
                </div>
                <Plock>
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                    <CardEvent
                        title='test'
                        dates={['17 Авг']}
                        tags={[{
                            color: 'red',
                            title: 'IT'
                        }]}
                        counter={'28/70'}
                        photos={
                            [
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                            ]
                        }
                    />
                </Plock>
            </div>
            <div className='right'>

            </div>
        </div>
    );
};

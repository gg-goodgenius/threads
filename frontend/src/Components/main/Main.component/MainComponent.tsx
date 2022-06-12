import {Plock} from 'react-plock';
import './scss/index.scss';
import {CardEvent} from "../CardEvent";
import {useState} from "react";
import {PrimaryButton} from "../../common/PrimaryButtton";
import {Card} from "../../common/Card";
import {Avatar, Radio} from "antd";
import {Tag} from "../../common/Tag";
import {CardTrainee} from "../CardTrainee";

export const MainComponent = () => {
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
                {!isTrainee ? <Plock>
                        <CardEvent
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            tags={[{
                                color: 'red',
                                title: 'IT'
                            }]}
                            image={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}
                            counter={'28/70'}
                            photos={
                                [
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                                ]
                            }
                        />
                        <CardEvent
                            id={2}
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
                            id={3}
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
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
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
                            id={2}
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
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            tags={[{
                                color: 'red',
                                title: 'IT'
                            }]}
                            image={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}
                            counter={'28/70'}
                            photos={
                                [
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                                ]
                            }
                        />
                    </Plock>
                    :
                    <Plock>
                        <CardTrainee
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            tags={[{
                                color: 'red',
                                title: 'IT'
                            }]}
                            image={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}
                            counter={'28/70'}
                            photos={
                                [
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                                ]
                            }
                            organization={{
                                name: 'test'
                            }}
                        />
                        <CardTrainee
                            id={2}
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
                            organization={{
                                name: 'test'
                            }}
                        />
                        <CardTrainee
                            id={3}
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
                            organization={{
                                name: 'test'
                            }}
                        />
                        <CardTrainee
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
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
                            organization={{
                                name: 'test'
                            }}
                        />
                        <CardTrainee
                            id={2}
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
                            organization={{
                                name: 'test'
                            }}
                        />
                        <CardTrainee
                            id={2}
                            title='test'
                            dates={['17 Авг']}
                            tags={[{
                                color: 'red',
                                title: 'IT'
                            }]}
                            image={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}
                            counter={'28/70'}
                            photos={
                                [
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg',
                                    'https://cdnn21.img.ria.ru/images/07e6/04/0c/1783086041_0:104:3096:1846_1920x0_80_0_0_a41a71b97d0ec70f22b5812c81f42a6c.jpg'
                                ]
                            }
                            organization={{
                                name: 'test'
                            }}
                        />
                    </Plock>
                }
            </div>
            <div className='filter'>
                {/*<h1 className='title'>Поиск по хэштегам 😎</h1>*/}
                {/*<div className='tags'>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*    <Tag color='red'>#IT</Tag>*/}
                {/*</div>*/}

                <h1 className='title'>Фильтры</h1>
                <div>
                    <Radio.Group name='trainee_type'>
                        <Radio>Оплачиваемые стажировки</Radio>
                        <Radio>Стажировки без оплаты</Radio>
                    </Radio.Group>
                </div>
            </div>
        </div>
    );
};

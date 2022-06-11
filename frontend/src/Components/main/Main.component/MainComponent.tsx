import { Card } from "../../common/Card";
import './scss/index.scss';
import {CardEvent} from "../CardEvent";

export const MainComponent = () => {
    return(
        <div className='page-main'>
            {/*<Card>*/}
            {/*    <div className='banner'>*/}
            {/*        <h1 className='title'>Начни погомать уже сегодня!</h1>*/}
            {/*        <h3>Вместе, мы можем сделать мир лучше</h3>*/}
            {/*    </div>*/}
            {/*</Card>*/}
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
        </div>
    );
};

import {Card} from "../../Components/common/Card";
import './scss/index.scss';
import {Tag} from "../../Components/common/Tag";
import {ComingSoon} from "../../Components/common/ComingSoon/ComingSoon";

export const EventComponent = () => {
    return(
        <div className='page-event'>
            <Card disable={true}>
                <div className='box-event'>
                    <div className='row'>
                        <div className='column'>
                            <div className='row info'>
                                <div className='column'>
                                    <h1 className='title'>Организация:</h1>
                                    <span className='value'>Региональный волонтёрский центр «Зоозащиты»</span>
                                </div>
                                <div className='column'>
                                    <h1 className='title'>Дата:</h1>
                                    <span className='value'>Авг 20, 2022</span>
                                </div>
                            </div>
                            <h1 className='title'>Хештеги</h1>
                            <div className='row'>
                                <Tag color={'red'}>#ID</Tag>
                            </div>
                            <h1 className='title'>Альбом</h1>
                            <ComingSoon />
                            <h1 className='title'>Все отчеты проведенных волонтерсв:</h1>
                            <ComingSoon />
                        </div>
                        <div className='column'>
                            <h1 className='title'>Чем предстоит заниматься:</h1>
                            <h1 className='title'>Организация предоставит: </h1>
                            <h1 className='title'>Каких специалистов мы ждем:</h1>
                            <h1 className='title'>Пригодится во время волонтерства:</h1>
                            <h1 className='title'>Что вы получите от волонтерства:</h1>
                        </div>
                    </div>
                    <div className='column'>
                        <h1 className='title'>Рассписание мероприятия:</h1>
                        <ComingSoon />
                    </div>
                </div>
            </Card>
        </div>
    );
}
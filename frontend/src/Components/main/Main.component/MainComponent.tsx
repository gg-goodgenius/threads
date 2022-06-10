import { Card } from "../../common/Card";
import './scss/index.scss';

export const MainComponent = () => {
    return(
        <div>
            <Card>
                <div className='banner'>
                    <h1 className='title'>Начни погомать уже сегодня!</h1>
                    <h3>Вместе, мы можем сделать мир лучше</h3>
                </div>
            </Card>
        </div>
    );
};

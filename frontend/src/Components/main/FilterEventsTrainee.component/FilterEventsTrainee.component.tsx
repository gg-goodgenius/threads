import { Radio } from "antd";

export const FilterEventsTraineeComponent = () => {
    return (
        <div className='filter-events-trainee'>
            <h1 className='title'>Фильтры:</h1>            {/*<div className='filter'>*/}
            <Radio.Group name='trainee_type'>
                <Radio>Оплачиваемые стажировки</Radio>
                <Radio>Стажировки без оплаты</Radio>
            </Radio.Group>
        </div>
    );
}

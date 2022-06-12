import './scss/index.scss';
import {Card} from "../../common/Card";
import {Checkbox, Form, Input, Radio} from "antd";

import icon from './icon.svg';
import icon_auth from './icon_auth.svg';
import {PrimaryButton} from "../../common/PrimaryButtton";
import {Link} from "react-router-dom";

import { ReactComponent as Back} from "../../../icons/back.svg";

type Props = {
    setIsLogin: (e: boolean) => void,
    handleReg: (e: any) => void
}

export const RegComponent = ({ setIsLogin, handleReg }: Props) => {

    const [form] = Form.useForm();

    const handleClickReg = () => {
        handleReg(form.getFieldsValue());
    }

    return (
        <div className='page-auth'>
            <Card disable stretched>
                <div className='card-form'>
                    <div className='header'>
                        <h1 className='title'>Регистрация</h1>
                    </div>
                    <div>
                        <Form
                            layout='vertical'
                            form={form}
                        >
                            <Form.Item
                                name='email'
                            >
                                <Input placeholder='Почта' type='text'/>
                            </Form.Item>
                            <Form.Item
                                name='password'
                            >
                                <Input placeholder='Пароль' type='password'/>
                            </Form.Item>
                            <Form.Item
                                name='typeAccount'
                                initialValue={0}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Волонтер</Radio>
                                    <Radio value={1}>НКО</Radio>
                                    <Radio value={2}>Представитель бизнеса</Radio>
                                </Radio.Group>

                            </Form.Item>
                            <Form.Item>
                                <Checkbox defaultChecked>
                                    Согласиться с Условиями использования и Политикой конфеденциальности
                                </Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <PrimaryButton mode='s' type='full' onClick={handleClickReg}>Зарегистрироваться</PrimaryButton>
                            </Form.Item>
                        </Form>
                    </div>
                    <span className='not-account'>Есть аккаунт? <a onClick={() => setIsLogin(true)}>Войти</a></span>
                </div>
            </Card>
            <div className='right'>
                <h1 className='title'>Присоединяйся к нашей команде!</h1>
                <span className='caption'>Вместе, мы сможем сделать город лучше!</span>
                <img src={icon}/>
            </div>
        </div>
    );
}

import './scss/index.scss';
import {Card} from "../../common/Card";
import {Checkbox, Form, Input} from "antd";

import icon from './icon.svg';
import icon_auth from './icon_auth.svg';
import {PrimaryButton} from "../../common/PrimaryButtton";
import {Link} from "react-router-dom";

type Props = {
    setIsLogin: (e: boolean) => void
}

export const RegComponent = ({ setIsLogin }: Props) => {
    return (
        <div className='page-auth'>
            <Card>
                <div className='card-form'>
                    <div>
                        <Form
                            layout='vertical'
                        >
                            <Form.Item
                                label='Введите телефон или эл. почту'
                            >
                                <Input type='text'/>
                            </Form.Item>
                            <Form.Item
                                label='Придумайте пароль'
                            >
                                <Input type='password'/>
                            </Form.Item>
                            <Form.Item
                                label='Придумайте пароль'
                            >
                                <Input type='password'/>
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>
                                    Согласиться с Условиями использования и Политикой конфеденциальности
                                </Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <PrimaryButton mode='s'>Зарегистрироваться</PrimaryButton>
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
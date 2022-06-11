import './scss/index.scss';
import {Card} from "../../common/Card";
import {Form, Input} from "antd";

import icon from './icon.svg';
import icon_auth from './icon_auth.svg';
import {PrimaryButton} from "../../common/PrimaryButtton";
import {Link} from "react-router-dom";

type Props = {
    setIsLogin: (e: boolean) => void
}

export const AuthComponent = ({ setIsLogin }: Props) => {
    return (
        <div className='page-auth'>
            <Card>
                <div className='card-form'>
                    <div>
                        <img src={icon_auth}/>
                        <Form
                            layout='vertical'
                        >
                            <Form.Item
                                label='Логин'
                            >
                                <Input type='text'/>
                            </Form.Item>

                            <Form.Item
                                label='Пароль'
                            >
                                <Input type='password'/>
                            </Form.Item>
                            <Form.Item>
                                <PrimaryButton mode='s'>Войти</PrimaryButton>
                            </Form.Item>
                        </Form>
                    </div>
                    <span className='not-account'>Нет аккаунта? <a onClick={() => setIsLogin(false)}>Зарегистрироваться</a></span>
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
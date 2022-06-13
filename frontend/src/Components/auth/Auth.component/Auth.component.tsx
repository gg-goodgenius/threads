import './scss/index.scss';
import {Card} from "../../common/Card";
import {Form, Input} from "antd";

import icon from './icon.svg';
import icon_auth from './icon_auth.svg';
import {PrimaryButton} from "../../common/PrimaryButtton";

type Props = {
    setIsLogin: (e: boolean) => void,
    handleLogin: (e: any) => void
}

export const AuthComponent = ({ setIsLogin, handleLogin }: Props) => {
    const [form] = Form.useForm();

    const handleClickLogin = () => {
        handleLogin(form.getFieldsValue());
    }

    return (
        <div className='page-auth'>
            <Card disable stretched>
                <div className='card-form'>
                    <div>
                        <img src={icon_auth}/>
                        <Form
                            layout='vertical'
                            form={form}
                        >
                            <Form.Item
                                name='email'
                            >
                                <Input type='text' placeholder='Логин' />
                            </Form.Item>

                            <Form.Item
                                name='password'
                            >
                                <Input type='password' placeholder='Пароль' />
                            </Form.Item>
                            <Form.Item>
                                <PrimaryButton type='full' mode='s' onClick={handleClickLogin}>Войти</PrimaryButton>
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
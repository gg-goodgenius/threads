import { useNavigate } from "react-router-dom";
import { Tabs } from "../common/Tabs";
import { Tab } from "../common/Tab";
import icon from "./icon.svg";

import './scss/index.scss'
import {Button} from "antd";
import {PrimaryButton} from "../common/PrimaryButtton";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";
import Avatar from "antd/es/avatar/avatar";

export const Header = () => {
    const {user} = useContext(UserContext)
    const nav = useNavigate();

    return (
        <div className='Header'>
            <div className='logo_container'>
                <img className='logo' src={icon}/>
                <h1 className='title'>Нити</h1>
            </div>
            <Tabs>
                <Tab
                    label='О нас'
                    path='/about'
                />
                <Tab
                    label='Главная'
                    path='/'
                />
                <Tab
                    label='Команды'
                    path='/teams'
                />
                <Tab
                    label='Новости'
                    path='/news'
                />

            </Tabs>
            {!user?.id ? <PrimaryButton onClick={() => nav('/auth')}>Войти</PrimaryButton> : <Avatar />}
        </div>
    );
}

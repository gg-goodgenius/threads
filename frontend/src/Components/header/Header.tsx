import { useNavigate } from "react-router-dom";
import { Tabs } from "../common/Tabs";
import { Tab } from "../common/Tab";
import icon from "./icon.svg";

import './scss/index.scss'

export const Header = () => {

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
        </div>
    );
}

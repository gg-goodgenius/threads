import React from "react";
import './scss/index.scss';
import { Header } from "../../header/Header";

type Props = {
    children?: React.ReactNode,
    header?: JSX.Element
}

export const Page = ({children, header = <Header />}: Props) => {
    return (
        <div className='page'>
            {header}
            {children}
        </div>
    );
}

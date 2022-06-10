import React from "react";
import './scss/index.scss';

type Props = {
    children?: React.ReactNode,
    header?: React.ReactNode
}

export const Page = ({children, header}: Props) => {
    return (
        <div className='page'>
            {header}
            {children}
        </div>
    );
}

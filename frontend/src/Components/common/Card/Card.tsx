import './scss/index.scss';
import React from "react";

type Props = {
    children: React.ReactNode
}

export const Card = ({ children }: Props) => {
    return(
        <div className='card'>
            {children}
        </div>
    );
}

import React from "react";
import './scss/index.scss';

type Props = {
    children: React.ReactNode
}

export const TagDate = ({ children}: Props) => {
    return(
        <div className='tag-date'>
            {children}
        </div>
    );
}
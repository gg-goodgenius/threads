import React from "react";
import './scss/index.scss';

type Props = {
    children?: React.ReactNode,
    color?: string
}

export const Tag = ({ children, color }: Props) => {
    return(
        <div className='tag' style={{ backgroundColor: color }}>
            {children}
        </div>
    );
}

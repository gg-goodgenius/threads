import React from "react";
import './scss/index.scss'

type Props = {
    children: React.ReactNode
}

export const Tabs = ({ children }: Props) => {
    return(
        <div className='tabs'>
            {children}
        </div>
    );
}

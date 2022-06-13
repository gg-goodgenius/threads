import React from "react";
import './scss/index.scss';

type Props = {
    children?: React.ReactNode,
    color?: string,
    onClick?: () => void
}

export const Tag = ({ children, color, onClick }: Props) => {
    //TODO переписать
    return(
        <div className='tag' onClick={onClick} style={{ backgroundColor: color, color: color === '#E5E5E5' ? '#99999C' : undefined }}>
            {children}
        </div>
    );
}

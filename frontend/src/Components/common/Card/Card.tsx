import './scss/index.scss';
import React from "react";
import classNames from "classnames";

type Props = {
    children: React.ReactNode,
    disable?: boolean
}

export const Card = ({ children, disable }: Props) => {
    const classNameCard = classNames('card', {
        disable: !!disable
    })
    return(
        <div className={classNameCard}>
            {children}
        </div>
    );
}

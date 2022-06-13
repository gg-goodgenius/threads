import './scss/index.scss';
import React from "react";
import classNames from "classnames";

type Props = {
    children: React.ReactNode,
    disable?: boolean,
    stretched?: boolean
}

export const Card = ({ children, disable, stretched }: Props) => {
    const classNameCard = classNames('card', {
        disable: !!disable,
        stretched: !!stretched
    })
    return(
        <div className={classNameCard}>
            {children}
        </div>
    );
}

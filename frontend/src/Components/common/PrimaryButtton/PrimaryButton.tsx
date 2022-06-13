import { Button } from "antd";
import './scss/index.scss'
import React from "react";

type Props = {
    children?: React.ReactNode,
    bgColor?: string,
    onClick?: () => void,
    mode?: 's' | 'm' | 'l',
    type?: 'full' | 'block'
}

export const PrimaryButton = (props: Props) => {
    return(
        <Button
            onClick={props.onClick}
            className={`primary-button ${props.mode} ${props.type}`}
            style={{
                backgroundColor: props.bgColor,
                color: props.bgColor === '#fff' ? '#000' : '#fff'
            }}
            size='large'
            block={props.type === 'full'}
        >
            {props.children}
        </Button>
    );
}

import { Button } from "antd";
import './scss/index.scss'
import React from "react";

type Props = {
    children?: React.ReactNode,
    bgColor?: string,
    onClick?: () => void
}

export const PrimaryButton = (props: Props) => {
    return(
        <Button
            onClick={props.onClick}
            className='primary-button'
            style={{
                backgroundColor: props.bgColor
            }}
        >
            {props.children}
        </Button>
    );
}

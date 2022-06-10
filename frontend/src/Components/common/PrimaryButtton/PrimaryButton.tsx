import { Button } from "antd";
import './scss/index.scss'
import React from "react";

type Props = {
    children?: React.ReactNode,
}

export const PrimaryButton = (props: Props) => {
    return(
        <Button
            className='primary-button'
        >
            {props.children}
        </Button>
    );
}

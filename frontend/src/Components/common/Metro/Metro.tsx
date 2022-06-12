import './scss/index.scss';
import Avatar from "antd/es/avatar/avatar";

type Props = {
    label: string,
    color: string
}

export const Metro = (props: Props) => {
    return(
        <div className='box-metro'>
            <Avatar size={12} style={{
                backgroundColor: props.color
            }} />
            <span className='label'>{props.label}</span>
        </div>
    );
}
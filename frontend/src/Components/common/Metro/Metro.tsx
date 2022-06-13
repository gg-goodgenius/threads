import './scss/index.scss';
import Avatar from "antd/es/avatar/avatar";

type Props = {
    label?: string | null,
    color?: string | null
}

export const Metro = (props: Props) => {
    return(
        <div className='box-metro'>
            <Avatar size={12} style={{
                backgroundColor: props.color ? props.color : '#fff'
            }} />
            <span className='label'>{props.label}</span>
        </div>
    );
}

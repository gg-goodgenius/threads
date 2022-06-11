import { Link, useLocation, useNavigate } from "react-router-dom";
import './scss/index.scss'
import classNames from "classnames";

type Props = {
    label: string,
    path: string
}

export const Tab = ({label, path}: Props) => {
    const nav = useNavigate();
    const location = useLocation();
    console.log(location)
    const tab = classNames('tab', {
        active: location.pathname == path
    })
    return (
        <div className={tab} onClick={() => nav(path)}>
            {label}
        </div>
    );
}

import {AuthComponent} from "../Auth.component";
import {useState} from "react";
import {RegComponent} from "../Reg.component";

export const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);
    return(isLogin ? <AuthComponent setIsLogin={setIsLogin} /> : <RegComponent setIsLogin={setIsLogin} />);
}
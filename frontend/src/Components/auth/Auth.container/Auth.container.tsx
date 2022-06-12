import {AuthComponent} from "../Auth.component";
import {useState} from "react";
import {RegComponent} from "../Reg.component";
import {gql, useMutation} from "@apollo/client";
import {Login, LoginVariables} from "./__generated__/Login";

export const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [login] = useMutation<Login, LoginVariables>(LOGIN);

    const handleLogin = async (formData: any) => {
        const res = await login({
            variables: {
                email: formData.email,
                password: formData.email
            }
        });
        console.log(res)
    }

    return(
        isLogin
            ? <AuthComponent setIsLogin={setIsLogin} handleLogin={handleLogin} />
            : <RegComponent setIsLogin={setIsLogin} />);
}

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            payload
            token
        }
    }
`;
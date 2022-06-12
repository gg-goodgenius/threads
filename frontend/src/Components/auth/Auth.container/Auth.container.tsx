import {AuthComponent} from "../Auth.component";
import { useContext, useEffect, useState } from "react";
import {RegComponent} from "../Reg.component";
import {gql, useMutation} from "@apollo/client";
import {Login, LoginVariables} from "./__generated__/Login";
import { Reg, RegVariables } from "./__generated__/Reg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserState";

export const AuthContainer = () => {
    const nav = useNavigate();
    const {updateUser, user} = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(true);

    const [login] = useMutation<Login, LoginVariables>(LOGIN);
    const [reg] = useMutation<Reg, RegVariables>(REG);

    const handleLogin = async (formData: any) => {
        const res = await login({
            variables: {
                email: formData.email,
                password: formData.password
            }
        });
        if(res.data?.login?.token) {
            localStorage.setItem('token', res.data.login.token);
            updateUser()
        }
    }

    const handleReg = async (formData: any) => {
        const res = await reg({
            variables: {
                email: formData.email,
                password: formData.password,
                typeAccount: formData.typeAccount
            }
        });
        if(res.data?.registrationUser?.token) {
            localStorage.setItem('token', res.data.registrationUser.token);
            updateUser()
        }
    }

    useEffect(() => {
        if(user) {
            nav('/')
        }
    }, [user])

    return(
        isLogin
            ? <AuthComponent setIsLogin={setIsLogin} handleLogin={handleLogin} />
            : <RegComponent setIsLogin={setIsLogin} handleReg={handleReg} />);
}

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            payload
            token
        }
    }
`;

const REG = gql`
    mutation Reg($email: String!, $password: String!, $typeAccount: Int!) {
        registrationUser(email: $email, password: $password, typeAccount: $typeAccount) {
            token
        }
    }
`;

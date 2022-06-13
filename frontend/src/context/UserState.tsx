import React, {createContext, useEffect, useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";
import {GetUser} from "./__generated__/GetUser";
import { useGetUser } from "../Components/common/hooks/useGetUser";

export const UserContext = createContext<{
    user?: User | null,
    setUser: (e: User | null) => void,
    updateUser: () => void
}>({
    user: null,
    setUser: () => {},
    updateUser: () => {}
});

interface User {
    id: number
    image: string | null
}

type Props = {
    children: React.ReactNode
}

export const UserState = (props: Props) => {
    const getUser = useGetUser();
    const [user, setUser] = useState<User | null>(null);

    const updateUser = () => {
        const fetchUser = async () => {
            const res = await getUser();
            if(res.data?.user?.id) {
                setUser({ id: res.data.user.id, image: res.data.user.image });
            } else {
                console.log('error get user')
            }
        }
        if(localStorage.getItem('token')) {
            fetchUser().then();
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUser();
            if(res.data?.user?.id) {
                setUser({ id: res.data.user.id, image: res.data.user.image });
            } else {
                console.log('error get user')
            }
        }
        if(localStorage.getItem('token')) {
            fetchUser().then();
        }
    }, [])

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                updateUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

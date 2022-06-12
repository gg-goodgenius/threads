import React, {createContext, useEffect, useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";
import {GetUser} from "./__generated__/GetUser";

export const UserContext = createContext<{
    user?: User | null,
    setUser?: ((e: User) => void) | null
}>({
    user: null,
    setUser: null
});

interface User {
    id: string
}

type Props = {
    children: React.ReactNode
}

export const UserState = (props: Props) => {
    const [getUser] = useLazyQuery<GetUser>(GET_USER)
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUser();
            if(res.data?.getUser) {
                setUser(res.data.getUser);
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
                setUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

const GET_USER = gql`
    query GetUser {
        getUser {
            id
            firstName
            lastName
        }
    }
`;
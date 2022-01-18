import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import jwt from 'jsonwebtoken';



const authApi = 'http://localhost:1337/api/users';

export const AuthContext = createContext();

export default function useAuth() {

    const auth = useContext(AuthContext);
    if (!auth) throw new Error('Your forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);

    const hasPermission = useCallback(function (permission) {
        if (!user) return false;

        //No specific permission requested, but they are signed in
        if (!permission) return true;

        //Asked for permission and user has none
        if (!user.permission) return false;

        //Can user do the specific thing?
        return user.permission.includes(permission);
    }, [user]);

    const auth = useMemo(() => {
        console.log('New auth state!');

        return ({
            user,

            hasPermission,
            login,
            logout,
        });
    }, [user, hasPermission]);

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [user])

    async function login(loginData) {

        const result = await fetch(`${authApi}/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },

            //     body: JSON.stringify(
            //         {
            //             data:
            //                 { username, password }
            //         }),
            // })
            //     .then(response => response.text())
            //     .then(data => console.log(data));

            body: JSON.stringify(loginData),
        });

        const resultBody = await result.json();
        console.log(resultBody);

        if (result.ok) {
            let user = processUser(resultBody)
            setUser(user);
        } else {
            console.warn('auth failed', resultBody);

        }

    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

function processUser(user) {
    if (!user) return null;

    try {
        const payload = jwt.decode(user.token);
        if (payload) {
            //Copy everything from the payload into the user
            Object.assign(user, payload);

            console.log(user);
            return user;
        }
    }
    catch (e) {
        console.warn(e);
    }

    return null;
}



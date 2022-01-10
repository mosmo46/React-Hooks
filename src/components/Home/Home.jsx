import React,{useContext} from 'react'

import UserContext from "../../components/UserContext/context"

import AuthApp from "../UserContext/AuthApp/AuthApp"
import UnauthApp from "../UserContext/UnauthApp/UnauthApp"


export default function Home() {
    const { user } = useContext(UserContext);

        return user.auth ? <AuthApp /> : <UnauthApp />;

        
    
}

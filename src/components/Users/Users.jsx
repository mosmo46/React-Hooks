import React,{useContext} from 'react'


import UserContext from "../UserContext/context";

export default function Users() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Users</h1>
            {user.name || "no name"}
        </div>
    )
}

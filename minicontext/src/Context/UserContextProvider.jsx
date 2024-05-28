import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=([children])=>{
    const[user, setUser]= React.useState(null)
    return(
        <UserContext.Provider value={{user,setUserjjj}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
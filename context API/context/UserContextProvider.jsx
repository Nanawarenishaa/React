import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [PersonData, setPersonData] = React.useState(null)
    return(
        <UserContext.Provider value={{PersonData, setPersonData}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
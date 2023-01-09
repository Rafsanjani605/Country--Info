import React, { createContext } from 'react';
export const AuthContext = createContext();

const UserContext = ({children}) => {

    const user = {displayname: 'Rafsan'}
    const authinfo = {user : user}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;
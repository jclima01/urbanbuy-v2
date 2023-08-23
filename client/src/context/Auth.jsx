import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  // Initial Provider State
  const [auth, setAuth] = useState(JSON.parse( localStorage.getItem("session")) || {});
  
    const setLocalStorageUser = (values) => {

        localStorage.setItem('session', JSON.stringify(values))
    }

  return (
    <AuthContext.Provider value={{ auth, setAuth , setLocalStorageUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

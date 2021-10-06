import React, { useContext } from 'react';

const AppContext = React.createContext();

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppContext, useAppContext }

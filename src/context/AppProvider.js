import React, { useState } from "react";

import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
    const [userAccounts, setUserAccounts] = useState([
        {
            id: 1,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 2,
            platformName: 'Instagram',
            platformType: 'Social',
            username: 'elJudio123',
            password: 'elameculos',
            email: 'callejas@correo.com'
        },
        {
            id: 3,
            platformName: 'Instagram',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 4,
            platformName: 'League of legends',
            platformType: 'Game',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 5,
            platformName: 'Counter strike',
            platformType: 'Game',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 6,
            platformName: 'GTA',
            platformType: 'Game',
            username: 'kylu',
            password: '123456',
            email: 'kylu@correo.com'
        },
        {
            id: 7,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 8,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 9,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 10,
            platformName: 'Facebook',
            platformType: 'Social',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
    ]);

    const providerValue = {
        data: {
            userAccounts,

        },
        actions: {

        }
    }

    return(
        <AppContext.Provider value={providerValue}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
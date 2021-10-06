import React, { useState, useEffect } from "react";

import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
    const [userAccountsList, setUserAccountsList] = useState([
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
            platformName: 'League Of Legends',
            platformType: 'Game',
            username: 'nicoohermida',
            password: '123456',
            email: 'nico@correo.com'
        },
        {
            id: 5,
            platformName: 'Counter Strike',
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
    const [userAccountsDisplay, setUserAccountsDisplay] = useState([]);
    const [searchBoxInput, setSearchBoxInput] = useState('');

    /* FUNCTION TO SET DEFAULT VALUES */
    useEffect(() => {
        /* api conexion */
        /* get data accounts from api */
    }, []);

    /* FUNCTION TO DISPLAY THE CORRECT ACCOUNTS */
    useEffect(() => {
        if (searchBoxInput === '') setUserAccountsDisplay(userAccountsList);
        else setUserAccountsDisplay(userAccountsList.filter(account => account.platformName.toUpperCase().indexOf(searchBoxInput.toUpperCase()) > -1));
    }, [searchBoxInput]);

    /* FUNCTION TO UPDATE THE SEARCHBOX INPUT STATE */
    const updateSearchBox = (value) => {
        setSearchBoxInput(value);
    }

    /* APP STATES */
    const providerValue = {
        data: {
            userAccountsDisplay,
            searchBoxInput,

        },
        actions: {
            updateSearchBox,

        }
    }

    return(
        <AppContext.Provider value={providerValue}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
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
            id: 11,
            platformName: 'Yahoo',
            platformType: 'Email',
            username: '',
            password: '123456789',
            email: 'pepita_lp17@yahoo.com.ar'
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
    const [userConnected, setUserConnected] = useState(false);

    /* FUNCTION TO GET USER ACCOUNTS */
    useEffect(() => {
        /* api conexion */
        /* get data accounts from api */
    }, []);

    /* FUNCTION TO FILTER ACCOUNTS BY SEARCHBOX INPUT */
    useEffect(() => {
        if (searchBoxInput === '') setUserAccountsDisplay(userAccountsList);
        else setUserAccountsDisplay(userAccountsList.filter(account => account.platformName.toUpperCase().indexOf(searchBoxInput.toUpperCase()) > -1));
    }, [searchBoxInput]);

    /* FUNCTION TO UPDATE THE SEARCHBOX INPUT STATE */
    const updateSearchBox = (value) => {
        setSearchBoxInput(value);
    }

    const handleUserConected = () => {
        setUserConnected(!userConnected)
    }

    /* APP STATES */
    const providerValue = {
        data: {
            userAccountsList,
            userAccountsDisplay,
            searchBoxInput,
            userConnected,

        },
        actions: {
            updateSearchBox,
            handleUserConected,

        }
    }

    return(
        <AppContext.Provider value={providerValue}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
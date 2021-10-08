import { useState, useEffect } from "react";

import { useAppContext } from '../context/AppContext';

/* Funcion para obtener una cuenta mediante su id */
const useGetAccount = (id) => {
    const { data: { userAccountsList } } = useAppContext();
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const temp = userAccountsList.filter(account => account.id.toString() === id);
        setAccount(temp[0]);
    }, [id]);

    return account;
}

export default useGetAccount;
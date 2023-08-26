import { createContext, useContext, useEffect } from "react";
import axios from 'axios';

const AppContext = createContext();

const API = 'https://aarvi18.github.io/ProductAPI/Product.json';

const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        
    };

    useEffect(() => {
        getProducts(API);
    }, []);
    return (
        <AppContext.Provider value={{ myName: 'Rakesh Kumar' }}>
            {children}
        </AppContext.Provider>)
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext }
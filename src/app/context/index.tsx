"use client"
import { createContext, useContext, useState } from "react";

type Order = {
    id: number
    name: string
    category: string
    date: string
    time: string
};
  
type StorageType = {
    order: Order;
    orderList: Order[];
    progress: number
    reserving: boolean
};

type ContextValueType = {
    storage: StorageType;
    setStorage: React.Dispatch<React.SetStateAction<StorageType>>;
};

const defaultStorageValue: StorageType = {
    order: {
        id: 0, 
        name: "",
        category: "",
        date: "",
        time: "",
    },
    orderList: [],
    progress: 1,
    reserving: true
};

const AppContext = createContext<ContextValueType>({
    storage: defaultStorageValue,
    setStorage: () => {} 
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [storage, setStorage] = useState(defaultStorageValue);

    return (
        <AppContext.Provider value={{ storage, setStorage }}>{children}</AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}


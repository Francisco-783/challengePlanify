"use client"
import { createContext, useContext, useState } from "react";

type Order = {
    name: string
    // need more values to define
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
    order: { name: ""},
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
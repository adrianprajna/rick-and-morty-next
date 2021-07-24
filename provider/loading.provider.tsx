import { createContext, useState } from "react";

export const LoadingContext = createContext<any>(null)

export const LoadingProvider = ({children}: any) => {

    const [isLoading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={[isLoading, setLoading]}>
            {children}
        </LoadingContext.Provider>
    )
}
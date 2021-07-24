import { createContext, useState } from "react";

export const ModalContext = createContext<any>(null)

export const ModalProvider = ({children}: any) => {

    const [modal, setModal] = useState({
        open: false,
        message: ""
    })

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {children}
        </ModalContext.Provider>
    )
}
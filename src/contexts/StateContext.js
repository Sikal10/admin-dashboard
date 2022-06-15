import {createContext, useState, useContext} from "react";

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false
}

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    };

    return <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}
    >
        {children}
    </StateContext.Provider>
};

export const useStateContext = () => useContext(StateContext);
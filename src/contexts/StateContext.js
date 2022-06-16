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
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [themeSettings, setThemeSettings] = useState(false);
    const [themeMode, setThemeMode] = useState("Light");

    const handleThemeMode = (mode) => {
        setThemeMode(mode);
        localStorage.setItem("themeMode", mode);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    };

    return <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            setColor,
            themeSettings,
            setThemeSettings,
            themeMode,
            handleThemeMode
        }}
    >
        {children}
    </StateContext.Provider>
};

export const useStateContext = () => useContext(StateContext);
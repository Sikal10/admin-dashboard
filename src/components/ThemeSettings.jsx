import {MdOutlineCancel} from 'react-icons/md';
import {BsCheck} from 'react-icons/bs';
import {themeColors} from '../data/dummy';
import {useStateContext} from "../contexts/StateContext";

const ThemeSettings = () => {
    const {setColor, currentColor, setThemeSettings, handleThemeMode} = useStateContext();

    return (
        <div className={"flex justify-end bg-half-transparent fixed w-screen top-0 right-0"}>
            <div className={"h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-400"}>
                <div className={"flex items-center justify-between p-4 ml-4"}>
                    <p className="font-semibold text-xl">Settings</p>
                    <button
                        onClick={() => setThemeSettings(false)}
                        style={{color: 'rgb(153, 171, 180)', borderRadius: "50%"}}
                        className={"text-2xl p-3 hover:bg-light-gray"}
                    >
                        <MdOutlineCancel/>
                    </button>
                </div>

                <div className={"border-t-1 border-color p-4 ml-4"}>
                    <p className="font-semibold text-lg">Theme Options</p>

                    <div className={"space-x-3 mt-4"}>
                        <button onClick={() => handleThemeMode("Light")} className={"w-8 h-8 bg-light-gray rounded-md"}/>
                        <button onClick={() => handleThemeMode("Dark")} className={"w-8 h-8 bg-secondary-dark-bg rounded-md "}/>
                    </div>

                </div>

                <div className={"border-t-1 border-color p-4 ml-4"}>
                    <p className="font-semibold text-lg">Theme Colors</p>

                    <div className={"mt-4 flex gap-3"}>
                        {themeColors.map((theme, index) => <div className={""} key={index}>
                            <button onClick={() => setColor(theme.color)} className={"h-10 w-10 rounded-full cursor-pointer border"} style={{background: theme.color}}>
                                <BsCheck className={`text-2xl text-white ml-2 ${theme.color === currentColor ? "block" : "hidden"}`} />
                            </button>
                        </div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThemeSettings;
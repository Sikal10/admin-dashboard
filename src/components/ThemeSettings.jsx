import {MdOutlineCancel} from 'react-icons/md';
import {BsCheck} from 'react-icons/bs';
import {themeColors} from '../data/dummy';
import {useStateContext} from "../contexts/StateContext";

const ThemeSettings = () => {
    const {setColor, setMode, currentMode, currentColor, setThemeSettings, themeSettings} = useStateContext();

    return (
        <div className={"flex justify-end bg-half-transparent fixed w-screen top-0 right-0"}>
            <div className={"h-screen dark:text-gray-200 bg-white dark:[#484B52 w-400"}>
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
                    
                    <div className={"mt-4"}>
                        <input 
                            type="radio"
                            id={"light"}
                            name={"theme"}
                            value={"Light"} 
                            className={"cursor-pointer"}
                            onChange={setMode}
                            checked={currentMode === "Light"}
                        />
                        <label htmlFor="light" className={"ml-2 text-md cursor-pointer"}>Light</label>
                    </div>
                    <div className={"mt-4"}>
                        <input
                            type="radio"
                            id={"dark"}
                            name={"theme"}
                            value={"Dark"}
                            className={"cursor-pointer"}
                            onChange={setMode}
                            checked={currentMode === "Dark"}
                        />
                        <label htmlFor="dark" className={"ml-2 text-md cursor-pointer"}>Dark</label>
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
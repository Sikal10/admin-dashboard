import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";

import {Navbar, Sidebar, ThemeSettings} from "./components";
import {
    Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line,
    Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor
} from './pages';
import {useStateContext} from "./contexts/StateContext";

import './App.css';
import {useEffect} from "react";

function App() {
    const {activeMenu, themeSettings, setThemeSettings, currentColor, themeMode, handleThemeMode, setColor} = useStateContext();

    useEffect(() => {
        const currentThemeMode = localStorage.getItem("themeMode");
        const currentColorMode = localStorage.getItem("colorMode");

        if (currentThemeMode || currentColorMode ) {
            handleThemeMode(currentThemeMode);
            setColor(currentColorMode);
        }
    }, []);

    return (
        <div className={themeMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className={"fixed right-4 bottom-4"} style={{zIndex: 1000}}>
                        <TooltipComponent content={"Settings"} position={"Top"}>
                            <button onClick={() => setThemeSettings(true)} style={{background: currentColor}}
                                    className={"text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full text-white"}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>

                    {/* sidebar */}
                    {activeMenu ?
                        <div className={"w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"}>
                            <Sidebar/>
                        </div>
                        :
                        <div className={"w-0 dark:bg-secondary-dark-bg"}>
                            <Sidebar/>
                        </div>
                    }

                    {/* rest of the pages */}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>

                        {/*navbar*/}
                        <div className={"navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full"}>
                            <Navbar/>
                        </div>

                        {/* Routes */}
                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>

                                {/* dashboard */}
                                <Route path={"/"} element={<Ecommerce/>}/>
                                <Route path={"/ecommerce"} element={<Ecommerce/>}/>

                                {/* pages */}
                                <Route path={"/orders"} element={<Orders/>}/>
                                <Route path={"/employees"} element={<Employees/>}/>
                                <Route path={"/customers"} element={<Customers/>}/>

                                {/* apps */}
                                <Route path={"/kanban"} element={<Kanban/>}/>
                                <Route path={"/calendar"} element={<Calendar/>}/>
                                <Route path={"/editor"} element={<Editor/>}/>
                                <Route path={"/color-picker"} element={<ColorPicker/>}/>

                                {/* charts */}
                                <Route path={"line"} element={<Line/>}/>
                                <Route path={"area"} element={<Area/>}/>
                                <Route path={"bar"} element={<Bar/>}/>
                                <Route path={"pie"} element={<Pie/>}/>
                                <Route path={"financial"} element={<Financial/>}/>
                                <Route path={"color-mapping"} element={<ColorMapping/>}/>
                                <Route path={"pyramid"} element={<Pyramid/>}/>
                                <Route path={"stacked"} element={<Stacked/>}/>

                            </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

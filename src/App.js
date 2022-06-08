import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";

import {Navbar, Sidebar, Footer, ThemeSettings} from "./components";
import {
    Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line,
    Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor
} from './pages';


import './App.css';

function App() {
    const activeMenu = true;

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className={"fixed right-4 bottom-4"} style={{zIndex: 1000}}>
                        <TooltipComponent content={"Settings"} position={"Top"}>
                            <button style={{background: "grey"}}
                                    className={"text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full text-white"}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>

                    {/* sidebar */}
                    {activeMenu ?
                        <div className={"sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg"}>
                            <Sidebar/>
                        </div>
                        :
                        <div className={"w-0 dark:bg-secondary-dark-bg"}>
                            <Sidebar />
                        </div>
                    }

                    {/* navigation */}
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                        <div className={"navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full"}>
                            <Navbar />
                        </div>
                    </div>

                    {/* Routes */}
                    <div>
                        <Routes>

                            {/* dashboard */}
                            <Route path={"/"} element={<Ecommerce />}/>
                            <Route path={"/ecommerce"} element={<Ecommerce />}/>

                            {/* pages */}
                            <Route path={"/orders"} element={<Orders />}/>
                            <Route path={"/employees"} element={<Employees />}/>
                            <Route path={"/customers"} element={<Customers />}/>

                            {/* apps */}
                            <Route path={"/kanban"} element={<Kanban />}/>
                            <Route path={"/calendar"} element={<Calendar />}/>
                            <Route path={"/editor"} element={<Editor />}/>
                            <Route path={"/color-picker"} element={<ColorPicker />}/>

                            {/* charts */}
                            <Route path={"line"} element={<Line />} />
                            <Route path={"area"} element={<Area />} />
                            <Route path={"bar"} element={<Bar />} />
                            <Route path={"pie"} element={<Pie />} />
                            <Route path={"financial"} element={<Financial />} />
                            <Route path={"color-mapping"} element={<ColorMapping />} />
                            <Route path={"pyramid"} element={<Pyramid />} />
                            <Route path={"stacked"} element={<Stacked />} />

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

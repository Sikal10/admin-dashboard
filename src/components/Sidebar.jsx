import {Link, NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {links} from "../data/dummy";
import {useStateContext} from "../contexts/StateContext";

const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 700) {
            setActiveMenu(false);
        }
    }

    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    return (
        <div className={"ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto"}>
            {activeMenu && <div>
                {/*top*/}
                <div className={"flex items-center justify-between"}>
                    <Link onClick={handleCloseSidebar} to={"/"}
                          className={"flex items-center gap-3 ml-3 mt-4 text-xl font-bold tracking-tight text-slate-900"}>
                        <SiShopware/> <span>Sikal</span>
                    </Link>

                    <TooltipComponent content={"Menu"} position={"BottomCenter"}>
                        <button onClick={() => setActiveMenu(false)} className={"text-xl p-3 rounded-full hover:bg-light-gray mt-4 block md:hidden"}><MdOutlineCancel/></button>
                    </TooltipComponent>
                </div>

                {/*links*/}
                <div className={"mt-10"}>
                    {links.map((item, index) => <div key={index}>
                        <p className={"uppercase text-gray-400 m-3 mt-4"}>{item.title}</p>
                        {item.links.map((link) =>
                            <NavLink key={link.name} to={`/${link.name}`}
                                     onClick={handleCloseSidebar}
                                     className={({isActive}) => isActive ? activeLink : normalLink}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </NavLink>
                        )}
                    </div>)}
                </div>
            </div>}
        </div>
    );
};

export default Sidebar;
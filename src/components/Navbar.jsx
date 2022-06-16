import React, {useEffect} from 'react';
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {AiOutlineMenu} from "react-icons/ai";
import {BsChatLeft} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {RiNotification3Line} from "react-icons/ri";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useStateContext} from "../contexts/StateContext";
import avatar from "../data/avatar.jpg";
import Chat from "./Chat";
import Cart from "./Cart";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const NavButton = ({title, handleClickButton, icon, color, dotColor}) => {
    return <TooltipComponent content={title} position={"BottomCenter"}>
        <button style={{color}} onClick={handleClickButton} className={"relative text-xl p-3 rounded-full hover:bg-light-gray "}>
            <span className={"absolute inline-flex rounded-full h-2 w-2 right-2 top-2"} style={{background: dotColor}}/>
            {icon}
        </button>
    </TooltipComponent>
}

const Navbar = () => {
    const {activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [setScreenSize]);

    useEffect(() => {
        if (screenSize <= 700) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize, setActiveMenu])

    return (
        <div className={"flex justify-between p-2 md:mx-6 relative"}>
            {/*top*/}
            <NavButton handleClickButton={() => setActiveMenu(!activeMenu)} color={currentColor} title={"Menu"} icon={<AiOutlineMenu />} />

            <div className={"flex gap-1"}>
                <NavButton handleClickButton={() => handleClick("cart")} color={currentColor} title={"Cart"} icon={<FiShoppingCart />} />
                <NavButton handleClickButton={() => handleClick("chat")} dotColor={currentColor} color={currentColor} title={"Chat"} icon={<BsChatLeft />} />
                <NavButton handleClickButton={() => handleClick("notifications")} dotColor={currentColor} color={currentColor} title={"Notifications"} icon={<RiNotification3Line />} />
                <TooltipComponent content={"Profile"} position={"BottomCenter"}>
                    <div className={"flex items-center gap-2 cursor-pointer"} onClick={() => console.log("profile")}>
                        <img className={"w-8 h-8 rounded-full "} src={avatar} alt={""} />
                        <p>
                            <span className={"text-gray-400 text-14"}>Hi, </span> {" "}
                            <span className={"text-gray-400 font-bold ml-1 text-14"}>Sikal</span>
                        </p>
                        <MdKeyboardArrowDown className={"text-gray-400 text-14"} />
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notifications && <Notification />}
                {isClicked.userProfile && <UserProfile />}

            </div>
        </div>
    );
};

export default Navbar;
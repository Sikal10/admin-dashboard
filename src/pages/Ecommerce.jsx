import React from 'react';
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked, Pie, Button, SparkLine} from "../components";
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";
import {useStateContext} from "../contexts/StateContext";

const Ecommerce = () => {

    const {currentColor} = useStateContext();

    return (
        <div className={""}>
            <div className={"flex flex-wrap lg:flex-nowrap justify-center"} >
                {/* EARNINGS */}
                <div className={"bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <p className={"font-bold text-gray-400"}>Earnings</p>
                            <p className={"text-2xl"}>$23,458</p>
                        </div>
                    </div>

                    <div className={"mt-6"}>
                        <Button size={"md"} color={"white"} bgColor={currentColor} text={"Download"} borderRadius={"10px"} />
                    </div>
                </div>

                {/*cards*/}
                <div className={"flex flex-wrap m-3 gap-1"}>
                    {earningData.map((item, index) => <div className={"bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"} key={index}>
                        <button className={"text-2xl p-4 hover:drop-shadow-xl rounded-full opacity-0.9"} style={{color: item.iconColor, background: item.iconBg}}>
                            {item.icon}
                        </button>
                        <p className={"mt-3"}>
                            <span className={"text-lg font-semibold"}>{item.amount}</span>
                            <span style={{background: item.pcColor}} className={`text-sm ml-2 text-${item.pcColor}`}>{item.percentage}</span>
                        </p>
                        <p className={"text-sm text-gray-400 mt-1"}>{item.title}</p>
                    </div>
                    )}
                </div>
            </div>

            {/*revenue.. container*/}
            <div className={"flex flex-wrap gap-10 justify-center"}>
                {/*left*/}
                <div className={"bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"} >
                    <article className={"flex justify-between"}>
                        <p>Revenue Updates</p>

                        <div className={"flex items-center gap-4"}>
                            <p className={"flex items-center gap-2 hover:drop-shadow-xl"}>
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className={"text-green-400 flex items-center gap-2 hover:drop-shadow-xl"}>
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </article>

                    <article className={"mt-10 flex"}>
                        <div className={"border-r-1 border-color m-4 pr-10"}>
                            <div>
                                <p>
                                    <span className={"text-3xl font-semibold"}>$93,438</span>
                                    <span className={"p-1 hover:drop-shadow-xl ml-3 cursor-pointer rounded-full bg-green-400 text-white text-xs"}>23%</span>
                                </p>
                                <p className={"text-gray-400 mt-1"}>Budget</p>
                            </div>

                            <div className={"mt-8"}>
                                <p>
                                    <span className={"text-3xl font-semibold"}>$49,438</span>
                                </p>
                                <p className={"text-gray-400 mt-1"}>Expense</p>
                            </div>

                            <div className={"mt-5"}>
                                <SparkLine
                                    currentColor={"blue"}
                                    id={"line-sparkLine"}
                                    type={"Line"}
                                    height={"80px"}
                                    width={"250px"}
                                    data={SparklineAreaData}
                                    color={"blue"}
                                />
                            </div>

                            <div className={"mt-10"}>
                                <Button color={"white"} bgColor={currentColor} text={"Download Report"} borderRadius={"10px"} />
                            </div>
                        </div>

                        <div style={{width: "320px", height: "295px"}} className={"bg-sky-100 rounded-2xl"}>
                            Bar Chart
                        </div>

                    </article>
                </div>

                {/*right*/}
                <div>
                    <div className={"rounded-2xl bg-blue-300 md:w-400 m-3 p-4"}>
                        <div className={"flex justify-between items-center"}>
                            <p className="font-semibold text-white text-2xl">Earnings</p>

                            <div>
                                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                                <p className={"text-gray-200"}>Monthly Revenue</p>
                            </div>
                        </div>
                        <h2 className={"mt-6 font-semibold text-gray-600"}>Chart</h2>
                    </div>

                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3">
                        <div className={"flex items-center gap-10 justify-center"}>
                            <div>
                                <p>$43,246</p>
                                <p>Yearly sales</p>
                            </div>

                            <div className={"border grid place-items-center rounded-full w-36 h-36"}>
                                Chart
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Ecommerce;
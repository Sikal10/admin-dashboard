import React from 'react';
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked, Pie, Button, SparkLine} from "../components";
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";
import {useStateContext} from "../contexts/StateContext";

const Ecommerce = () => {

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
                        <Button size={"md"} color={"white"} bgColor={"blue"} text={"Download"} borderRadius={"10px"} />
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
            <div className={"flex flex-wrap gap-10 justify-center border border-red-400 "}>
                {/*left*/}

                <div className={"border bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"} >
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

                    <article className={"border border-amber-500 mt-10 "}>
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
                        </div>
                    </article>


                </div>

                {/*right*/}

                <div className={"border border-blue-400"}>

                    {/*top*/}

                    {/*bottom*/}
                </div>

            </div>

        </div>
    );
};

export default Ecommerce;
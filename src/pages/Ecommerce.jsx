import React from 'react';
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked, Pie, Button, SparkLine} from "../components";
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";
import {useStateContext} from "../contexts/StateContext";

const Ecommerce = () => {

    return (
        <div className={""}>
            <div className={"flex flex-wrap lg:flex-nowrap justify-center"}>
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

            {/*revenue*/}
            <div className={"flex flex-wrap justify-center border border-red-400 "}>
                <div className={"bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"}>
                    <article>
                        <p>Revenue Updates</p>

                        <div>
                            <p>
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p>
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    );
};

export default Ecommerce;
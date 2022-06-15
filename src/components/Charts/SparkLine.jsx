import React from 'react';
import {SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts";

const SparkLine = ({currentColor, id, color, type, data, width, height}) => {
    return (
        <SparklineComponent
            id={id}
            width={width}
            height={height}
            lineWidth={1}
            valueType={"Numeric"} fill={color}
            border={{color: currentColor, width: 2}}
            dataSource={data}>
            <Inject services={[SparklineTooltip]}/>
        </SparklineComponent>
    );
};

export default SparkLine;
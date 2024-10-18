'use client'
import dynamic from "next/dynamic"; 
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent = ({options,series,type,height,width}) => {
    return ( 
    <>
            <Chart 
            options={options} 
            series={series}
            type={type}
            height={height} 
            width={width=='auto'?"":width}
             > </Chart>
    </> );
}
 
export default ChartComponent;
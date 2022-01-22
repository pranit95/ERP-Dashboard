import React  from "react";
import dataSet2 from "../Utils/summary.json"
import Graph from "./Graph";


const SalesSummary = () => {
    

    return (
        <div style={{width:"40%", height:"400px", border:"1px solid white",backgroundColor:"white"}}>
            <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                <div>Sales Summary</div>
                <div>Drop Down</div>
            </div>
            <hr />
            <div style={{display:"flex", justifyContent:"space-around",margin:"20px 0"}}>
                {dataSet2?.map(e => (
                    <li key={e.id} style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                        <div style={{fontWeight:"500"}}>{e.first_heading}</div>
                        <div style={{fontWeight:"500",color:"teal"}}>{e.first_value}</div>
                    </li>
                ))}
            </div>
            <Graph/>
        </div>
    )
}

export default SalesSummary
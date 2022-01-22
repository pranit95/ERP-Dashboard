import React from "react";
import dataSet2 from "../Utils/bestSell.json"

const BestSellingProducts = () => {
    return (
        <>
            <div style={{width:"40%", height:"360px", border:"1px solid white",backgroundColor:"white"}}>
                <div style={{display:"flex", justifyContent:"space-between",marginTop:"8px",padding:"0 5px"}}>
                    <div>Best Selling Products</div>
                    <div>All Time</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"left",textAlign:"left",margin:"20px 0",width:"100%"}}>
                    {dataSet2?.map(e => (
                        <li key={e.id} style={{display:"flex", flexDirection:"column", textAlign:"left", width:"100%"}}>
                            <hr color="grey"  style={{width:"100%"}}/>
                            <div style={{display:"flex",justifyContent:"space-between",color:"blue"}}>
                                <div style={{marginLeft:"8px"}}>{e.first_heading}</div>
                                <div style={{marginRight:"8px"}}>{e.second_val}</div>
                            </div>
                            <div style={{marginLeft:"8px"}}>{e.first_value}</div>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSellingProducts
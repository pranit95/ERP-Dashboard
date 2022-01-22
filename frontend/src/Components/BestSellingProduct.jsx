import React from "react";
import dataSet2 from "../Utils/bestSell.json"

const BestSellingProducts = () => {
    return (
        <>
            <div style={{width:"40%", height:"400px", border:"1px solid white", marginTop:"20px",backgroundColor:"white"}}>
                <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <div>Best Selling Products</div>
                    <div>All Time</div>
                </div>
                <hr />
                <div style={{display:"flex",flexDirection:"column",alignItems:"start",margin:"20px 10px",gap:"20px",width:"100%"}}>
                    {dataSet2?.map(e => (
                        <li key={e.id} style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                            <div>{e.first_heading}</div>
                            <div>{e.first_value}</div>
                            <hr/>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSellingProducts
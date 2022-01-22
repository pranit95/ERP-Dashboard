import React from "react"
import CartTop from "../Components/CardTop"
import SalesSummary from "../Components/SalesSummary"
import MiddleBox from "../Components/MiddleBox"
import BestSellingProducts from "../Components/BestSellingProduct"

const HomePage = ( ) => {
    return (
        <>
            <div style={{padding:"15px"}}>
                <CartTop/>
                <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                    <SalesSummary/>
                    <MiddleBox/>
                    <BestSellingProducts/>
                </div>
            </div>
        </>
    )
}

export default HomePage
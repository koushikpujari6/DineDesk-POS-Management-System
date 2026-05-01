import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";


const Bill = () =>{
    const cartData = useSelector(state => state.cart);
    const total = useSelector(getTotalPrice);
    const taxRate=5.25;
    const tax=(total * taxRate)/100;
    const totalPriceWithTax= total + tax;

    return(
    
        <div className="px-5 pb-4">
            
        <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#ababab] font-medium ">Items({cartData.length})</p>
            <h1 className="text-[#f5f5f5] font-bold">₹{total.toFixed(2)}</h1>
        </div>
        <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#ababab] font-medium ">Tax(5.25%)</p>
            <h1 className="text-[#f5f5f5] font-bold">₹{tax.toFixed(2)}</h1>
        </div>
        <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#ababab] font-medium ">Total with Tax</p>
            <h1 className="text-[#f5f5f5] font-bold">₹{totalPriceWithTax.toFixed(2)}</h1>
        </div>
        <div className="flex items-center gap-3 mt-4">
            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
         </div>

         <div className="flex items-center gap-3  mt-4">
            <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">Print Receipt</button>
            <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold">Place Order</button>
         </div>
         </div>
        

    )
}

export default Bill
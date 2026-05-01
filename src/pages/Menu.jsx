import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu  } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";
const Menu = () =>{

    const customerData = useSelector(state => state.customer);
    
    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-3.5rem)] pb-14 overflow-hidden flex gap-3">
             {/*Left Div*/}
             <div className='flex-[3]'>
                <div className="flex items-center justify-between px-8 py-4 mt-2">
                <div className="flex gap-4 items-center">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] text-2xl tracking-wider font-bold">Menu</h1>
                </div>
                <div className="flex items-center justify-around gap-4">

                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <MdRestaurantMenu className='text-[#f5f5f5] text-4xl' />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">{customerData.customerName || "customer Name"}</h1>
                        <p className="text-xs text-[#ababab] font-medium">{customerData.tableNo || "N/A"}</p>
                    </div>
                </div>
            </div>
        <MenuContainer />
        </div>
            {/*Right Div*/}
    <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 mb-4 rounded-lg pt-2 flex flex-col overflow-hidden">
        {/* Customer Info */}
       <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* cart Items */}
        <CartInfo />
        </div>
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Bills */}   
        <Bill />         
        </div>
      
            <BottomNav />
        </section>
    )
}

export default Menu
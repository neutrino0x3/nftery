import { BsShop,BsStars, BsFillHandbagFill, BsGear, BsFillBookmarkStarFill} from "react-icons/bs"
import {FaWallet} from "react-icons/fa"
import {FiSave} from "react-icons/fi"
import {ImHammer2} from "react-icons/im"
import {IoIosSettings} from "react-icons/io"

const SideBar = () => {
return (
    <section className="w-80 h-full flex flex-col align-center justify-between border-2" >
    
        <header className="bg-indigo-900 border-2">NFTrey</header>

        <div className="flex align-center justify-center flex-col">
            <span className="flex align-center justify-center">MARKET PLACE</span>
            <div className="flex items-center justify-center gap-3">
                <BsFillHandbagFill/> 
                <span>Market</span>          
            </div>
            <div className=" flex items-center justify-center gap-3">
                <ImHammer2/> 
                <span>Active Bid</span>
            </div>
            <div className=" flex items-center justify-center gap-3">
                <BsFillBookmarkStarFill/> 
                <span>Saved</span>
            </div>
        </div>

        <div className="My ACCOUNT">

            <span className="myAccountTitle">MY ACCOUNT</span>

            <div className=" flex items-center justify-center gap-3">
                <BsFillHandbagFill/> 
                <span>My Collection</span>          
            </div>

            <div className=" flex items-center justify-center gap-3">
                <ImHammer2/> 
                <span>Wallet</span>
            </div>

            <div className=" flex items-center justify-center gap-3">
                <FiSave/> 
                <span>History</span>
            </div>

            <div className=" flex items-center justify-center gap-3">
                <IoIosSettings/> 
                <span>Settings</span>          
            </div>
        
            <div className=" flex items-center justify-center gap-3">
                <BsFillBookmarkStarFill/> 
                <span>Favourite</span>
            </div>

        </div>
    </section>
)
} 
export default SideBar;

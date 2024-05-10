import useScrollGrowHook from "@/Hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const CipsetReplacement = () => {
const {componentRef, style} = useScrollGrowHook()

    return (
        <motion.div 
        style={style}
        ref={componentRef}
        className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5">

        </motion.div>
    );
};

export default CipsetReplacement;
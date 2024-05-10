
import { motion } from "framer-motion";
import useScrollGrowHook from "@/Hooks/ScrollGrowHook";

const BatteryReplacement = () => {
  const {componentRef, style} = useScrollGrowHook();
 return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;

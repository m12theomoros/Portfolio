import {motion} from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image &&  !text ? (
    <motion.img 
    className="absolute w-11 sm:w-15 cursor-grab active:cursor-grabbing" 
    src={image} 
    style={style}
    whileHover ={{scale:1.07}}
    whileDrag={{
        scale: 1.12,
    }}
    drag
    dragConstraints={containerRef}
    dragElastic = {2}
    />  
  ) : (
      <motion.div 
        className ="absolute px-1 py-4 text-sm md:text-lg text-center rounded-full
        ring ring-gray-700 font-extralight bg-storm w-[12rem] 
        cursor-grab active:cursor-grabbing"
        style={style}
        whileHover ={{scale:1.07}}
        whileDrag={{
          scale: 1.12,
          boxShadow: "27px 21px 30px rgba(0,0,0,0.3)"
        }}
        drag
        dragConstraints={containerRef}
        dragElastic = {2}
      >
        {text}
      </motion.div>
  );    
}

export default Card
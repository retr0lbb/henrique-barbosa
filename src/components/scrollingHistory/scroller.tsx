"use client"
import { motion } from "framer-motion"


interface ScrollerProps{ 
    children: React.ReactNode
}
export function Scroller(props: ScrollerProps){
    return <motion.div className="w-full min-h-dvh">
        {props.children}
    </motion.div>
}
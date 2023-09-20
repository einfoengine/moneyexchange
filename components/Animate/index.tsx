'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Animate = ({children, direction='t-b', delay=0, onviewport=true}:any) => {
    // Define animation variants
    let animate;
    if(direction==='t-b'){
        animate = {
            hidden: {
                opacity: 0,
                y: -50,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                duration: 0.4, 
                delay: delay, 
                },
            },
        };
    }
    if(direction==='b-t'){
        animate = {
            hidden: {
                opacity: 0,
                y: 50,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                duration: 0.4, 
                delay: delay, 
                },
            },
        };
    }
    if(direction==='x-y'){
        animate = {
            hidden: {
                opacity: 0,
                x: -50,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                duration: 0.4, 
                delay: delay, 
                },
            },
        };
    }
    if(direction==='y-x'){
        animate = {
            hidden: {
                opacity: 0,
                x: 50,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                duration: 0.4, 
                delay: delay, 
                },
            },
        };
    }
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.1,    // Trigger animation when 30% of the element is in the viewport
    });
    if(onviewport===true){
        return(
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'} // Animate when inView is true
                variants={animate}
            >
                {children}
            </motion.div>
        )
    }else{
        return(
            <motion.div
                initial="hidden"
                animate='visible'
                variants={animate}
            >
                {children}
            </motion.div>
        )
    }
}

export default Animate;
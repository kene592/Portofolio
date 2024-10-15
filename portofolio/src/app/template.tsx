'use client'

import './Animation.css' 
import {AnimatePresence,motion} from 'framer-motion'
export default function Template({ children }: { children: React.ReactNode }) {
    const anim = (variants : any,custom : any) => {
        return{
            initial : "initial",
            animate : "enter",
            exit : "exit",
            variants,
            custom
        }
    }
    const expand ={
        initial :{
            left : 0
        },
        enter : (i : any) => ({
            left : "100%",
            transition : {
                duration : 0.5,
                delay : 1 + 0.075 * i
            },
            transitionEnd : {
                width : 0
            }
        }),
        exit : (i : any)=> ({
            height : "100%",
            transition : {
                duration: 0.5,
                delay : 0.05 * i
            }            
        })

    }
    const colsNum = 10;
    return (
    <AnimatePresence mode='wait'>
        {/* <Header></Header> */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', delay : 1,duration: 0.5 }}
            >
            {children}
        </motion.div>
        <div className='page stairs'>
            <div className='transition-container'>
                {
                    [...Array(colsNum)].map((_,i)=>{
                        return <motion.div {...anim(expand,i)} key={i}/>  
                    })
                }
            </div>
        </div>
    </AnimatePresence>
  )
}
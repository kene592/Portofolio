import {motion} from 'framer-motion'
import './Animation.css'

export default function TextTransition({children} : {children : string}){
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
          top : 0
        },
        enter : (i : any) => ({
          top : "100%",
          transition : {
            duration : 0.5,
            delay : 1 + 0.075 * i
          },
          transitionEnd : {
            height : 0
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
    return( 
        <div className='textContainer'>
            {/* {Array.from(children).map((c, i) => (
                <motion.span>
                    {c}
                </motion.span>
            ))} */}
        </div>
    )
}
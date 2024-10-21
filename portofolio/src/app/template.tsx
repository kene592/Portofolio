"use client"
import {AnimatePresence,motion} from 'framer-motion'
import Stairs from './StairsTransition'
import TextTransition from './TextTransition'
import { usePathname } from 'next/navigation'
export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <body>
        {/* <Header></Header> */}
        {children}
        {/* <Stairs/> */}
        {/* <TextTransition>Kasawaki</TextTransition> */}
      </body>
  )
}
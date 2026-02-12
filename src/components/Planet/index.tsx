"use client"
import { PlanetProps } from "./types"
import { Bounds, Environment, OrbitControls, useGLTF, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"

useGLTF.preload("/models/purple-planet.glb")

const Planet = ({fallback, onLoad}: PlanetProps) => {
   const { scene } = useGLTF("/models/purple-planet.glb")
   const { loaded, total, active } = useProgress()

   useEffect(() => {
      if (onLoad) {
         if (loaded === total && !active) onLoad()
      }
   }, [])

   return (
      <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
         <Suspense fallback={fallback}>
            <Canvas dpr={[1, 1.5]}>
               <Environment files="/hdr/planet_hdr.exr" background={false}/>
               <Bounds fit clip observe margin={1}>
                  <primitive object={scene}/>
               </Bounds>

               <OrbitControls autoRotate autoRotateSpeed={-0.3} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} dampingFactor={.05}/>
            </Canvas>
         </Suspense>
      </div>
   )
}

export default Planet

import { OrbitControls, Sparkles } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"


const RotatingCube = ()=>{
  const meshref = useRef(null)

useFrame(()=>{
  if(meshref.current){
    meshref.current.rotation.y += 0.01;
    meshref.current.rotation.x += 0.01;

  }
})


  return (<mesh ref={meshref}>
    <cylinderGeometry args={[1,1,1,32]} />
    <meshLambertMaterial color="#468585" emissive="#468585" />
    <Sparkles count={100} scale={2} size={1} speed={0.2} noise={0.2} color="#ff0000"/>
  </mesh>)
}

const Cyliender = () => {

  return (
    <Canvas style={{height:"100vh",width: "100vw", display: "flex", alignItems:"center",justifyContent:"center"}}>
     <OrbitControls enableZoom enablePan enableRotate />
     <directionalLight position={[1,1,1]}  intensity={10} color={0x9cdba6}/>
     <color attach="background" args={['#f0f0f0']} />
     <RotatingCube />
    </Canvas>
  )
}

export default Cyliender
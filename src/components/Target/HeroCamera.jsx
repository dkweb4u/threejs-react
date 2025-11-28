import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({children}) => {

    const groupref = useRef(null);

    useFrame((state,delta) =>{
        // damp3(state.camera.position,targetValues, speed, delta)
    easing.damp3(state.camera.position,[0,0,25], 0.25, delta);
    easing.dampE(groupref.current.rotation,[-state.pointer.y/2, -state.pointer.x, 0], 0.25,delta)
    });

  return (
   <group ref={groupref}>
    {children}
   </group>
  )
}

export default HeroCamera
import { Canvas } from '@react-three/fiber'
import './Hero.css'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../CanvasLoader/CanvasLoader'
import HackerRoom from '../HackerRoom/HackerRoom'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import ReactLogo from '../Target/ReactLogo'
import HeroCamera from '../Target/HeroCamera'
const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 440});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const isDesktop = useMediaQuery({maxWidth: 440});

  // const controls = useControls('HackerRoom',{
  //   positionX: {
  //     value: 2.5,
  //     min:-10,
  //     max:10
  //   },
  //     positionY: {
  //     value: 2.5,
  //     min:-10,
  //     max:10
  //   },
  //     positionZ: {
  //     value: 2.5,
  //     min:-10,
  //     max:10
  //   },
  //    rotationX: {
  //     value: 0,
  //     min:-10,
  //     max:10
  //   },
  //     rotationY: {
  //          value: 0,
  //     min:-10,
  //     max:10
  //   },
  //     rotationZ: {
  //         value: 0,
  //     min:-10,
  //     max:10
  //   },
  //   scale:{
  //     value: 1,
  //     min: 0.1,
  //     max:10
  //   }
  // })
  return (
   <section className='hero'>
    <div className="container-fluid">
        <div className="content-box">
          <p>Hi, I am Dinesh <span className='animate-hand'>👋</span></p>
          <h1>Building Products & Brands</h1>
           {/* <Leva /> */}

     
            <Canvas style={{ width: "100%", height: "400px" }}>
            <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0,0,25]} />
           <HeroCamera>
                        <HackerRoom 
            scale={0.11}
            position={[0,-4,0]} 
            rotation={[0.2, -Math.PI,0]} 

            //  position={[controls.positionX,controls.positionY,controls.positionZ]}
            // scale={[controls.scale,controls.scale,controls.scale]}
            //  rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}

            />
           
           </HeroCamera>

            <group>
               <ReactLogo />
            </group>


            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5} />
            </Suspense>
             <OrbitControls enableZoom={false}/>
           </Canvas>
     </div>
   
    </div>
   </section>
  )
}

export default Hero
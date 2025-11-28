import { useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/react-model/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[2000, 800, 200]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={30}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/react-model/scene.gltf')
export default ReactLogo
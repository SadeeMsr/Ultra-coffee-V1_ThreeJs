import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export default function CoffeeBeans() {
  // const { nodes, materials } = useGLTF("/coffee_bean_1.glb");

  const model = useGLTF("/cb.glb");


  return (
    <>
      {/* <OrbitControls /> */}
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* <group dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.Coffee_DM_01_01}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.Coffee_DM_01_01}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Coffee_DM_01_01}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.Coffee_DM_01_01}
          />
        </group>
      </group> */}

    
      
       {/* <primitive object={scene} dispose={null} /> */}
      <primitive object={model.scene} scale={0.25} />
    </>
  );
}

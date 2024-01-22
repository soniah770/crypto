'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



export default function Experience({ model, scales, positions })
{
    const { scene } = useGLTF(model);

    return <>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 6, 3, 3 ]
            } }>
            <OrbitControls  enableZoom={ false } autoRotate={ true } />

            <ambientLight intensity={ 5.5 } />
            <directionalLight position={[2, 3, 1]} intensity={20} />
            <directionalLight position={[-1, -1, -1]} intensity={20} />
            <directionalLight  position={ [ 1, 0, 3 ] } intensity={ 15.5 } />
            <directionalLight  position={ [ 0, 3, 3 ] } intensity={ 10.5 } />
            <primitive object={scene} scale={`${scales}`} position={ positions }   />
        </Canvas>
       
       

    </>
} 
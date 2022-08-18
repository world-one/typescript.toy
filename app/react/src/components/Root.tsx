import React, { FC, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import {useForm} from "react-hook-form";


const Root: FC = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm()

  function onSubmit() {
    console.log('on Submit')
  }

  console.log(watch('userName'))
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('userName', {required: true})} />
        {errors.userName && <span>required</span>}
        <button type={"submit"}>입력</button>
      </form>
    </div>
  );
}

export default Root;


function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref: any = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<any>(false)
  const [clicked, click] = useState<any>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
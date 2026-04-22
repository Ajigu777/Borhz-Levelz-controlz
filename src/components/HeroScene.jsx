import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Points, PointMaterial } from '@react-three/drei'
import { MathUtils, DoubleSide } from 'three'

function SceneContent() {
  const icosaRef = useRef()
  const octaRef = useRef()
  const torusRef = useRef()
  const pointsRef = useRef()
  const { camera, mouse } = useThree()
  const [controlsEnabled, setControlsEnabled] = useState(false)

  const points = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18
    }
    return positions
  }, [])

  useEffect(() => {
    const update = () => setControlsEnabled(window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime

    if (icosaRef.current) {
      icosaRef.current.rotation.x += delta * 0.32
      icosaRef.current.rotation.y += delta * 0.22
      icosaRef.current.position.y = Math.sin(elapsed * 1.2) * 0.26
    }

    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.38
      octaRef.current.rotation.z -= delta * 0.24
    }

    if (torusRef.current) {
      torusRef.current.rotation.z += delta * 0.14
      torusRef.current.rotation.x += delta * 0.08
    }

    if (pointsRef.current) {
      pointsRef.current.position.y = Math.sin(elapsed * 0.12) * 0.4 - 1.3
    }

    camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 1.4, 0.05)
    camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.7, 0.05)
    camera.lookAt(3.5, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[8, 12, 6]} intensity={1.1} />
      <Stars count={1500} fade speed={0.3} />

      <mesh ref={icosaRef} position={[3.5, 0, 0]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#00BFFF" wireframe transparent opacity={0.9} />
      </mesh>

      <mesh ref={octaRef} position={[5.5, 1.5, -1.5]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#E8185A" wireframe transparent opacity={0.95} />
      </mesh>

      <mesh ref={torusRef} position={[3.5, 0, 0]}>
        <torusGeometry args={[2.4, 0.015, 8, 80]} />
        <meshBasicMaterial color="#00BFFF" transparent opacity={0.2} side={DoubleSide} />
      </mesh>

      <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial color="#00BFFF" size={0.025} sizeAttenuation transparent opacity={0.65} />
      </Points>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[30, 30, 40, 40]} />
        <meshBasicMaterial color="#001A20" wireframe />
      </mesh>

      <OrbitControls enablePan={false} enableZoom={false} enabled={controlsEnabled} />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true }}>
      <color attach="background" args={[0x0d0d0d]} />
      <SceneContent />
    </Canvas>
  )
}

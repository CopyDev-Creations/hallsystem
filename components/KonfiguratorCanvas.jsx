"use client"
import { AccumulativeShadows, Box, Center, ContactShadows, Environment, GizmoHelper, GizmoViewport, Gltf, Grid, Helper, OrbitControls, PerspectiveCamera, Plane, RandomizedLight, Sky, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { GridHelper } from "three"

const KonfiguratorCanvas = ({ szerokosc, dlugosc, wysokosc, material, onLoad }) => {
    const fixedWidth = Math.ceil((szerokosc || 1) / 6) * 6;
    const fixedLength = Math.ceil((dlugosc || 1) / 6) * 6;
    const fixedHeight = wysokosc;

    const mainPillarsPositions = [
        [fixedWidth / 4, fixedHeight / 4, fixedLength / 4],
        [fixedWidth / -4, fixedHeight / 4, fixedLength / 4],
        [fixedWidth / 4, fixedHeight / 4, fixedLength / -4],
        [fixedWidth / -4, fixedHeight / 4, fixedLength / -4],
    ];
    const addPillarsPositions = (() => {
        let result = [];
        const sideAmount = Math.ceil((fixedLength - 6) / 6);
        const frontBackAmount = Math.ceil((fixedWidth - 6) / 6);

        [fixedWidth / -4, fixedWidth / 4].forEach((posX) => {
            for (let i = 0; i <= sideAmount; i++) {
                result.push([posX, fixedHeight / 4, fixedLength / 4 - i * 3])
            }
        });

        [fixedLength / -4, fixedLength / 4].forEach((posZ) => {
            for (let i = 0; i <= frontBackAmount; i++) {
                result.push([fixedWidth / 4 - i * 3, fixedHeight / 4, posZ])
            }
        });
        return result;
    })();

    return (
        <div>
            <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [4, 4, 4], fov: 35 }} onCreated={() => onLoad()}>
                {/* <color attach="background" args={['#f5f0f6']} /> */}
                <GizmoHelper
                    alignment="bottom-right"
                    margin={[80, 80]}
                >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
                </GizmoHelper>
                <Helper type={GridHelper} args={[10, 10]} />
                <group>
                    <Grid position={[0, -0.01, 0]} args={[120, 120]} />
                    {/* <Center top> */}
                    {
                        mainPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position}>
                                <boxGeometry args={[0.075, fixedHeight / 2, 0.075]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        addPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position}>
                                <boxGeometry args={[0.075, fixedHeight / 2, 0.05]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                            <mesh castShadow receiveShadow position={[0, fixedHeight / 2 - 0.025, posZ]}>
                                <boxGeometry args={[fixedWidth / 2, 0.025, 0.07]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        [fixedWidth / 4, fixedWidth / -4].map((posX, index) => (
                            <mesh castShadow receiveShadow position={[posX, fixedHeight / 2 - 0.025, 0]}>
                                <boxGeometry args={[0.05, 0.025, fixedLength / 2]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {/* <mesh castShadow receiveShadow position={[0, fixedHeight / 4, 0]}>
                        <boxGeometry args={[fixedWidth / 2, fixedHeight / 2, fixedLength / 2]} />
                        <meshStandardMaterial color="lightblue" />
                    </mesh> */}
                    {/* </Center> */}
                    <ContactShadows opacity={1} scale={130} blur={1} far={10} resolution={256} color="#000000" />
                    {/* <AccumulativeShadows temporal frames={100} color="#f5f0f6" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}> */}
                    <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.95} position={[5, 15, 5]} bias={0.001} />
                    {/* </AccumulativeShadows> */}
                </group>
                <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}

export default KonfiguratorCanvas
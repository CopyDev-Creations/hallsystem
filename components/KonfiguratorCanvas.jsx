"use client"
import { AccumulativeShadows, Box, Center, ContactShadows, Environment, GizmoHelper, GizmoViewport, Gltf, Grid, Helper, OrbitControls, PerspectiveCamera, Plane, RandomizedLight, Sky, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { GridHelper } from "three"

const KonfiguratorCanvas = ({ szerokosc, dlugosc, wysokosc, material, onLoad }) => {
    const fixedWidth = Math.ceil((szerokosc || 1) / 6) * 6;
    const fixedLength = Math.ceil((dlugosc || 1) / 6) * 6;
    const fixedHeight = wysokosc;
    const wallSegmentHeight = (6 * Math.sin(Math.PI / 9)) / Math.sin(Math.PI / 180 * 70);
    const wallSegmentLength = (6 * Math.sin(Math.PI / 2)) / Math.sin(Math.PI / 180 * 70);
    const wallSegmentFixedLength = fixedWidth / 6 / 2 * wallSegmentLength / 2 + 0.02;
    const segmentY = fixedHeight / 2 + fixedWidth / 6 / 2 * wallSegmentHeight / 4;
    const minCeiling = fixedHeight / 2;
    const maxCeiling = fixedHeight / 2 + fixedWidth / 6 / 2 * wallSegmentHeight / 2;

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
    const addSegmentsPositions = (() => {
        let result = [];
        const amount = Math.ceil((fixedLength - 6) / 6);

        [fixedWidth / -8, fixedWidth / 8].forEach((posX) => {
            for (let i = 0; i <= amount; i++) {
                result.push([posX, segmentY, fixedLength / 4 - i * 3])
            }
        });
        return result;
    })();
    const beamsPositions = (() => {
        let result = [];
        for (let posX = fixedWidth / -4; posX <= fixedWidth / 4; posX += 1.5) {
            const percentage = 1 - Math.abs(posX) / (fixedWidth / 4);
            result.push([posX, percentage * (maxCeiling - minCeiling) + minCeiling, 0]);
        }
        return result;
    })();
    const wallPillarsPositions = (() => {
        let result = [];
        [fixedLength / -4, fixedLength / 4].forEach((posZ) => {
            for (let posX = fixedWidth / -4 + 3; posX < fixedWidth / 4; posX += 3) {
                const percentage = 1 - Math.abs(posX) / (fixedWidth / 4);
                const posY = (percentage * (maxCeiling - minCeiling) + 2 * minCeiling) / 2;
                result.push([posX, posY, posZ]);
            }
        })
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
                            <mesh castShadow receiveShadow position={position} key={index}>
                                <boxGeometry args={[0.075, fixedHeight / 2, 0.075]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        addPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position} key={index}>
                                <boxGeometry args={[0.075, fixedHeight / 2, 0.05]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                            <mesh castShadow receiveShadow position={[0, fixedHeight / 2 - 0.025, posZ]} key={index}>
                                <boxGeometry args={[fixedWidth / 2, 0.025, 0.07]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        [fixedWidth / 8, fixedWidth / -8].map((posX, index) => (
                            [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                                <mesh castShadow receiveShadow position={[posX, segmentY, posZ]} rotation={[0, 0, Math.PI / (posX < 0 ? 9 : -9)]} key={index}>
                                    <boxGeometry args={[wallSegmentFixedLength, 0.05, 0.05]} />
                                    <meshStandardMaterial color="lightblue" />
                                </mesh>
                            ))
                        ))
                    }
                    {
                        addSegmentsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position} rotation={[0, 0, Math.PI / (position[0] < 0 ? 9 : -9)]} key={index}>
                                <boxGeometry args={[wallSegmentFixedLength, 0.05, 0.025]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {/* {
                        [fixedWidth / 4, fixedWidth / -4].map((posX, index) => (
                            <mesh castShadow receiveShadow position={[posX, fixedHeight / 2 - 0.025, 0]} key={index}>
                                <boxGeometry args={[0.025, 0.025, fixedLength / 2]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    } */}
                    {
                        beamsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position} key={index}>
                                <boxGeometry args={[0.025, 0.025, fixedLength / 2]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        wallPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow position={position} key={index}>
                                <boxGeometry args={[0.075, ((1 - Math.abs(position[0]) / (fixedWidth / 4)) * (maxCeiling - minCeiling)), 0.05]} />
                                <meshStandardMaterial color="lightblue" />
                            </mesh>
                        ))
                    }
                    {
                        fixedWidth % 2 == 0 && (
                            [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                                <mesh castShadow receiveShadow position={[0, (maxCeiling + minCeiling) / 2, posZ]} key={index}>
                                    <boxGeometry args={[0.075, maxCeiling - minCeiling, 0.05]} />
                                    <meshStandardMaterial color="lightblue" />
                                </mesh>
                            ))
                        )
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
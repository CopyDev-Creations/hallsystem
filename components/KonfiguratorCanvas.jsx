"use client"
import { AccumulativeShadows, Box, Center, ContactShadows, Environment, GizmoHelper, GizmoViewport, Gltf, Grid, Helper, OrbitControls, PerspectiveCamera, Plane, RandomizedLight, Sky, Stage, useGLTF } from "@react-three/drei"
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from "react";
import { GridHelper } from "three"
import * as THREE from 'three';

const KonfiguratorCanvas = ({ szerokosc, dlugosc, wysokosc, poszycie, material }) => {
    const fixedWidth = Math.ceil((szerokosc || 1) / 6) * 6;
    const fixedLength = Math.ceil((dlugosc || 1) / 6) * 6;
    const fixedHeight = wysokosc;
    const objectSize = { width: fixedWidth, height: fixedHeight, depth: fixedLength };
    const wallSegmentHeight = (6 * Math.sin(Math.PI / 9)) / Math.sin(Math.PI / 180 * 70);
    const wallSegmentLength = (6 * Math.sin(Math.PI / 2)) / Math.sin(Math.PI / 180 * 70);
    const wallSegmentFixedLength = fixedWidth / 6 / 2 * wallSegmentLength / 2 + 0.04;
    const segmentY = fixedHeight / 2 + fixedWidth / 6 / 2 * wallSegmentHeight / 4 - 0.03;
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
        const amount = Math.ceil((fixedLength - 6) / 6) - 1;

        [fixedWidth / -8, fixedWidth / 8].forEach((posX) => {
            for (let i = 0; i <= amount; i++) {
                result.push([posX, segmentY, fixedLength / 4 - i * 3 - (fixedLength / 2 / (amount + 2))])
            }
        });
        return result;
    })();
    const beamsPositions = (() => {
        let result = [];
        for (let posX = fixedWidth / -4; posX <= fixedWidth / 4; posX += 1.5) {
            const percentage = 1 - Math.abs(posX) / (fixedWidth / 4);
            result.push([posX, percentage * (maxCeiling - minCeiling) + minCeiling - (percentage == 0 || percentage == 1 ? 0.025 : 0.045), 0]);
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


    const ceilingOffset = { x: 0.02, y: 0, z: 0 };

    const floorGeometry = new THREE.BufferGeometry();
    let wallsGeometry = new THREE.BufferGeometry();
    const ceilingGeometry = new THREE.BufferGeometry();

    const floorVertices = new Float32Array([
        // Floor
        fixedWidth / 4, 0, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / -4,
        fixedWidth / -4, 0, fixedLength / -4,

        fixedWidth / -4, 0, fixedLength / -4,
        fixedWidth / -4, 0, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / 4,
    ]);
    const wallsVertices = new Float32Array([
        // Ceiling
        fixedWidth / -4 - ceilingOffset.x, minCeiling, fixedLength / 4,
        0, maxCeiling, fixedLength / 4,
        fixedWidth / 4 + ceilingOffset.x, minCeiling, fixedLength / 4,

        fixedWidth / 4 + ceilingOffset.x, minCeiling, fixedLength / -4,
        0, maxCeiling, fixedLength / -4,
        fixedWidth / -4 - ceilingOffset.x, minCeiling, fixedLength / -4,

        // Walls
        fixedWidth / -4, 0, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / 4,
        fixedWidth / -4, fixedHeight / 2, fixedLength / 4,

        fixedWidth / -4, fixedHeight / 2, fixedLength / 4,
        fixedWidth / 4, fixedHeight / 2, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / 4,

        fixedWidth / 4, 0, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / -4,
        fixedWidth / 4, fixedHeight / 2, fixedLength / -4,

        fixedWidth / 4, fixedHeight / 2, fixedLength / -4,
        fixedWidth / 4, fixedHeight / 2, fixedLength / 4,
        fixedWidth / 4, 0, fixedLength / 4,

        fixedWidth / 4, 0, fixedLength / -4,
        fixedWidth / -4, 0, fixedLength / -4,
        fixedWidth / -4, fixedHeight / 2, fixedLength / -4,

        fixedWidth / -4, fixedHeight / 2, fixedLength / -4,
        fixedWidth / 4, fixedHeight / 2, fixedLength / -4,
        fixedWidth / 4, 0, fixedLength / -4,

        fixedWidth / -4, 0, fixedLength / 4,
        fixedWidth / -4, 0, fixedLength / -4,
        fixedWidth / -4, fixedHeight / 2, fixedLength / -4,

        fixedWidth / -4, fixedHeight / 2, fixedLength / -4,
        fixedWidth / -4, fixedHeight / 2, fixedLength / 4,
        fixedWidth / -4, 0, fixedLength / 4,
    ]);
    const ceilingVertices = new Float32Array([
        // Ceiling
        fixedWidth / 4 + ceilingOffset.x, minCeiling, fixedLength / 4,
        fixedWidth / 4 + ceilingOffset.x, minCeiling, fixedLength / -4,
        0, maxCeiling, fixedLength / 4,

        0, maxCeiling, fixedLength / 4,
        0, maxCeiling, fixedLength / -4,
        fixedWidth / 4 + ceilingOffset.x, minCeiling, fixedLength / -4,

        fixedWidth / -4 - ceilingOffset.x, minCeiling, fixedLength / -4,
        fixedWidth / -4 - ceilingOffset.x, minCeiling, fixedLength / 4,
        0, maxCeiling, fixedLength / -4,

        0, maxCeiling, fixedLength / -4,
        0, maxCeiling, fixedLength / 4,
        fixedWidth / -4 - ceilingOffset.x, minCeiling, fixedLength / 4,
    ]);

    floorGeometry.setAttribute('position', new THREE.BufferAttribute(floorVertices, 3));
    wallsGeometry.setAttribute('position', new THREE.BufferAttribute(wallsVertices, 3));
    ceilingGeometry.setAttribute('position', new THREE.BufferAttribute(ceilingVertices, 3));
    floorGeometry.computeVertexNormals();
    wallsGeometry.computeVertexNormals();
    ceilingGeometry.computeVertexNormals();

    const texture = new THREE.TextureLoader().load(`${process.env.basePath || ""}/images/${material != "Płyta warstwowa" ? "blacha_texture.jpg" : "plyta_texture.jpg"}`);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    const meshMaterial = new THREE.MeshStandardMaterial({ color: 0x9e9e9e, side: THREE.DoubleSide });
    const wallsMaterial = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map: texture });
    const structureMaterial = new THREE.MeshStandardMaterial({ color: 0x6b6b6b });

    //uv
    const wallsUV = new Float32Array([
        // ceiling front
        0, 0,
        fixedWidth / 12, (maxCeiling - minCeiling) / 3,
        fixedWidth / 6, 0,

        // ceiling back
        0, 0,
        fixedWidth / 12, (maxCeiling - minCeiling) / 3,
        fixedWidth / 6, 0,

        // front
        0, 0,
        fixedWidth / 6, 0,
        0, fixedHeight / 6,

        0, fixedHeight / 6,
        fixedWidth / 6, fixedHeight / 6,
        fixedWidth / 6, 0,

        // right
        0, 0,
        fixedLength / 6, 0,
        fixedLength / 6, fixedHeight / 6,

        fixedLength / 6, fixedHeight / 6,
        0, fixedHeight / 6,
        0, 0,

        // back
        0, 0,
        fixedWidth / 6, 0,
        fixedWidth / 6, fixedHeight / 6,

        fixedWidth / 6, fixedHeight / 6,
        0, fixedHeight / 6,
        0, 0,

        // left
        fixedLength / 6, 0,
        0, 0,
        0, fixedHeight / 6,

        0, fixedHeight / 6,
        fixedLength / 6, fixedHeight / 6,
        fixedLength / 6, 0,

    ]);
    wallsGeometry = wallsGeometry.toNonIndexed();
    wallsGeometry.setAttribute('uv', new THREE.BufferAttribute(wallsUV, 2));
    wallsGeometry.attributes.uv.needsUpdate = true;

    return (
        <div>
            <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
                {/* <color attach="background" args={['#c1c1c1']} /> */}
                <FitCameraToObject objectSize={objectSize} />
                {/* <PerspectiveCamera makeDefault position={[10, 5, 10]} fov={35} ref={cameraRef} /> */}
                {/* <GizmoHelper
                    alignment="bottom-right"
                    margin={[80, 80]}
                >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
                </GizmoHelper> */}
                {/* <Grid position={[0, -0.01, 0]} args={[120, 120]} /> */}
                <group position={[0, maxCeiling / -2, 0]}>
                    {/* <Center top> */}
                    {
                        mainPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={position} key={index}>
                                <boxGeometry args={[0.15, fixedHeight / 2, 0.15]} />
                            </mesh>
                        ))
                    }
                    {
                        addPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={position} key={index}>
                                <boxGeometry args={[0.15, fixedHeight / 2, 0.1]} />
                            </mesh>
                        ))
                    }
                    {
                        [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={[0, fixedHeight / 2 - 0.025, posZ]} key={index}>
                                <boxGeometry args={[fixedWidth / 2, 0.05, 0.14]} />
                            </mesh>
                        ))
                    }
                    {
                        [fixedWidth / 8, fixedWidth / -8].map((posX, index) => (
                            [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                                <mesh castShadow receiveShadow material={structureMaterial} position={[posX, segmentY, posZ]} rotation={[0, 0, Math.PI / (posX < 0 ? 9 : -9)]} key={index}>
                                    <boxGeometry args={[wallSegmentFixedLength, 0.1, 0.1]} />
                                </mesh>
                            ))
                        ))
                    }
                    {
                        addSegmentsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={position} rotation={[0, 0, Math.PI / (position[0] < 0 ? 9 : -9)]} key={index}>
                                <boxGeometry args={[wallSegmentFixedLength, 0.1, 0.075]} />
                            </mesh>
                        ))
                    }
                    {
                        beamsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={position} key={index}>
                                <boxGeometry args={[0.075, 0.05, fixedLength / 2]} />
                            </mesh>
                        ))
                    }
                    {
                        wallPillarsPositions.map((position, index) => (
                            <mesh castShadow receiveShadow material={structureMaterial} position={position} key={index}>
                                <boxGeometry args={[0.15, ((1 - Math.abs(position[0]) / (fixedWidth / 4)) * (maxCeiling - minCeiling)) - 0.01, 0.1]} />
                            </mesh>
                        ))
                    }
                    {
                        fixedWidth % 2 == 0 && (
                            [fixedLength / 4, fixedLength / -4].map((posZ, index) => (
                                <mesh castShadow receiveShadow material={structureMaterial} position={[0, (maxCeiling + minCeiling) / 2 - 0.01, posZ]} key={index}>
                                    <boxGeometry args={[0.15, maxCeiling - minCeiling - 0.01, 0.1]} />
                                </mesh>
                            ))
                        )
                    }
                    {
                        poszycie &&
                        <>
                            <mesh geometry={floorGeometry} material={meshMaterial} castShadow receiveShadow></mesh>
                            <mesh geometry={wallsGeometry} material={wallsMaterial} castShadow receiveShadow></mesh>
                            <mesh geometry={ceilingGeometry} material={meshMaterial} castShadow receiveShadow></mesh>
                        </>
                    }
                    {/* <ContactShadows opacity={1} scale={130} blur={1} far={10} resolution={256} color="#000000" /> */}
                    {/* <AccumulativeShadows temporal frames={100} color="#c1c1c1" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}> */}
                    {/* <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.95} position={[5, 15, 5]} bias={0.001} /> */}
                    {/* </AccumulativeShadows> */}


                </group>
                <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                <Environment preset="studio" />
            </Canvas>
        </div>
    )
}

function FitCameraToObject({ objectSize, fov = 35, initialCameraPosition = [10, 5, 10] }) {
    const { camera, size } = useThree();

    useEffect(() => {
        if (!objectSize) return;

        // Oblicz największy wymiar obiektu
        const maxPerc = Math.max(objectSize.width / 40, objectSize.height / 6, objectSize.depth / 30);
        const aspect = size.width / size.height;

        // Oblicz odpowiednią odległość kamery, aby cały obiekt był widoczny
        const distance = Math.max(5, maxPerc * 15);

        // Ustaw pozycję kamery
        const direction = new THREE.Vector3(...initialCameraPosition).normalize();
        camera.position.copy(direction.multiplyScalar(distance));

        // Ustawienie kamery na środek obiektu
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Aktualizacja macierzy projekcji kamery
        camera.updateProjectionMatrix();
    }, [objectSize, camera, fov, initialCameraPosition, size]);

    return null;
}

export default KonfiguratorCanvas
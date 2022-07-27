import { Text3D } from "@react-three/drei";

export function Words() {
  return (
    <>
      <Text3D
        font={"/fonts/Roboto_Regular.json"}
        size={0.575}
        height={0.065}
        curveSegments={12}
        position={[2.75, 6, 0.75]}
        rotation={[0, -0.5, -0.05]}
      >
        Zachary Cowan
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
}

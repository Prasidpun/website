import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "red",
          fontWeight: "800",
          marginTop: "40",
        }}
      >
        {progress.toFixed()}%
      </p>
    </Html>
  );
};

export default CanvasLoader;

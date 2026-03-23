import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center className="text-xl font-normal text-center">
      {active ? `${Math.round(progress)}% Loaded` : "100% Loaded"}
    </Html>
  );
};

export default Loader;










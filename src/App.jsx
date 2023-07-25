import { Canvas } from "@react-three/fiber";
import CoffeeBeans from "./components/CoffeeBeans.jsx";
import CardGrid from "./components/CardGrid.jsx";
import Footer from "./components/Footer.jsx";
import HeroText from "./components/HeroText.jsx";
import NavBar from "./components/NavBar.jsx";
import { Scroll, ScrollControls } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
        }}
        linear={false}
        camera={{
          fov: 30,
          near: 0.1,
          far: 200,
          position: [3, 3, 3],
        }}
      >
        <ScrollControls pages={5.07} damping={0.1}>
          <CoffeeBeans />
          <Scroll html>
            <div className="md:px-40 px-10">
              <NavBar />
              <HeroText />
              <CardGrid />
              <Footer />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

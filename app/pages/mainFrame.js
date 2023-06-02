import FrameComponent1 from "../components/frame-3";
import FrameComponent3 from "../components/frame-2";
import FrameComponent2 from "../components/frame-1";

const MainFrame = () => {
  return (
    <main className="relative w-full h-[151.88rem]">
      <FrameComponent1 />
      <FrameComponent3 />
      <FrameComponent2 />
    </main>
  );
};

export default MainFrame;

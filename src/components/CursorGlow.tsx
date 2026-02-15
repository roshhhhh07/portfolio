import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background:
            "radial-gradient(circle, hsl(182, 23%, 48%, 0.15) 0%, hsl(200, 58%, 27%, 0.05) 40%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;

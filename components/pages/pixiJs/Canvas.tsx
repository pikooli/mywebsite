import { useRef, useEffect } from "react";

export default function Canvas() {
  // Initialize the GL context
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const gl = canvas.getContext("webgl");
      if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
  });
  return <canvas ref={canvasRef} width="640" height="480"></canvas>;
}

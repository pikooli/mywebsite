import Image from "next/image";

const Arrow = ({ setArrowDown }: { setArrowDown: Function }) => {
  return (
    <div className="ms-3 mt-3 mt-lg-0 text-center me-auto me-lg-0">
      <Image
        src="/bunny/arrow.png"
        width={64}
        height={64}
        className="arrowup"
        onMouseDown={() => setArrowDown((prev: string) => "ArrowUp")}
        onMouseUp={() => setArrowDown((prev: string) => "")}
      />
      <div>
        <Image
          src="/bunny/arrow.png"
          width={64}
          height={64}
          className="arrowleft"
          onMouseDown={() => setArrowDown((prev: string) => "ArrowLeft")}
          onMouseUp={() => setArrowDown((prev: string) => "")}
        />
        <Image
          src="/bunny/arrow.png"
          width={64}
          height={64}
          className="arrowdown"
          onMouseDown={() => setArrowDown((prev: string) => "ArrowDown")}
          onMouseUp={() => setArrowDown((prev: string) => "")}
        />
        <Image
          src="/bunny/arrow.png"
          width={64}
          height={64}
          onMouseDown={() => setArrowDown((prev: string) => "ArrowRight")}
          onMouseUp={() => setArrowDown((prev: string) => "")}
          className="arrowright"
        />
      </div>
    </div>
  );
};

export default Arrow;

import Image from "next/image";
import React from "react";

type Props = {};

const Img = ({
  src,
  alt,
  width,
  heigth,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  heigth: number;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={heigth}
      className={className}
    />
  );
};

const Presentation: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4>Description</h4>
        <p>
          Machine learning is more and more use in today word, from creating
          image to weather forcast, passing by creating bots that beat humain in
          chess game.
        </p>
        <p>
          Ft_linear_regression is a 42 project that introduct you to machine
          learning.
        </p>
        <p>You have to predict the price of a car 🚗 with the km as input.</p>
        <p>
          It will let you discover the power of linear regression and gradient
          descent
        </p>
        <p>
          To predict the price of the car you have to use the mathematics
          formula of linear regression:
        </p>
        <Img
          src="/ressource/ft_linear_regression/equation.png"
          alt="equation"
          className="ms-3"
          width={270}
          heigth={30}
        />
        <p>You have to use these mathematics fomulars to get both θ.</p>
        <p>This will give you θ0 :</p>
        <Img
          src="/ressource/ft_linear_regression/equation1.png"
          alt="equation1"
          className="ms-3"
          width={350}
          heigth={60}
        />
        <p> This will give you θ1 :</p>
        <Img
          src="/ressource/ft_linear_regression/equation2.png"
          alt="equation2"
          className="ms-3"
          width={370}
          heigth={65}
        />
        <p>A default dataset is provided</p>
      </div>
    </div>
  );
};

export default Presentation;

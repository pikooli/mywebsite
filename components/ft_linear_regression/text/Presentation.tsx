import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};

const markdown = `

### Description

The lift coefficient ($C_L$) is a dimensionless coefficient.

Machine learning is more and more use in today word, from creating
image to weather forcast, passing by creating bots that beat humain
in chess game.

**Ft_linear_regression** is a 42 project that introduct you to machine
learning.

You have to predict the price of a car 🚗 with the km as input.

It let you discover the power of linear regression and gradient
descent.

To predict the price of the car you have to use the mathematics
formula of linear regression:

<img
  src="/ressource/ft_linear_regression/equation.png"
  alt="equation"
  className="ms-3"
  width=270
  height=30
/>

You have to use these mathematics fomulars to get both θ.

This will give you θ0 :

<img
  src="/ressource/ft_linear_regression/equation1.png"
  alt="equation1"
  className="ms-3"
  width=360
  height=55
/>

This will give you θ1 :

<img
  src="/ressource/ft_linear_regression/equation2.png"
  alt="equation2"
  className="ms-3"
  width=470
  height=65
/>

A default dataset is provided
`;

const Presentation: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Presentation;

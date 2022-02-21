import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
### Explanation

Machine learning work amost everytime with normalized data.

*A normalized dataset is just a way to set the dataset in a range
that is more easy to work*

***e.g : set all values between 0-1***

You can check more information on <a className="text-decoration-none text-dark fw-bold" target="tab" href="https://www.delftstack.com/howto/python/normalize-a-list-of-numbers-in-python/">Normalize</a>

When your dataset is normalized you can work on it to find θ values.

We will use a gradient descent algorithme to get a more precise value
possible of both θ.

*Gradient descent is a first-order iterative optimization algorithm
for finding a local minimum of a differentiable function.*

For more information on <a className="text-decoration-none text-dark fw-bold" target="tab" href="https://towardsdatascience.com/linear-regression-using-gradient-descent-97a6c8700931/" >Gradient descent</a>

We will iterate n number of time over the values in the dataset, to
calculate the derivation.

When you subtract the derivation to the actual values in the dataset,
you get the loss.

With this loss you can ajust the learning rate in the next iteration
and try to optimise the values of both θ, to get the smaller loss.

After some iteration, you will see that the values of both θ and the
loss will stabilise.
`;

const Explanation: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Explanation;

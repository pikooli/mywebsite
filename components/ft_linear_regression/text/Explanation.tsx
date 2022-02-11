import React from "react";
import { Link } from "components/link";

type Props = {};

const Explanation: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4>Explanation</h4>
        <p>Machine learning work amost everytime with normalized data.</p>
        <p>
          <i>
            A normalized dataset is just a way to set the dataset in a range
            that is more easy to work,
          </i>
        </p>
        <p>
          <i>
            <b>e.g : set all values between 0-1 </b>
          </i>
        </p>
        <p>
          You can check more information on this link :{" "}
          <Link
            className="text-decoration-none text-dark fw-bold"
            target="tab"
            href="https://www.delftstack.com/howto/python/normalize-a-list-of-numbers-in-python/"
            text="Normalize"
          />
        </p>
        <p>
          When your dataset is normalized you can work on it to find θ values.
        </p>
        <p>
          We will use a gradient descent algorithme to get a more precise value
          possible of both θ.
        </p>
        <p>
          <i>
            Gradient descent is a first-order iterative optimization algorithm
            for finding a local minimum of a differentiable function.
          </i>
        </p>
        <p>
          Check out this{" "}
          <Link
            className="text-decoration-none text-dark fw-bold"
            target="tab"
            href="https://towardsdatascience.com/linear-regression-using-gradient-descent-97a6c8700931/"
            text="Link"
          />{" "}
          for more information on Gradient descent
        </p>
        <p>
          We will iterate n number of time over the values in the dataset, to
          calculate the derivation.
        </p>
        <p>
          When you subtract the derivation to the actual values in the dataset,
          you get the loss.
        </p>
        <p>
          With this loss you can ajust the learning rate in the next iteration
          and try to optimise the values of both θ, to get the smaller loss.
        </p>
        <p>
          After some iteration, you will see that the values of both θ and the
          loss will stabilise
        </p>
      </div>
    </div>
  );
};

export default Explanation;

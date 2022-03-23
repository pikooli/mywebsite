import Calculation from "model/ft_linear_regression/Calculation";

export default function ShowTheta({
  calculation,
  text,
}: {
  calculation: Calculation;
  text?: string;
}) {
  return (
    <div>
      {text && <span className="mr-3">{text}</span>}
      <span>T0 : {calculation.theta0}</span>
      <span className="ml-3">T1 : {calculation.theta1}</span>
    </div>
  );
}

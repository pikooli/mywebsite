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
      {text && <span className="me-3">{text}</span>}
      <span>T0 : {calculation.theta0}</span>
      <span className="ms-3">T1 : {calculation.theta1}</span>
    </div>
  );
}

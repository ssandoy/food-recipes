import React from "react";
import "./styles.scss";

type size = "sm" | "md" | "lg";

interface Props {
  size: size;
}

const Spinner: React.FunctionComponent<Props> = ({ size }: Props) => {
  // TODO APPLY WIDTH somehow
  return <div className={`spinner spinner-${size}`} />;
};

export default Spinner;

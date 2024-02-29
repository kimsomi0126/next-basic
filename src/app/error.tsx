"use client";
import React, { useEffect } from "react";
type Props = {
  error: Error;
  reset: () => void;
};
const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error.message);
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ textAlign: "center", margin: "3rem 0" }}>
        <h2 style={{ marginBottom: "1rem" }}>ERROR</h2>
        <p>{error.message}</p>
        <button
          onClick={() => {
            reset();
          }}
        >
          새로고침
        </button>
      </div>
    </div>
  );
};

export default Error;

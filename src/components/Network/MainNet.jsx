
import {Network } from "./Network"
import {ManageNetwork } from "./ManageNetwork"


export const MainNet = () => {
  return (
    <div
      className="app"
      style={{
        display: "grid",
        width: "80%",
        margin: "auto",
        gridTemplateColumns: "26% 70%",
        gap: "2%",
      }}
    >
      <ManageNetwork />
      <Network />
     
    </div>
  );
};

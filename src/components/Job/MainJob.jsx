import { JobLeftSide } from "./JobLeftSide";
import { JobRightSide } from "./JobRightSide";
import { Job } from "./Job";

export const MainJob = () => {
  return (
    <div
      className="app"
      style={{
        display: "grid",
        width: "80%",
        margin: "auto",
        gridTemplateColumns: "26% 50% 24%",
        gap: "2%",
      }}
    >
      <JobLeftSide />
      <Job />
      <JobRightSide />
    </div>
  );
};

import { Gitgraph } from "@gitgraph/react";

const GitgraphC = () => {
  return (
    <Gitgraph options={{

      orientation: 'horizontal-reverse',
      template: "metro", //"blackarrow",
      colors: ["red", "blue", "orange", "green", "yellow", "violet", "indigo", "maroon", "magenta"],

    }}>
      {(gitgraph) => {
        // Simulate git commands with Gitgraph API.
        const master = gitgraph.branch("Mindset-CAL-S4H");
        master.commit("Mindset-CAL-S4H Licenced Installation");
        const develop = master.branch("DEV-100");
        develop.commit("Dev Access Key Allowed");

        const aFeature = develop.branch("110-Unit-Testing");
        aFeature
          .commit("SNOTE 100- OSS Release - Brexit Changes")
          .commit("S.P.D.D - O.K.")
          .commit("SPAU, SPAU_ENH-Acceptance Tests");
        develop.merge(aFeature);
        develop.commit("Prepare v1");
        master.merge(develop).tag("SAPK-75F01INSAPABA");

        const quality = master.branch("QA-300");
        quality.commit("Only TR change allowed");

        const bFeature = quality.branch("330-Unit-Testing");
        bFeature
          .commit("SNOTE 500- OSS Release - Brexit Configuration Changes")
          .commit("S.P.D.D - O.K.")
          .commit("SPAU, SPAU_ENH-Acceptance Tests");
        quality.merge(bFeature);
        quality.commit("Prepare v1");
        master.merge(quality).tag("SAPK-75501INSAPABA");

      }}
    </Gitgraph>
  );
};

// export default GitgraphC;
export { GitgraphC };
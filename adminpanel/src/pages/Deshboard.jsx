import React from "react";
import { Grid, Box } from "@mui/material";
import BasicCards from "../components/BasicForms/BasicCard";
import TimelineCard from "../components/BasicForms/TimelineCard"
import BasicTable from "../components/BasicForms/BasicTable";
import BottomCards from "../components/BasicForms/BottomCards"

const Dashboard = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={2} >
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item>
          <BasicCards />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item lg={4} md={3} xl={3}>
          <TimelineCard />
        </Grid>
        <Grid item lg={4} md={4} xl={4}>
          <BasicTable />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item>
          <BottomCards />
        </Grid>
      </Grid>

    </Box>
  );
};

export default Dashboard;

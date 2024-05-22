import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import ExTable from "../Forms/Deshboard/ExTable";

const BasicTable = () => {
  return (
    <Box sx={{ margin: '20px' }}> 
      <Card sx={{ borderRadius: 8 }} variant="outlined">
        <CardContent>
          <Typography variant="h6">Product Performance</Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
          <ExTable />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTable;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { styled } from '@mui/material/styles';

// Custom styled TimelineDot to customize colors
const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none', // Remove default shadow
  '&.MuiTimelineDot-filled': {
    color: theme.palette.primary.contrastText, 
  },
}));

export default function BasicCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5.5,
        marginRight: 4.4
      }}
    >
      <Card sx={{ width: '300px', height: '500px', borderRadius: 8 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Recent Interactions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overview of Years
          </Typography>
          <Timeline position="left">
            <TimelineItem>
              <TimelineSeparator>
                <CustomTimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                09:00 AM - Event 1
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <CustomTimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                10:30 AM - Event 2
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <CustomTimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                12:15 PM - Event 3
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </Box>
  );
}

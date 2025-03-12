"use client";

import * as React from "react";
import { useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function CustomizedTimeline() {
    // Check if screen is large (desktop) or small (mobile/tablet)
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");

    return (
        <Box className="max-w-5xl mx-auto  py-10">
            <Timeline position={ isLargeScreen ? "alternate" : "right" } sx={ {
                [ `& .${timelineItemClasses.root}:before` ]: {
                    flex: 0,
                    padding: 0,
                },
            } }>
                {/* Step 1 */ }
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={ { py: 3 } }>
                        <Typography variant="h6" fontWeight="bold">
                            Step 1: Sourcing Anonymized Data
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                            By sourcing data from the NHS, UK Biobank, and similar resources, we can access large, reliable anonymized datasets with ethical approval.
                        </Typography>
                        <ul className="list-disc  text-gray-600 text-sm md:text-base mt-2">
                            <li><b>Genomic Data:</b> AI processes aspects like metabolomics, proteomics, transcriptomics, and epigenomics.</li>
                            <li><b>Histopathological Data:</b> AI detects unique cancer patterns from tissue samples.</li>
                            <li><b>Clinical Data:</b> Includes patient demographics, medical history, and environmental factors.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                {/* Step 2 */ }
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={ { py: 3 } }>
                        <Typography variant="h6" fontWeight="bold">
                            Step 2: Developing a Predictive Model
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                            We use **advanced AI models** to layer different data types and analyze missing values. Our **patented deep learning model** detects patterns that predict a patient’s response to treatment.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Step 3 */ }
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={ { py: 3 } }>
                        <Typography variant="h6" fontWeight="bold">
                            Step 3: Producing a Simple Interface
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                            Our **intuitive Graphical User Interface (GUI)** integrates with existing hospital systems. With **one click**, doctors can analyze patient data and receive **personalized treatment recommendations**.
                        </Typography>
                        <ul className="list-disc  text-gray-600 text-sm md:text-base mt-2">
                            <li>**80-90%**: High probability of success.</li>
                            <li>**50%**: Alternative treatments may be more effective.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}

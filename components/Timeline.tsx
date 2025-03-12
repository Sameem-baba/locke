"use client"

import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
    // Check if screen is large (laptop/desktop) or small (mobile/tablet)
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');

    return (
        <Timeline position={ isLargeScreen ? "alternate" : "right" }>
            {/* Step 1 */ }
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={ { py: 2 } }>
                    <Typography variant="h6" fontWeight="bold">
                        Step 1: Sourcing Anonymized Data
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        By sourcing data from the NHS, UK Biobank, and similar resources, we can access large, reliable anonymized datasets with ethical approval. We build complex profiles combining three forms of data:
                        <ul>
                            <li><b>Genomic Data:</b> AI processes multiple aspects like metabolomics, proteomics, transcriptomics, and epigenomics.</li>
                            <li><b>Histopathological Data:</b> AI detects unique cancer patterns from tissue samples.</li>
                            <li><b>Clinical Data:</b> Information on patient demographics, medical history, and environmental factors.</li>
                        </ul>
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 2 */ }
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={ { py: 2 } }>
                    <Typography variant="h6" fontWeight="bold">
                        Step 2: Developing a Predictive Model
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        We use **advanced AI models** to layer different data types and analyze missing values. Our **patented deep learning model** detects patterns that predict a patient’s response to treatment, providing valuable insights for personalized medicine.
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
                <TimelineContent sx={ { py: 2 } }>
                    <Typography variant="h6" fontWeight="bold">
                        Step 3: Producing a Simple Interface
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our **intuitive Graphical User Interface (GUI)** is based on NHS software and integrates seamlessly with existing hospital systems. With **one click**, doctors can analyze patient data and receive **personalized treatment recommendations**.
                        <br /><br />
                        The GUI provides a **success probability score**:
                        - **80-90%**: High probability of success
                        - **50%**: Alternative treatments may be more effective
                        <br />
                        Hospitals can license the **Curenetics software** through a **three-tier payment model** based on patient volume.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

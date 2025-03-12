import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                {/* <TimelineOppositeContent
                    sx={ { m: 'auto 0' } }
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    9:30 am
                </TimelineOppositeContent> */}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary'>
                        {/* <FastfoodIcon /> */ }
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={ { py: '12px', px: 2 } }>
                    <Typography variant="h6" component="span">
                        Step 1: Sourcing anonymised data.
                    </Typography>
                    <Typography>
                        By sourcing data from the NHS, UK Biobank, and similar resources outside the UK, it is possible to access large banks of reliable anonymised data with ethical approval. We build complex profiles combining three forms of data:
                        Genomic data is information that determines how genes behave and interact.
                        Our AI capabilities allow us to process multiple aspects of genomic data, including metabolomics (how the metabolism works on a cellular level), proteomics (the influence of proteins within a cell), transcriptomics (analysing the function of RNA within a cell) and epigenomics (studying how genes are switched on or off).
                        Histopathological data comes from examining tissue samples under a microscope or with a very high-resolution camera.
                        Samples of cancerous tissue are cut into micro-thin slices in a lab, then stained with dyes to allow parts of the cells to be seen more clearly. Our AI tools identify unique patterns that give us information about the cancer.
                        Clinical data is a collection of information about an individual patient. This can include basic details of gender, age and ethnicity and environmental factors such as diet and lifestyle, as well as family and medical history. </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                {/* <TimelineOppositeContent
                    sx={ { m: 'auto 0' } }
                    variant="body2"
                    color="text.secondary"
                >
                    10:00 am
                </TimelineOppositeContent> */}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        {/* <LaptopMacIcon /> */ }
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={ { py: '12px', px: 2 } }>
                    <Typography variant="h6" component="span">
                        Step 2: Develop a predictive model
                    </Typography>
                    <Typography>
                        We are using advanced AI models of machine learning which enable us to layer the different types of data collected and combine this information. Deep learning methods allow us to handle high-dimensional data and compute any missing values.
                        Our patented AI model discovers patterns that predict the response an individual patient is likely to have to treatment.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        {/* <HotelIcon /> */ }
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={ { py: '12px', px: 2 } }>
                    <Typography variant="h6" component="span">
                        Step 3: Producing a simple interface
                    </Typography>
                    <Typography>
                        Our simple-to-use Graphical User Interface (GUI) is based on software currently used within the NHS and can be adapted by our engineers to meet the specifications of users around the world. It integrates with existing systems to connect with hospital records. At the click of a button, the software will analyse patient details providing personalised results in seconds.
                        The GUI is a robust decision support tool, providing Clinicians with a percentage to suggest how well-suited an individual patient is for treatment. 80-90% indicates a perfect fit with a high probability of success, while less than 50% suggests alternative treatments may provide a better outcome. Using these results, doctors can offer patients the very best treatment strategies personalised to their needs.
                        Hospitals and other healthcare providers can purchase a license to use the Curenetics software on a three-tier payment system, dependent on patient volume.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

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
            { isLargeScreen ? (
                <Timeline position={ isLargeScreen ? "alternate" : "right" }>
                    {/* Step 1 - Research & Prototype Development */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 1: Research & Prototype Development
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                We analyze market trends and customer behavior to identify pain points in the laundry industry. Using these insights, we create an <b>initial prototype</b>, focusing on <b>smart locker systems and digital service integration</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>Market Research:</b> Gathering real-time data on consumer needs.</li>
                                <li><b>Prototype Testing:</b> Developing a <b>minimum viable product (MVP)</b> with core features.</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 2 - Customization & Market Expansion */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 2: Customization & Market Expansion
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                We refine our platform through <b>beta testing and real-time analytics</b>, ensuring seamless integration with <b>laundry businesses of all sizes</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>Optimizing smart locker logistics & delivery tracking.</b></li>
                                <li><b>Enhancing customer interactions with AI-driven recommendations.</b></li>
                                <li><b>Customizing software solutions for large & mid-sized laundry providers.</b></li>
                            </ul>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 2 } }>
                                Through continuous collaboration, we develop a <b>scalable and adaptable</b> solution tailored to real-world business needs.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 3 - Enhanced User Experience & Scaling */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 3: User Experience & Automation
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                With data-driven insights, we refine <b>UI/UX design, automate workflows</b>, and scale operations for <b>maximum efficiency</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>A/B testing & customer feedback integration.</b></li>
                                <li><b>AI-driven service recommendations & predictive analytics.</b></li>
                                <li><b>Seamless user interface for frictionless transactions.</b></li>
                            </ul>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 2 } }>
                                Our <b>continuous improvement cycle</b> ensures <b>businesses stay ahead</b> in an evolving digital landscape.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            ) : (
                <Timeline position={ isLargeScreen ? "alternate" : "right" } sx={ {
                    [ `& .${timelineItemClasses.root}:before` ]: {
                        flex: 0,
                        padding: 0,
                    },
                }
                }>
                    {/* Step 1 - Research & Prototype Development */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 1: Research & Prototype Development
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                We analyze market trends and customer behavior to identify pain points in the laundry industry. Using these insights, we create an <b>initial prototype</b>, focusing on <b>smart locker systems and digital service integration</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>Market Research:</b> Gathering real-time data on consumer needs.</li>
                                <li><b>Prototype Testing:</b> Developing a <b>minimum viable product (MVP)</b> with core features.</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 2 - Customization & Market Expansion */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 2: Customization & Market Expansion
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                We refine our platform through <b>beta testing and real-time analytics</b>, ensuring seamless integration with <b>laundry businesses of all sizes</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>Optimizing smart locker logistics & delivery tracking.</b></li>
                                <li><b>Enhancing customer interactions with AI-driven recommendations.</b></li>
                                <li><b>Customizing software solutions for large & mid-sized laundry providers.</b></li>
                            </ul>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 2 } }>
                                Through continuous collaboration, we develop a <b>scalable and adaptable</b> solution tailored to real-world business needs.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 3 - Enhanced User Experience & Scaling */ }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={ { py: 3 } }>
                            <Typography variant="h6" fontWeight="bold">
                                Step 3: User Experience & Automation
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
                                With data-driven insights, we refine <b>UI/UX design, automate workflows</b>, and scale operations for <b>maximum efficiency</b>.
                            </Typography>
                            <ul className="text-gray-600 text-sm md:text-base mt-2">
                                <li><b>A/B testing & customer feedback integration.</b></li>
                                <li><b>AI-driven service recommendations & predictive analytics.</b></li>
                                <li><b>Seamless user interface for frictionless transactions.</b></li>
                            </ul>
                            <Typography variant="body1" color="text.secondary" sx={ { mt: 2 } }>
                                Our <b>continuous improvement cycle</b> ensures <b>businesses stay ahead</b> in an evolving digital landscape.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline >
            ) }

        </Box>
    );
}

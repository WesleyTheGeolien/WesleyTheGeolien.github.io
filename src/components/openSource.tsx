import * as React from "react"
import { Section } from "./section"
import { CardGrid } from "./card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const openSource = [
    {
        "title": "Seismic Footprint removal Hackathon - Software Underground Transfrom",
        "description": "Build a tool to design filters for seismic data in the frequency domain. After the hackathon a web based tool (panel) was built and deployed to AWS."
    },
    {
        "title": "Pangeo",
        "description": "Take part in weekly catchups to discuss and better understand the intersection between computing and climate sciences"
    },
    {
        "title": "IPSL Boundary setup",
        "description": (
            <p>
            <a href="https://wesleythegeolien.github.io/Presentations/climate_sim_platform/IPSL_Boundary_conditions_presentation.html" target="_blank" className="no-underline text-zinc-100">
            SaaS web app to setup boundary conditions for the IPSL model. 
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-fuchsia-400"/>
            </a>
            <br/>
            <iframe src="https://wesleythegeolien.github.io/Presentations/climate_sim_platform/IPSL_Boundary_conditions_presentation.html"/>
            </p>
        )
    },
    {
        "title": "SOS Mediterranée website update - CartONG",
        "description": "Refresh of the website to show boat rescues in the mediterranean sea."
    },
    {
        "title": "Well Correlation tool Hackathon - Software Underground Transfrom",
        "description": "Build a web tool (Dash / plotly) to load LAS files and visualise them."
    }
]

export const OpenSource = () => (
    <Section title="Open Source Contributions" description="">
        <CardGrid cardsContent={openSource} />
    </Section>
)
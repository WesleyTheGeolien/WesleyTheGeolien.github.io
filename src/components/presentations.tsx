import * as React from "react"
import { Section } from "./section"
import { CardGrid } from "./card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const presentations = [
    {
        "title": "Reproducible Compute Environments with Docker",
        "description": (
            <p>
            <a href="https://wesleythegeolien.github.io/Presentations/docker_reproducible_envs/index.html" target="_blank" className="no-underline text-zinc-100">
            Presentation to work group how container technology can be harnessed to produce reproducible coding environments for publications and work.
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-fuchsia-400"/>
            </a>
            <br/>
            <iframe src="https://wesleythegeolien.github.io/Presentations/docker_reproducible_envs/index.html#/"/>
            </p>
        )
    },
    {
        "title": "Portable interactive Plotting with Javascript - Software Underground",
        "description": (
            <>
                <p>
                <a href="https://wesleythegeolien.github.io/Presentations/Python-With-JavaScript-Sprinkles/index.html" target="_blank" className="no-underline text-zinc-100">
                    1h30 talk at Software Underground on how to use Python with Javascript to create portable graphs that can be used in any web browser.
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-fuchsia-400"/>
                    </a>
                </p>
                <iframe src="https://wesleythegeolien.github.io/Presentations/Python-With-JavaScript-Sprinkles/index.html"/>
                <iframe src="https://www.youtube.com/embed/j_4wkMzGvKs?si=rLf0ro2_79XQ6Qb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
            </>
        )
    },
    {
        "title": "Prototyping for Geologists - Software Underground",
        "description": (
            <>
            <p>
            Short talk on building a infrastructure to rapidily build and deploy prototypes.
            </p>
            <iframe src="https://www.youtube.com/embed/rUbvueIF5f8?si=McmE5bzUYj8ljLmG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        "title": "JupyterLab Quick Start Guide - Packt",
        "description": (
            <p>
                Coauthor of JupyterLab quick start guide. Available now on <a href="https://github.com/PacktPublishing/JupyterLab-Quick-Start-Guide?tab=readme-ov-file" target="_blank">Github.</a>
            </p>
        )
    },
    {
        "title": "Integration of BIM and the subsurface - Indra Cluster",
        "description": "Presentation demonstrating the integrations between Building Information Modeling and subsurface data."
    },
    {
        "title": "How certain are you of your surfaces - Seequent",
        "description": (
            <p>
                Presentation in front of over 200 mining experts on behalf of Seequent demonstarting the latest R&D work carried out at the company.
                <iframe src="https://www.youtube.com/embed/jt26J5ljlA0?si=uwARxm3v_DBqXdPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </p>
        )
    },
    {
        "title": "Current automatic well log correlation techniques - RING",
        "description": (
            <p>
                Presentation in front off over 100 Oil and Gas experts demonstarting my Master’s thesis on automated well log correlation techniques. The Master’s thesis was also published in the Proceedings.
            </p>
        )
    }
]

export const Presentations = () => (
    <Section title="Presentations and Publications" description="">
        <CardGrid cardsContent={presentations} />
    </Section>
)
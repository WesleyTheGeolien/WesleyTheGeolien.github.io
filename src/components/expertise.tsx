import * as React from "react"
import { Section } from "./section"
import { CardGrid } from "./card"

const expertise = [
    {
        "title": "Scientific Computing",
        "description": "Bla"
    },
    {
        "title": "Visualization",
        "description": "Bla"
    },
    {
        "title": "Microservice Architecture",
        "description": "Bla"
    },
    {
        "title": "Cloud Compute",
        "description": "Bla"
    },
    {
        "title": "Prototyping",
        "description": "Bla"
    },
    {
        "title": "API developement",
        "description": "Bla"
    },
    {
        "title": "Full Stack",
        "description": "Bla"
    },
    {
        "title": "Production Code",
        "description": "Bla"
    },
    {
        "title": "Infrastructure",
        "description": "Bla"
    },
]

export const Expertise = () => (
    <Section title="Domains of Expertise and interest" description="Some of the projects are from work and some are on my own time.">
        <CardGrid cardsContent={expertise} />
    </Section>
)
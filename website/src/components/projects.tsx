import * as React from "react"
import { Section } from "./section"
import { CardGrid } from "./card"

const projects = [
    {
        "title": "Test",
        "description": "Bla"
    },
    {
        "title": "Test",
        "description": "Bla"
    },
    {
        "title": "Test",
        "description": "Bla"
    }
]

export const Projects = () => (
    <Section title="Projects" description="Some of the projects are from work and some are on my own time.">
        <CardGrid cardsContent={projects} />
    </Section>
)
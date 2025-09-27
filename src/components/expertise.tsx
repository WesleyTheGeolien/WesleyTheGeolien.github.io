import * as React from "react"
import { Section } from "./section"
import { CardGrid } from "./card"

const expertise = [
    {
        "title": "Languages and Frameworks",
        "description": (
            <div className="flex flex-row flex-wrap justify-center w-full hover:border-zinc-400/50">
                {[
                    "Python",
                    "Docker",
                    "TypeScript",
                    "React",
                    "Tailwind",
                    "Azure",
                    "C++",
                    "SQL",
                    "Latex",
                ].map(el => (
                    <div className="px-3 py-1 m-1 border rounded-full border-zinc-600 w-fit">{el}</div>
                ))}
            </div>
        )
    },
    {
        "title": "Scientific Computing",
        "description": (
            <>
                <p>
                    Having worked across multiple scientific computing companies, I have gained extensive experience in writing, debugging, and optimizing code in various programming languages. This versatility allows me to effectively interface between different languages, leveraging the strengths of each to achieve optimal performance and efficiency.
                </p>
            </>
        )
    },
    {
        "title": "Cloud Compute",
        "description": (
            <>
                <p>
                    Transitioning to the cloud presents a myriad of advantages and disadvantages. Cloud architectures inherently necessitate a microservice architecture, which requires varying degrees of granularity. Throughout my career, I have had the privilege of designing and orchestrating such architectures on multiple occasions. This experience has underscored the importance of implementing best practices in microservice orchestration, such as monitoring and logging services and designing for failure to ensure fault tolerance.
                </p>
                <p>
                    I am familiar with using and building using containerization technology as well as using serverless runtimes.
                </p>
            </>
        )
    },
    {
        "title": "Innovation",
        "description": (
            <>
                <p>
                    I am at ease in swiftly crafting tools and workflows to explore new ideas and iteratively refining them in collaboration with stakeholders. By leveraging rapid prototyping and iterative design processes, I've been able to transform initial concepts into tangible, user-focused solutions.
                </p>
            </>
        )
    },
    {
        "title": "API developement",
        "description": (
            <>
                <p>
                    Proposing code and data objects to the web or a Software as a Service (SaaS) platform through API creation is crucial. While I am acquainted with various best practices and frameworks, my expertise lies particularly within Python's Flask and FastAPI.
                </p>
                <p>
                    I've been involved in various projects ranging from developing Flask-based applications for local deployment to orchestrating intricate processes across numerous containers. Additionally, I've explored the application of serverless functions for engaging with Large Language Model (LLM) inference APIs and integrating cloud-stored data.
                </p>
            </>
        )
    },
    {
        "title": "Full Stack",
        "description": (
            <>
                <p>
                    To effectively communicate complex scientific knowledge and algorithms it is essential to have a frontend. In small agile teams lacking dedicated frontend developers, it's crucial to adopt a combination of best practices in frontend development and leverage backend expertise for effective products.
                </p>
            </>
        )
    },
    {
        "title": "Production Code",
        "description": (
            <>
                <p>

                    I've been fortunate enough to work in development teams across different company stages and sizes. This experience has enriched my understanding of software development and coding standards, teaching me not just what these practices entail but also when and how to effectively implement them.
                </p>
            </>
        )
    },
    {
        "title": "Visualization",
        "description": (
            <>
                <p>
                    Being able to visualize data intuitively and interactively is primordial to being able to rapidly iterate on ideas. I keep up to date on the latest advances in the domain.
                </p>
            </>
        )
    },
]

export const Expertise = () => (
    <Section title="Domains of Expertise and Interests" description="">
        <CardGrid cardsContent={expertise} />
    </Section>
)
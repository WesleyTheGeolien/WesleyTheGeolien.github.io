import * as React from "react"
import { Section } from "./section"
import { Map } from "./Map.tsx"
import { HRule } from "./hrule.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const jobs = [
    {
        "title": "Senior Full Stack Developer - Contract (remote)",
        "company": "Resource Modeling Solutions",
        "website": "https://resourcemodelingsolutions.com",
        "dates": "2021 - Now",
        "flyTo": {
            "center": [6.3906, 45.6745],
            "zoom": 10
        },
        "description": (
            <>
                <p>
                    Resource Modeling Solutions (RMS) develops an industry standard geostatictical python package (rmsp) and platform with state of the art functionality.
                </p>
                <p>
                    The task of developing the data conversion pipeline and in notebook 3D Viewer was entrusted to me. Our goal was to present complex data in an intuitive and interactive format for our clients. The viewer builds upon vtk.js for interactive viewing.
                </p>
                <p>
                    Utilizing cloud functions, a large language model equipped with Retrieval Augmented Generation (RAG) capabilities was integrated to facilitate coding and documentation searches for users. This implementation leveraged RAG to ensure that the language model's responses were grounded in real-time or proprietary data, thereby providing accurate and relevant assistance. This approach exemplified the potential of merging advanced AI techniques with cloud computing to enhance practical applications, particularly in areas like coding support and documentation navigation.
                </p>
                <p>
                    Other projects included integrating third-party technologies to enhance product offerings. One notable achievement was the integration RMS's Drillhole Optimizer C library into rmsp or prototyping the integration between rmsp and GeologicAI's Coretable.
                </p>
            </>
        ),
    },
    {
        "title": "Team Lead Tech - Volonteer (remote)",
        "company": "Climatematch",
        "website": "https://sites.google.com/climatematch.io/academy/about",
        "dates": "2023",
        "flyTo": {
            "zoom": 1
        },
        "description": (
            <>
                <p>
                    Climatematch Academy, a globally accessible summer school program, aims to democratize access to computational methods in climate science. It provides a comprehensive introduction to these techniques, fostering a diverse community of learners committed to addressing climate challenges.
                </p>
                <p>
                    As the tech lead, I oversaw the development of DevOps pipelines (using GitHub Actions) to facilitate code testing and the creation of a <a href="https://comptools.climatematch.io/tutorials/intro.html" target="_blank">Jupyter Book</a>.
                </p>
                <p>
                    Another of my roles was to curate a unified environment (based on the pangeo stack that would work with all course material and provide students with all the tools they needed.
                </p>
                <p>
                    Finally I was the point of contact with <a href="https://2i2c.org" target="_blank">
                        2i2c
                    </a> who setup and maintained a JupyterHub for the course.
                </p>
            </>
        )
    },
    {
        "title": "Research Engineer",
        "company": "CEREGE - Climate",
        "website": "https://www.cerege.fr/en/sciences/climate/",
        "dates": "2020 - 2021",
        "flyTo": {
            "center": [5.3332, 43.4911],
        },
        "description": (
            <>
                <p>
                    CEREGE (Centre de Recherche et d'Enseignement des Géosciences de l'Environnement) is comprised of several specialized units, one of which is the climate team. Within this team, I was actively involved in the <a href="https://paleoclim-cnrs.github.io" target="_blank">
                        paleoclimatology workgroup
                    </a>, collaborating closely with researchers across France and Europe.
                </p>
                <p>
                    Configuring boundary conditions for climate models, such as those provided by <a href="https://cmc.ipsl.fr/ipsl-climate-models/" target="_blank">IPSL</a>, can be intricate. To enhance usability, I developed, deployed and maintained a Software as a Service (SaaS) platform that enables users to construct the necessary inputs interactively. The project was open sourced on GitHub.
                </p>
                <p>
                    I contributed to the development of a semi-automated processing pipeline for analyzing results, which was successfully deployed on an internal JupyterHub instance that I managed. This deployment facilitated efficient and streamlined processing of data.
                </p>
                <p>
                    During my time at CEREGE I engaged with the Pangeo group to enrich my understanding of computational climate science and its best practices.
                </p>
            </>
        )
    },
    {
        "title": "Project Manager Digital Innovation",
        "company": "Envisol",
        "website": "https://envisol.net",
        "dates": "2019 - 2020",
        "flyTo": {
            "center": [5.4453, 45.5640],
            "zoom": 8
        },
        "description": (
            <>
                <p>
                    Envisol is a French Consultancy specialized in Contamination and Remediation.
                </p>
                <p>
                    During my stint at Envisol, I was entrusted with the responsibility of constructing a prototype geostatistical Software as a Service (SaaS) solution. This project aimed to accurately characterize and regularly update contamination estimates. Leveraging advanced geostatistical techniques, the solution was designed to provide detailed insights into contamination levels, supporting informed decision-making and remediation strategies.
                </p>
                <p>
                    Further work included automating data acquistion workflows and building bespoke tools for the QGIS platform.
                </p>
            </>
        )
    },
    {
        "title": "Research Engineer",
        "company": "Seequent",
        "website": "https://www.seequent.com",
        "dates": "2017 - 2019",
        "flyTo": {
            "center": [172.6366, -43.5320],
            "zoom": 10
        },
        "description": (
            <>
                <p>
                    Seequent is recognized for creating the Leapfrog 3D suite, a leading solution in the geological modeling sector. The software uses Radial Basis Functions (RBFs) to generate surfaces in an implicit manner from sparse input data.
                </p>
                <p>
                    As part of the R&D team, I collaborated with various internal teams and clients, offering technical expertise and producing prototypes. These prototypes were either developed by repurposing existing Core IP or by exploring innovative approaches, such as leveraging cloud-based computations and web dashboards. This multifaceted approach allowed us to rapidly prototype and gather valuable user feedback, iterating on our designs to refine and enhance our solutions. By integrating serverless technologies from major cloud providers, we were able to build and deploy prototypes efficiently. This methodology enabled us to deliver high-quality, user-centric solutions.
                </p>
            </>
        )
    },
    {
        "title": "Master in Geological Engineering with specialisation in software developement",
        "company": "ENSG",
        "website": "http://ensg.univ-lorraine.fr/english/",
        "dates": "2013 - 2016",
        "flyTo": {
            "center": [6.184417, 48.692055],
            "zoom": 10
        },
        "description": (
            <>
                <p>
                    Ecole Nationale Superieure de Geologie is a leading French engineering school specialising in geo- sciences and delivering an Engineering diploma combined with a Master from the University of Lorraine.
                </p>
                <p>
                    Title of Thesis: ”Current automatic well log correlation techniques, their advantages and drawbacks”.
                </p>
            </>
        )
    },

]

function Job({ job, setFlyTo, children }) {
    const ref = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFlyTo(job.flyTo); // Set Component1 active
                    // Optionally, set other components inactive here
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [setFlyTo]);
    return (
        <div ref={ref} className="flex flex-col justify-center min-h-screen text-zinc-100 snap-center text-zinc-400">
            <h3 className="text-4xl font-bold text-zinc-100">
                {job.title}
            </h3>
            <a href={job.website} target="_blank" className="flex items-center space-x-2 no-underline text-zinc-100">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-400 bg-clip-text w-fit">
                    {job.company}
                </h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-fuchsia-400"/>
            </a>
            <h3 className="text-xl font-bold">
                {job.dates}
            </h3>
            {children}
        </div>
    )
}

export function CV() {
    const [flyTo, setFlyTo] = React.useState({})

    return (
        <Section title="Resume" description="">
            <div className="flex flex-col md:flex-row">
                {/* Left Column - Sticky Map */}
                <div className="sticky top-0 flex-1 md:py-[10vh] h-screen">
                    <div className="flex flex-col items-center justify-center w-full h-[30vh] md:h-full overflow-hidden shadow-lg rounded-md md:rounded-3xl shadow-white">
                        <Map flyTo={flyTo} />
                    </div>
                </div>
                {/* Right Column - Scrollable */}
                <div className="flex-1 md:pl-24 snap-y snap-mandatory snap-always">
                    {jobs.map((job) => (
                        <>
                            <Job key={job.company} job={job} setFlyTo={setFlyTo}>
                                {job.description}
                            </Job>
                            <HRule />
                        </>
                    ))}
                </div>
            </div>
        </Section>
    )
}
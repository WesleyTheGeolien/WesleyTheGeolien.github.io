import * as React from "react"
import { Section } from "./section"
import { Map } from "./Map.tsx"
import { HRule } from "./hrule.tsx";

const locations = {
    "Resource Modeling Solutions (remote)": {
        "center": [6.3906, 45.6745],
        "zoom": 10
    },
    "CEREGE": {
        "center": [5.3332, 43.4911],
    },
    "Envisol": {
        "center": [5.4453, 45.5640],
        "zoom": 8
    },
    "Seequent": {
        "center": [172.6366, -43.5320],
        "zoom": 10
    }
}

function Job({ title, company, setActiveSection, children }) {
    const ref = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(locations[company]); // Set Component1 active
                    // Optionally, set other components inactive here
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [setActiveSection]);
    return (
        <div ref={ref} className="flex flex-col justify-center h-screen text-white snap-center">
            <h3 className="text-4xl font-bold">
                {title}
            </h3>
            <h3 className="text-2xl font-bold">
                {company}
            </h3>
            {children}
        </div>
    )
}

export function CV() {
    const [activeSection, setActiveSection] = React.useState('')

    return (
        <Section title="Resume" description="">
            <div className="flex flex-col md:flex-row">
                <div className="sticky top-0 flex-1 md:py-[10vh] h-screen">
                    <div className="flex flex-col items-center justify-center w-full h-[30vh] md:h-full overflow-hidden shadow-lg rounded-md md:rounded-3xl shadow-white">
                        <Map flyTo={activeSection} />
                    </div>
                </div>
                {/* Right Column - Scrollable */}
                <div className="flex-1 md:pl-24 snap-y snap-mandatory snap-always">
                    {/* Section 1 */}
                    <Job title="Senior Full Stack Developer" company="Resource Modeling Solutions (remote)" setActiveSection={setActiveSection}>
                        <p>Content for section 1...</p>
                    </Job>
                    <HRule/>

                    <Job title="Research Engineer" company="CEREGE" setActiveSection={setActiveSection}>
                        <p>Content for section 1...</p>
                    </Job>
                    <HRule/>

                    <Job title="Project Manager Digital Innovation" company="Envisol" setActiveSection={setActiveSection}>
                        <p>Content for section 1...</p>
                    </Job>
                    <HRule/>

                    <Job title="Research Engineer" company="Seequent" setActiveSection={setActiveSection}>
                        <p>Content for section 1...</p>
                    </Job>
                    <HRule/>

                    {/* Add more sections as needed */}
                </div>
            </div>
        </Section>
    )
}
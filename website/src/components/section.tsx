import * as React from "react"
import { HRule } from "./hrule"

export const SectionHeader = ({ title, description }) => (
    <>
        <HRule />
        <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 text-zinc-400">
                {description}
            </p>
        </div>
        <HRule />
    </>
)

export const Section = ({ title, description, children }) => (
    <div className="mx-auto space-y-8 max-w-7xl lg:px-8">
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <SectionHeader title={title} description={description} />
            {children}
        </div>
    </div>
)
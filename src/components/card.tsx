import * as React from "react"

interface CardProps {
    title: string,
    description: string
}

export const CardGrid = ({cardsContent}) => (
    <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                <div className="grid grid-cols-1 gap-4">
                    {cardsContent
                        .filter((_, i) => i % 3 === 0)
                        .map((content) => (
                            <Card key={content.title} title={content.title} description={content.description} />
                        ))}
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {cardsContent
                        .filter((_, i) => i % 3 === 1)
                        .map((content) => (
                            <Card key={content.title} title={content.title} description={content.description} />
                        ))}
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {cardsContent
                        .filter((_, i) => i % 3 === 2)
                        .map((content) => (
                            <Card key={content.title} title={content.title} description={content.description} />
                        ))}
                </div>
            </div>
)

export const Card = ({ title, description }) => {

    return (
        <div
            className="relative overflow-hidden duration-700 border shadow-md rounded-xl hover:bg-zinc-500/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 shadow-zinc-600 hover:shadow-white"
        >
        <article className="p-4 md:p-8">
            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-zinc-100 font-display">
                {title}
            </h2>
            <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {description}
            </p>
        </article>
        </div>
    );
};
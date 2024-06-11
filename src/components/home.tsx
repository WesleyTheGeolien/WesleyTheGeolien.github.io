import * as React from "react"

export const Home = () => (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 p-4 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
        Wesley/
        <span className="text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-400 bg-clip-text w-fit sm:text-6xl md:text-8xl">
        Banfield
        </span>
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="tex10t-center my- animate-fade-in">
          <h2 className="text-lg text-zinc-500 ">
            Full Stack Geoscience Developer
          </h2>
        </div>
    </div>
  )
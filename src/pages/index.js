import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Home} from "../components/home"
import { Expertise } from "../components/expertise"
import { CV } from "../components/cv"
import { Presentations } from "../components/presentations"

import 'mapbox-gl/dist/mapbox-gl.css';
import { OpenSource } from "../components/openSource"

const IndexPage = () => (
  <div className="pb-48 bg-zinc-900">
    <Home/>
    <CV/>
    <Expertise/>
    <Presentations/>
    <OpenSource/>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

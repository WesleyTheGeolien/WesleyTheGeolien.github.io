/* eslint-disable max-len, no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { siteMetadata } from '../../gatsby-config'

export const Map = ({
  zoom,
  center,
  minZoom,
  maxZoom,
  flyTo
}) => {
  const { mapboxToken } = siteMetadata

  if (!mapboxToken) {
    console.error(
      'ERROR: Mapbox token is required in gatsby-config.js siteMetadata'
    )
  }


  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null)

  // this ref holds the map object once we have instantiated it, so that we
  // can use it in other hooks
  const mapRef = useRef(null)
  // construct the map within an effect that has no dependencies
  // this allows us to construct it only once at the time the
  // component is constructed.
  useEffect(() => {
    let mapCenter = center
    let mapZoom = zoom

    // // If bounds are available, use these to establish center and zoom when map first loads
    // if (bounds && bounds.length === 4) {
    //   const { center: boundsCenter, zoom: boundsZoom } = getCenterAndZoom(
    //     mapNode.current,
    //     bounds,
    //     padding
    //   )
    //   mapCenter = boundsCenter
    //   mapZoom = boundsZoom
    // }

    // Token must be set before constructing map
    mapboxgl.accessToken = mapboxToken

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: `mapbox://styles/mapbox/outdoors-v12`,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,
    })
    mapRef.current = map
    window.map = map // for easier debugging and querying via console

    // hook up map events here, such as click, mouseenter, mouseleave
    // e.g., map.on('click', (e) => {})

    // when this component is destroyed, remove the map
    return () => {
      map.remove()
    }
  }, [])

  if(mapRef.current && flyTo){
    mapRef.current.flyTo({"zoom": 9, ...flyTo})
  }

  // You can use other `useEffect` hooks to update the state of the map
  // based on incoming props.  Just beware that you might need to add additional
  // refs to share objects or state between hooks.

  return (
      <div ref={mapNode} className='w-full h-full'/>
  )
}

Map.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  bounds: PropTypes.arrayOf(PropTypes.number),
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  styles: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.number,
  sources: PropTypes.object,
  layers: PropTypes.arrayOf(PropTypes.object),
  directions: PropTypes.arrayOf(PropTypes.object),
  scale: PropTypes.arrayOf(PropTypes.object),
  styleSwitcher: PropTypes.arrayOf(PropTypes.object),
  layerSwitcher: PropTypes.arrayOf(PropTypes.object),
}

Map.defaultProps = {
  width: 'auto',
  height: '100%',
  center: [ 2.2138, 46.2276],
  zoom: 4,
  bounds: null,
  minZoom: 0,
  maxZoom: 24,
  padding: 0.1, // padding around bounds as a proportion
  sources: {},
  layers: [],
  directions: [],
  scale: [],
  styleSwitcher: [],
  layerSwitcher: [],
  flyTo: null,
}
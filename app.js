import React from "react"

import Header from "./components/header.js"
import MainContent from "./components/content.js"

import data from "./data.js"

export default function App() {
    const dataArrayConsolidatedElements = data.map(tripDataSet => {
        console.log(data.indexOf(tripDataSet))
        return <MainContent 
                    key={data.indexOf(tripDataSet)}
                    imageUrl={tripDataSet.imageUrl}
                    location={tripDataSet.location}
                    googleMapsUrl={tripDataSet.googleMapsUrl}
                    title={tripDataSet.title}
                    startDate={tripDataSet.startDate}
                    endDate={tripDataSet.endDate}
                    description={tripDataSet.description}
            />
    })
    return (
        <>
          <Header />
          {dataArrayConsolidatedElements}
        </> 
    )
}
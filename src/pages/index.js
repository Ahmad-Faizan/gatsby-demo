import React from "react"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple` }}>
        <Header headerText="This is a sample header using props"/>
        <h1>Hello Gatsby!</h1>
        <p>Is this Earth?</p>
        <img src="https://source.unsplash.com/random/1080x720" alt="" />
    </div>
)
import React from 'react';
import HomeSection from "../../Components/Home.sections/Home.components";
import {homeObjOne, homeObjTwo} from "./Data";
import "./Video.css";

const Home = () => {
    return (
        <>
            <HomeSection {...homeObjOne}/>
            <HomeSection {...homeObjTwo}/>
            <iframe
                className="centered-thing"
                src={`https://www.youtube.com/embed/aBlqQ9SF2e0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="EDIT Home Video"/>
        </>
    )

}

export default Home;
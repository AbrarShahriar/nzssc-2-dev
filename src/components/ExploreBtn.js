import React from 'react'
import './ExploreBtn.css'
import Fade from 'react-reveal/Fade'

function ExploreBtn() {
    return (
        <Fade bottom delay={500}>
            <div className="load_more">
                <span>Explore More</span>
                {/* <CircularProgress /> */}
            </div>
        </Fade>
    )
}

export default ExploreBtn

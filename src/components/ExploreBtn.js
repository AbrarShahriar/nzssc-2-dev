import React from 'react'
import './ExploreBtn.css'
import Fade from 'react-reveal/Fade'
import { KeyboardArrowRight } from '@material-ui/icons'

function ExploreBtn() {
    return (
        <Fade bottom delay={500}>
            <div className="load_more">
                <span>Explore More</span>
                <KeyboardArrowRight />
                {/* <CircularProgress /> */}
            </div>
        </Fade>
    )
}

export default ExploreBtn

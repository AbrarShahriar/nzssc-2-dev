import React from 'react'
import './ExploreBtn.css'
import Fade from 'react-reveal/Fade'
import { KeyboardArrowRight } from '@material-ui/icons'

function ExploreBtn({ title }) {
    return (
        <Fade bottom delay={500}>
            <div className="load_more">
                <span>{title ? title : `Explore`}</span>
                <KeyboardArrowRight />
                {/* <CircularProgress /> */}
            </div>
        </Fade>
    )
}

export default ExploreBtn

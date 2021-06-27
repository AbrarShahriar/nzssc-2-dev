import React from 'react'
import './ExploreBtn.css'
import Fade from 'react-reveal/Fade'
import { KeyboardArrowRight } from '@material-ui/icons'
import { Link } from "react-router-dom";

function ExploreBtn({ title, style, noIcon, to }) {
    return (
        <Fade  bottom delay={500}>
            <div style={style ? {...style} : {}} className='load_more'>
                <Link to={to}>{title ? title : `Explore`}</Link>
                {!noIcon && <KeyboardArrowRight />}
                {/* <CircularProgress /> */}
            </div>
        </Fade>
    )
}

export default React.memo(ExploreBtn)

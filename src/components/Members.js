import { Member } from './Member';
import React from 'react'
import './Members.css' 
import ss from '../images/ss.jpg'
import { useMediaQuery } from '@material-ui/core'

const members = [
    {
        name: 'Mehedi Hasan Shamim 1',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 2',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 3',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 4',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 5',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 6',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 7',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 8',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 9',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 10',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 11',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 12',
        title: 'Secretery'
    },
]

const rows = new Array(6)

const getNextTwo = n => {
    return [members[n-1], members[n]]
}

const getNextThree = n => {
    return [members[n-2], members[n-1], members[n]]
}

const oneRow = () => {
    
}

function Members() {

    const phone = useMediaQuery('(max-width: 600px)')

    return (
        <div className='members'>
            
            <div className="col">

                {phone
                ?
                <>
                    {members.map((member, i) => (
                        <Member 
                            key={i}
                            ss={ss} 
                            direction='right' 
                            name={member.name} 
                            title={member.title}
                        />
                    ))}
                </>
                :
                <>
                    {Array.from(new Array(4)).map((row, i) => {
                        let count = (3*i)+2
                        let threeMembers = getNextThree(count)
                        return (
                            <div key={i} className='row'>
                                {threeMembers.map((member, j) => {
                                    if(j/3 != 0) {
                                        return <Member ss={ss} direction='right' name={member.name} title={member.title} />
                                    } 
                                    return <Member ss={ss} direction='left' name={member.name} title={member.title} />
                                })}
                            </div>
                        )
                    })}
                </>
                }

                

                
                
            </div>
            <div className="col"></div>

        </div>
    )
}

export default React.memo(Members)

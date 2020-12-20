import React from 'react'
import BienenhausDetails from './BienenhausDetails';

const OverviewBienenhaus = ({bienenhausDetails}) => {
    console.log('BREAKPOINT Daten, die in bienenhausDetails ankommen von Dashboard Props')
    console.log(bienenhausDetails)
    return (
        <div className="project-list section">
            
            { bienenhausDetails && bienenhausDetails.map(bienenhausDetails => {
                
                return (
                    <BienenhausDetails bienenhausDetails={bienenhausDetails} key={bienenhausDetails.id} />
                )
            })}
        </div>
    )
}

export default OverviewBienenhaus
import React from 'react'
import SgCard from '../sg-card/SgCard'
import './SgCardGroup.css'

const sgCardGroup = (props) => {
    let sgCards = props.records.map((record, index) => {
        let cardBody;
        if(Array.isArray(record.body)){
            cardBody =  <ul>
                            {
                                record.body.map((element, i) => (
                                <li key={i}>{element}</li>
                                ))
                            }   
                        </ul>
        } else if (record.body){
            cardBody = <span>
                            {record.body}
                       </span>
        }
        
        return (
            <SgCard key={index} 
            title={record.title} 
            subTitle={record.subTitle}
            duration={record.duration}
            location={record.location}
            image={record.image}>
                {cardBody}
            </SgCard>
        )
    })

    return (
        <div className="sg-card-group-container">
            <h3>{props.title}</h3>
            <div className="sg-card-group shadow">
                {sgCards}
            </div>
        </div>
    )
}

export default sgCardGroup;
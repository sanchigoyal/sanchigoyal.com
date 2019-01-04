import React from 'react';
import Card from '../card/Card'
import { CardText } from 'reactstrap'
import './CardGroup.css'

const cardGroup = (props) => {
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
        cardBody = <CardText>
                        {record.body}
                   </CardText>
   }
    
   return (
        <Card key={index} 
                title={record.title} 
                subTitle={record.subTitle}
                duration={record.duration}
                location={record.location}
                image={record.image}>
                {cardBody}
        </Card>)
   })

return (
    <div className="_card-group-container">
        <h3>{props.title}</h3>
        <div className="_card-group shadow">
            {sgCards}
        </div>
    </div>)
};

export default cardGroup;
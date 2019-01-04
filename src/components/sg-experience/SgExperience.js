import React from 'react'
import qualcomm_logo from '../../resources/images/qualcomm-logo.png'
import usaa_logo from '../../resources/images/usaa-logo.png'
import cs_logo from '../../resources/images/creditsuisse-logo.png'
import SgCardGroup from '../sg-card-group/SgCardGroup'

const sgExperience = (props) => {
    let title = "Experience";
    let records = [
            {
                title: "Senior Engineer",
                subTitle: "Qualcomm Inc.",
                duration: "May 2018 - Dec 2018",
                location: "San Diego, California",
                image: qualcomm_logo,
                body: [
                    "Designed and developed Spring Boot based REST services for fitness goal calculation.",
                    "Implemented GIT integration with Jenkins build pipeline.",
                    "Re-factored legacy application to use Rabbit MQ for performance enhancement.",
                    "Implemented static document generation using Swagger API and Jenkins pipeline."
                ]
            },
            {
                title: "Senior Software Developer",
                subTitle: "United Services Automobile Association (Contractor-TCS)",
                duration: "July 2016 - May 2018",
                location: "San Antonio, Texas",
                image: usaa_logo,
                body: [
                    "Lead teams across geographic locations and reviewed their work.",
                    "Designed and developed REST web services using both JAX-RS and Spring Framework.",
                    "Worked closely with business partners to understand business requirements to design quality technical solutions that align with business and IT strategies.",
                    "Conducted various proof of concepts and worked with senior architects to develop recommendations that align with IT strategy."
                ]
            },
            {
                title: "Software Developer",
                subTitle: "Credit Suisse (Contractor-TCS)",
                duration: "July 2013 - June 2016",
                location: "Bangalore, India",
                image: cs_logo,
                body: [
                    "Developed new web services and enhanced existing services based on business requirements.",
                    "Supported team lead and senior members in identifying and fixing production defects.",
                    "Helped team members resolve build and other environmental issues."
                ]
            }
        ];
    
    return (
        <SgCardGroup title={title} records={records}></SgCardGroup>
    )
}

export default sgExperience;
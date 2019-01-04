import React from 'react'
import SgCardGroup from '../sg-card-group/SgCardGroup'

const sgProject = (props) => {
    let title = "Project";
    let records = [
        {
            title: "Motion Program - Fitness Goal Calculation",
            subTitle: "Qualcomm Life Inc.",
            duration: "May 2018 - Dec 2018",
            body: "A framework responsible for collecting data from sources like Fitbit, Apple Watch, Striiv & Garmin and calculating fitness goals for members."
        },
        {
            title: "Deposit Account Origination Orchestrator",
            subTitle: "United Services Automobile Association",
            duration: "July 2016 - May 2018",
            body: "A multi-threaded framework that orchestrates through various tasks (e.g. open account, fund account, order debit card etc) associated with deposit account origination."
        },
        {
            title: "Bank Middleware Inquiry Service",
            subTitle: "United Services Automobile Association",
            duration: "July 2016 - May 2018",
            body: "JAX-RS based inquiry services to support bank internal applications with user, account, cards and transaction information."
        } 
    ]
    return (
        <SgCardGroup title={title} records={records}></SgCardGroup>
    )
}

export default sgProject;
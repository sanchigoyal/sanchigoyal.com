import React from 'react'
import smu_logo from '../../resources/images/smu-logo.jpg'
import SgCardGroup from '../sg-card-group/SgCardGroup'

const sgEducation = (props) => {
    let title = "Education";
    let records = [
        {
            title: "Sikkim Manipal University of Health, Medical and Technological Sciences",
            subTitle: "B.Tech in Electronics and Communication. GPA:9.81/10",
            duration: "May 2009 - June 2013",
            location: "Sikkim, India",
            image: smu_logo
        }
    ]

    return (
        <SgCardGroup title={title} records={records}></SgCardGroup>
    )
}

export default sgEducation;
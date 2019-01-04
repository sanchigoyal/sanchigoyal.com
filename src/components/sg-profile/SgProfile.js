import React from 'react'
import SgJumbotron from '../sg-jumbotron/SgJumbotron'
import { Container } from 'reactstrap'
import SgExperience from '../sg-experience/SgExperience'
import SgEducation from '../sg-education/SgEducation'
import SgProject from '../sg-project/SgProject'
import SgSkills from '../sg-skills/SgSkills'

const sgProfile = () => {
    return (
        <div>
            <SgJumbotron></SgJumbotron>
            <Container>
                <SgExperience></SgExperience>
                <SgEducation></SgEducation>
                <SgProject></SgProject>
                <SgSkills></SgSkills>
            </Container>
        </div>
    )
}

export default sgProfile;
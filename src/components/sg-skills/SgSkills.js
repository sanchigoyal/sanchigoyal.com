import React from 'react'
import { Table } from 'reactstrap'
import SgCard from '../sg-card/SgCard'
import './SgSkills.css'

const sgSkills = () => {
    let title = "Skills";
    let records = [
        [
            "Presentation/UI Layer",
            "Bootstrap, JQuery, JSP, HTML, CSS and JavaScript"
        ],
        [
            "Business Layer",
            "J2EE, Spring MVC, SOAP, REST web services, OAuth 2.0, Swagger"
        ],
        [
            "Persistence/Data access Layer",
            "Hibernate, JPA, JDBC, Spring Data JPA, RabbitMQ, Redis Cache"
        ],
        [
            "Databases",
            "MySQL, Oracle, DB2, MongoDB"
        ],
        [
            "Build Tools",
            "Maven, Gradle, Jenkins"
        ],
        [
            "Version Control",
            "GIT, IBM Rational Team Concert(RTC), SVN"
        ],
        [
            "Tools",
            "Eclipse, Intellij, JIRA, Confluence, Putty, PLSQL Developer, Postman"
        ]
    ]

    let cardBody = <Table borderless size="sm">
                        <tbody>
                            {
                                records.map((row, i) => {
                                    return (
                                        <tr key={i}>
                                            {
                                                row.map((col, j) => {
                                                    return (
                                                        <td key={j}>
                                                            {col}
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                   </Table>

    return (
        <div className="sg-skills-container">
            <h3>{title}</h3>
            <div className="sg-skills shadow">
                <SgCard>
                    {cardBody}
                </SgCard>
            </div>
        </div>
    )
}

export default sgSkills;
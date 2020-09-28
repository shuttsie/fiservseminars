import React, { Fragment } from "react";
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import CustomSidenav from '../../components/SideNav'

const Articles = () => {
  return (
    <Fragment>
        <div className="next-steps my-5 content-wrapper">
            <CustomSidenav />
        <div className="main-content">
        <Grid columns={2} padded>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">User Defined Options Tips & Tricks</Card.Header>
                                <Card.Meta className="card-description">Welcome to this session User Defined Options Tips and Tricks. We will learn about the User Defined options available allowing you to improve your internal processes.</Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksGuide.pdf" target="_blank">User Defined Options Tips & Tricks Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksGuidePPT.pdf" target="_blank">User Defined Options Tips & Tricks PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loans Did You Know</Card.Header>
                                <Card.Meta className="card-description">Are you aware of all the shortcuts Precision has to offer? This is the session for you! Discussions will include basic tips and tricks, using the Payment/Payoff calculator, User Defined hints and more! Take advantage of this collaborative session.</Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoansDYKGuide.pdf" target="_blank">Loans Did You Know Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoansDYKPPT.pdf" target="_blank">Loans Did You Know PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Online Posting Features</Card.Header>
                                <Card.Meta className="card-description">Join Fiserv experts to discover paperless options available while using online posting options such as Keyboard input, Item Posting, and Keyboard Transfers. Learn the latest and greatest features available to you! Discover the benefits these options may hold.
                                </Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/OnlinePostingFeaturesGuide.pdf" target="_blank">Online Posting Features Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/OnlinePostingFeaturesPPT.pdf" target="_blank">Online Posting Features PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Parameters</Card.Header>
                                <Card.Meta className="card-description">Join us as we discuss the value behind key loan parameters. Topics include Type Codes, Fees/Memos, Automatic Loan Payments, and Closing parameters. Benefit from this collaborative session that encourages interaction. </Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanParametersGuide.pdf" target="_blank">Loan Parameters Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanParametersPPT.pdf" target="_blank">Loan Parameters PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Credit</Card.Header>
                                <Card.Meta className="card-description">Welcome to this course on Loan Credit. We will learn about the monitoring options available to manage and report customer credit effectively.
                                </Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanCreditGuide.pdf" target="_blank">Loan Credit Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanCreditPPT.pdf" target="_blank">Loan Credit PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Increase CDD-BSA Compliance With BPM</Card.Header>
                                <Card.Meta className="card-description">Knowing your consumer and business customers is more important than ever. By using Business Process Manager, or BPM, to drive the appropriate questions at the appropriate time, you will strengthen your customer due diligence systems. Within this session, we will discuss why placing items within BPM is beneficial to your institution, walk through the creation of new CDD/BSA fields, modifying existing items, and identify the ways the responses to those items can alert your front-line staff to make correct decisions with new customers and accounts.</Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IncreaseCDD-BSAComplianceWithBPMGuide.pdf" target="_blank">Increase CDD-BSA Compliance With BPM Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IncreaseCDD-BSAComplianceWithBPMPPT.pdf" target="_blank">Increase CDD-BSA Compliance With BPM PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Employ I-32 Forms Design To Set Your Institution Apart</Card.Header>
                                <Card.Meta className="card-description">Every interaction with your customers reflects your institution, who you are, your level of excellence, and your pledge to delivering value. The visual aspects of your documents illustrate a commitment to quality and increase your credibility in the eyes of your customers. We will illustrate how to move your custom forms from average to outstanding. Topics include the use of logo and title positioning, updating formatting elements, and other I-32 Forms Design features.
                                </Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignToSetyourInstitutionApartGuide.pdf" target="_blank">Employ I-32 Forms Design To Set Your Institution Apart Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignPPT.pdf" target="_blank">Employ I-32 Forms Design To Set Your Institution Apart PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Deposit Parameters</Card.Header>
                                <Card.Meta className="card-description">General knowledge of adding Precision Deposits.</Card.Meta>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/DepositParametersReviewPPT.pdf" target="_blank">Deposit Parameters PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </div>
    </Fragment>
  );
};

export default Articles
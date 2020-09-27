import React, { Fragment } from "react";
import { Grid, Header, Segment  } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import CustomSidenav from '../../components/SideNav'

const Videos = () => (
    <Fragment>
        <div className="next-steps my-5 content-wrapper">
        <CustomSidenav />
        <div className="main-content">
            <Grid columns={2} padded>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/Abiliti.mp4' width='450px' height='300px' controls='true'/>
                        <div className="video-description">
                           <h1>Abiliti</h1>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/ATM+Managed+Services+-+The+ATM+Channel+in+the+New+Normal.mp4' width='450px' height='300px' controls='true'/>
                        <div className="video-description">
                           <h1>ATM Managed Services</h1>
                            <p>Keep your ATM programs running smoothly. ATM Managed Services provides the opportunity to maximize operational efficiency, free staff to focus on more productive tasks, and helps improve performance, profitability and cardholder satisfaction.</p> 
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/Contactless+Payment+Cards.mp4' width='450px' height='300px' controls='true'/>
                            <div className="video-description">
                                <h1>Contactless Payment Cards</h1>
                                <p>The pandemic shifted consumer demands toward contactless payments – up by 11% from 2019, according to new data from Fiserv – and many financial institutions are getting in on the action. Contactless cards offer reduced fraud, greater engagement, and an opportunity to increase transaction and payment volume as consumers migrate from cash. Explore strategic opportunities for financial institutions and why contactless cards have become a priority.</p> 
                            </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/Cloud.mp4' width='450px' height='300px'  controls='true'/>
                            <div className="video-description">
                                <h1>Cloud</h1>
                                <h3>Understanding the Important Steps to Cloud Readiness and Cloud Migration</h3>
                                <p>There are many important steps and considerations for any financial institution researching a move to the cloud. Learn how Fiserv can help you evaluate your current environment and data readiness for the cloud then take you through each step to migrate workloads and applications to the cloud. Understand how cloud technology can improve operational speed and performance, increase workload scalability as well as environmental security and stability. </p> 
                                <ul>Key take-aways you'll get from this session:
                                    <li>The key steps for developing a cloud migration game plan</li>
                                    <li>The importance of a cloud readiness assessment</li>
                                    <li>Determining which cloud model is right for your organization</li>
                                    <li>Understanding what systems and applications to migrate to the cloud</li>
                                </ul>
                            </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/Demystifying+AI+What+Is+It+and+How+Will+It+Impact+the+Future.mp4' width='450px' height='300px' controls='true'/>
                            <div className="video-description">
                                <h1>Demystifying AI: What Is It and How Will It Impact the Future?</h1>
                                <p>Do consumers need to be experts at math, money and data to manage their personal finances well? No, but it may sometimes seem that way to those overwhelmed by finances. Join us to explore how artificial intelligence (AI) technology can help your financial institution deliver a more intuitive consumer experience that helps people live more financially healthy lives</p> 
                            </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </div>
    </Fragment>
    
)

export default Videos
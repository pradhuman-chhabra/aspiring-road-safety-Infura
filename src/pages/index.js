import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/component/layout'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useState } from 'react'


export default function Home() {
 
  return (
    <Layout>
      <Head>
        <title>Aspiring Road Safety</title>
        <meta name="description" content="Aspiring Road Safety" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
     
        <div className={styles.banner}>
          
            <div className={styles.heroSection}>
            <Container>
              <p> <strong>Ethereum, Near Blockchain services and IPFS, Filecoin decentralized storage <br /> and Web3 tools to make driving safer and monitored</strong> </p>
              
              {/* <Button href="#!" target="_blank">Any Button</Button> */}
          </Container>
            </div>
        </div>

        <Container>
          <h1 className='section-heading'>
          Vision
          </h1>

          <Row>
            <Col className='bot-marg' md="12" lg="6">
              <img src="/img/Mask group.png" style={{width:'100%'}} />
            </Col>
            <Col className='bot-marg' md="12" lg="6">
                  <h5>Our vision is to use blockchain technology to make driving safer and monitored for drivers, authorities, as well as other 3rd parties. With a mix of hardware and software powered by Ethereum blockchain services and IPFS/Filecoin decentralized storage, we will provide intelligent feedback about drive quality and help analyze past incidents, as well as predict future incidents
                  </h5>
            </Col>
          </Row>
          <Row>
          <Col className='bot-marg' md="12" lg="12">
          <h1 className='section-heading'>
          Tools
          </h1>
          <h4> 
          Infura, Truffle, MetaMask SDK, Ethereum, Linea, SAP UI5, Java, Ionic, Near, IPFS and Filecoin, Fluence, Chainlink, Covalent, flow, aws, space and time, verse, truflation Web3 ecosystem tools
          </h4>
          </Col>
          </Row>

          <Col className='bot-marg' md="12" lg="12">
          
          <h1 className='section-heading'>
          What it does?
          </h1>
          
          <img src="/img/Group 11.png" style={{width:'100%'}} alt="awards image" />
          
          </Col>


        </Container>


        <Container>
        <h1 className='section-heading'>
          Features
          </h1>
            <Col className='bot-marg' md="12" lg="12">
              <img src="/img/Group 12.png" style={{width:'100%'}} />
            </Col>

            <Col className='bot-marg' md="12" lg="12">

            <ul>
              <li><strong>Behavior Analysis:</strong> Vehicles become IoT devices which can connect to smartphones, take voice commands, change the user interface.</li>
              <li><strong>Incident Reporting / Collision Detection:</strong> Incident-based reporting &amp; Collision detection (even when a vehicle is parked) and video footage associated with it. Incident storage at SAP Hana and IPFS/Filecoin decentralized storage.</li>
              <li><strong>Live Capture:</strong> Video footage for abnormal driver behavior (complete view of the vehicle with 2 cameras – front and back).</li>
              <li><strong>Realtime Alert:</strong> Real-time alert and live streaming. Any abnormal behavior/activity can be displayed on the smart dashboard in the vehicle.</li>
              <li><strong>Black Box Vehicle Tracking:</strong> Built-in GPS technology useful in fleet management and tracking. Black box vehicle tracking to be able to pre-empt and diagnose breakdowns more quickly.</li>
              <li><strong>Gesture Control:</strong> Recognition area built in the central control to pick up your body movements, GAIT analysis.</li>
              <li><strong>Connected Road Safety Eco-system:</strong> The Cloud-Connected Vehicle Drives IoT Monetization. Real-time access to car availability and mobile connectivity enables better decisions making systems.</li>
            </ul>             
              
            </Col>
          </Container>
          
              
          
      </>
    </Layout>
  )
}

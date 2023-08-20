import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";


export default function testimonials() {
    return <Layout>
      <Container>
          
          <h1 className='section-heading'>
          Notable Achievements
          </h1>

          <ul>
            <li><a href="https://sites.google.com/view/aspiring-road-safety/home">Project Information</a></li>
            <li>Filecoin Microgrant Recipient 2023: <a href="https://github.com/ipfs/devgrants/">GitHub - ipfs/devgrants</a></li>
            <li>Eth Transport (Hall of Fame URL: Please search for Eth Transport at <a href="https://airtable.com/shr2xqq48PEHWzSBu/tblCwc1GeUbvwVrmU">Airtable - Winners Hall of Fame</a>)</li>
            <li>Dev Grant/Prize Winner at Tron Hackathon ($12.5K USD), Near MetaBuild Hackathon ($28K USD), and Polygon winner at Chainlink (1000 USDT), Ethglobal Hackathons (500 USDC), Conduent Finalist.</li>
            <li>Fluence Best Use Case Winner (1000 USDC), XMTP and Filecoin Pool Prize (1000 USD), Ledger Nano Prize at Moralis Filecoin Hackathon 2022 (please visit <a href="https://moralis.io/filecoin-hackathon/winners/">Moralis Filecoin Hackathon Winners</a>)</li>
            <li>Harmony Prize Winner at Encode Harmony Hackathon 2022 (<a href="https://medium.com/encode-club/encode-club-x-harmony-hackathon-prizewinners-and-summary-e088485c8af7">Encode Harmony Hackathon Winners</a>)</li>
            <li>Graduated from Startup Wise's Pre-accelerator Program. Sponsored by Near Foundation.</li>
          </ul>

      </Container>
          
    </Layout>
}
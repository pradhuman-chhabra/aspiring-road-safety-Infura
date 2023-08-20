import styles from "@/styles/footer.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PublicIcon from "@mui/icons-material/Public";
import { Col, Container, Row } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topDiv}>
        <Container>
          <Row>
            <Col sm="12" md="6" className="bot-marg">
              <img
                src="/img/seetasmalllogo.png"
                width="100px"
                alt="NSUT logo white"
                style={{ marginBottom: "10px" }}
              />
              <h6 className={styles.clgName}>Seeta Dev</h6>
              <p>
                <PublicIcon /> Building number 203, A2 block Janakpuri New Delhi
                110058
              </p>
              <p>
                <PhoneIcon /> 99580 54646
              </p>
              <p>
                <MailIcon /> dev@seeta.in
              </p>
              <p>
                <MailIcon /> manu@seeta.in
              </p>
            </Col>

            <Col sm="12" md="3" className="bot-marg"></Col>

            <Col sm="12" md="3" className="bot-marg">
              <h6>Quick Links</h6>
              <p>Discord ID: manusheel#3075</p>
              <p>Discord ID: deeptigupta#4290</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.bottomDiv}>
        <Container>Copyright © Seeta Dev. All Rights Reserved.</Container>
      </div>
    </div>
  );
}

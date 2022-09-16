import EmailIcon from "@mui/icons-material/Email";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Box } from "@mui/system";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import LogoCorebiz from "./Assets/logo-branco.png";
import LogoVtex from "./Assets/vtex-logo.png";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <Box className={styles.container}>
      <Container>
        <Box className={styles.footerWrapper}>
          <Box>
            <Heading fontWeight={700} fontSize={20} color="#ffffff">
              Localização
            </Heading>

            <Box className={styles.titleBorder}></Box>

            <Box className={styles.addressWrapper}>
              <Text color="#ffffff">Avenida Andrômeda, 2000. Bloco 6 e 8</Text>

              <Text color="#ffffff">Alphavile SP</Text>
            </Box>

            <Box className={styles.contactWrapper}>
              <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>

              <a href="tel:+551130901039">+55 11 3090 1039</a>
            </Box>
          </Box>

          <Box className={styles.contactsWrapper}>
            <a href="mailto:brasil@corebiz.ag">
              <Button fontWeight={600} fontSize={12}>
                <EmailIcon />
                Entre em contato
              </Button>
            </a>

            <a href="tel:+551130901039">
              <Button fontWeight={600} fontSize={12}>
                <HeadsetMicIcon />
                Fale com nosso consultor online
              </Button>
            </a>
          </Box>

          <Box className={styles.createWrapper}>
            <Box>
              <Text color="#ffffff">Created by</Text>

              <img className={styles.corebizLogo} src={LogoCorebiz} alt="" />
            </Box>

            <Box>
              <Text color="#ffffff">Powered by</Text>

              <img src={LogoVtex} alt="" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

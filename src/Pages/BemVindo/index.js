import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import useIsMobile from "../../helpers/useIsMobile";
import Logo from "./Assets/logo.png";
import styles from "./styles.module.scss";

export default function BemVindo() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Container>
        <img className={styles.logoImage} src={Logo} alt="Logo Corebiz" />

        <Heading fontSize={isMobile ? 22 : 32} color="#ffffff">
          Seja muito bem vindo a Corebiz.
        </Heading>

        <Box className={styles.buttonWrapper}>
          <Link to="/home">
            <Button backgroundColor="#FFFFFF" color="#000000" fontWeight={600} borderRadius={10} padding={10}>
              Entrar
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

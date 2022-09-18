import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import Text from "../../Components/Text";
import useIsMobile from "../../helpers/useIsMobile";
import styles from "./styles.module.scss";

export default function Espera() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <Box>
            <Heading fontSize={isMobile ? 26 : 32}>
              Essa sessão ainda não está disponível
            </Heading>
            <SentimentDissatisfiedOutlinedIcon />
          </Box>

          <Text>
            Nosso time de desenvolvedores está trabalhando para melhor
            atendê-lo(a).
          </Text>

          <Box className={styles.buttonWrapper}>
            <Link to="/home">
              <Button backgroundColor="#000000" color="#ffffff" borderRadius={10} padding={10}>
                Voltar
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

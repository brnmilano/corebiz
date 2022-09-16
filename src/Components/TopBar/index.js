import { Box } from "@mui/system";
import Container from "../Container";
import Input from "../Input";
import Text from "../Text";
import Logo from "./Assets/logo-escuro.png";
import styles from "./styles.module.scss";

export default function TopBar() {
  return (
    <Box className={styles.container}>
      <Container maxWidth="1270px">
        <Box className={styles.topWrapper}>
          <Box className={styles.imageWrapper}>
            <img className={styles.logoImage} src={Logo} alt="Logo Corebiz" />
          </Box>

          <Box>
            <Input type="text" name="Telefone" placeholder="O que está procurando?" />
          </Box>

          <Box>
            <Text>minha conta + carrinho</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

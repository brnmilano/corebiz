import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Container from "../Container";
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

          <Box className={styles.inputWrapper}>
            <TextField
              id="input-with-icon-textfield"
              label="O que está procurando?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>

          <Box className={styles.accontCartWrapper}>
            <Link to="/home">
              <Button type="text" color="#7A7A7A" fontWeight={400}>
                <PersonOutlineIcon className={styles.iconUser} />
                Minha conta
              </Button>
            </Link>

            <Link to="/home">
              <Button type="text" color="#7A7A7A" fontWeight={400}>
                <ShoppingCartCheckoutIcon />
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import useCart from "../../Contexts/Cart/useCart";
import useIsMobile from "../../helpers/useIsMobile";
import Container from "../Container";
import SideBar from "../SideBar";
import Logo from "./Assets/logo-escuro.png";
import styles from "./styles.module.scss";

export default function TopBar() {
  const { cart } = useCart();
  const isMobile = useIsMobile({ size: 768 });

  return (
    <>
      {isMobile ? (
        <Box className={styles.containerMobile}>
          <Box className={styles.topWrapperMobile}>
            <SideBar />

            <Box className={styles.imageWrapper}>
              <img className={styles.logoImage} src={Logo} alt="Logo Corebiz" />
            </Box>

            <Box className={styles.cartWrapperMobile}>
              <ShoppingCartCheckoutIcon style={{ marginRight: 15 }} />
              <Badge
                badgeContent={cart.length}
                color="primary"
                classes={{ colorPrimary: styles.bagdeColor }}
              />
            </Box>
          </Box>

          <TextField
            className={styles.inputWrapper}
            id="input-with-icon-textfield"
            label="O que está procurando?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className={styles.searchIcon} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
      ) : (
        <Box className={styles.container}>
          <Container maxWidth="1270px">
            <Box className={styles.topWrapper}>
              <Box className={styles.imageWrapper}>
                <img
                  className={styles.logoImage}
                  src={Logo}
                  alt="Logo Corebiz"
                />
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
                <Link to="/espera">
                  <Button type="text" color="#7A7A7A" fontWeight={400}>
                    <PersonOutlineIcon className={styles.iconUser} />
                    Minha conta
                  </Button>
                </Link>

                <ShoppingCartCheckoutIcon style={{ marginRight: 10 }} />
                <Badge
                  badgeContent={cart.length}
                  color="primary"
                  classes={{ colorPrimary: styles.bagdeColor }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}

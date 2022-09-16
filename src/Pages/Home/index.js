import { Box } from "@mui/system";
import * as React from "react";
import Container from "../../Components/Container";
import TopBar from "../../Components/TopBar";

export default function Home() {
  return (
    <Box>
      <TopBar />

      <Container>
        <Box>Aqui vai a home</Box>
      </Container>
    </Box>
  );
}

import { Box } from "@mui/system";
import * as React from "react";
import Footer from "../../Components/Footer";
import NewsLatter from "../../Components/NewsLatter";
import Slide from "../../Components/Slide";
import SlideItens from "../../Components/SlideItens";
import TopBar from "../../Components/TopBar";

export default function Home() {
  return (
    <Box>
      <TopBar />

      <Slide />

      <SlideItens />

      <NewsLatter />

      <Footer />
    </Box>
  );
}

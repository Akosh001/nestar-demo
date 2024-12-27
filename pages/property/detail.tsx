import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  console.log("PROPERTY COMPONENT - PAGES ROUTER");
  return <Container>Property Detail</Container>;
};

export default withLayoutBasic(PropertyDetail);

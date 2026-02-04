/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Card, Icon } from "@mui/material";
import welcome from "assets/images/welcome-profile.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `linear-gradient(135deg, #0075FF 0%, #00C6FF 100%), url(${welcome})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        borderRadius: "20px",
        height: "100%",
        minHeight: "400px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(42px)",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%", p: 3 }}>
        <VuiBox display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h2" fontWeight="bold" mb="10px">
            Welcome back!
          </VuiTypography>
          <VuiTypography color="white" variant="body1" fontWeight="regular">
            Nice to see you, Mark Johnson!
          </VuiTypography>
        </VuiBox>
        <VuiBox justifySelf="flex-end" mt="auto">
          <VuiTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              justifySelf: "flex-end",
              cursor: "pointer",
              padding: "10px 20px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              transition: "all 0.3s ease",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Tap to record
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default Welcome;

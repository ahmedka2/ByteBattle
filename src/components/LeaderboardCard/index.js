import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { Card } from "@mui/material";
import { IoTrophy, IoFlame, IoRibbon } from "react-icons/io5";

const LeaderboardCard = ({ rank, username, avatar, score, solvedChallenges, streak, isCurrentUser }) => {
  const getRankColor = (position) => {
    switch (position) {
      case 1: return "#FFD700"; // Gold
      case 2: return "#C0C0C0"; // Silver
      case 3: return "#CD7F32"; // Bronze
      default: return "#0075FF";
    }
  };

  const getRankIcon = (position) => {
    if (position <= 3) {
      return <IoTrophy size="24px" color={getRankColor(position)} />;
    }
    return null;
  };

  return (
    <Card
      sx={{
        background: isCurrentUser 
          ? "linear-gradient(127.09deg, rgba(0, 117, 255, 0.3) 19.41%, rgba(0, 198, 255, 0.2) 76.65%)"
          : "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        backdropFilter: "saturate(200%) blur(50px)",
        border: isCurrentUser ? "2px solid #0075FF" : "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "15px",
        marginBottom: "10px",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateX(5px)",
          boxShadow: "0px 5px 20px rgba(0, 117, 255, 0.2)",
        }
      }}
    >
      <VuiBox p={2} display="flex" alignItems="center" justifyContent="space-between">
        {/* Rank & User Info */}
        <VuiBox display="flex" alignItems="center" gap={2} flex={1}>
          {/* Rank */}
          <VuiBox 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            sx={{ minWidth: "50px" }}
          >
            {getRankIcon(rank) || (
              <VuiTypography variant="h4" color="white" fontWeight="bold">
                #{rank}
              </VuiTypography>
            )}
          </VuiBox>

          {/* Avatar */}
          <VuiBox
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0075FF, #00C6FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "white",
            }}
          >
            {username?.charAt(0).toUpperCase()}
          </VuiBox>

          {/* Username */}
          <VuiBox>
            <VuiTypography variant="h6" color="white" fontWeight="bold">
              {username}
              {isCurrentUser && (
                <VuiTypography 
                  component="span" 
                  variant="caption" 
                  color="info" 
                  fontWeight="bold"
                  sx={{ ml: 1 }}
                >
                  (You)
                </VuiTypography>
              )}
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              {solvedChallenges} challenges solved
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        {/* Stats */}
        <VuiBox display="flex" gap={3} alignItems="center">
          {/* Streak */}
          <VuiBox display="flex" alignItems="center" gap={1}>
            <IoFlame size="20px" color="#FF4500" />
            <VuiBox>
              <VuiTypography variant="button" color="white" fontWeight="bold">
                {streak}
              </VuiTypography>
              <VuiTypography variant="caption" color="text" display="block">
                day streak
              </VuiTypography>
            </VuiBox>
          </VuiBox>

          {/* Score */}
          <VuiBox 
            display="flex" 
            alignItems="center" 
            gap={1}
            sx={{
              background: "rgba(0, 117, 255, 0.2)",
              padding: "8px 16px",
              borderRadius: "10px",
              minWidth: "100px",
            }}
          >
            <IoRibbon size="20px" color="#0075FF" />
            <VuiBox>
              <VuiTypography variant="h5" color="white" fontWeight="bold">
                {score.toLocaleString()}
              </VuiTypography>
              <VuiTypography variant="caption" color="text">
                XP
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default LeaderboardCard;

import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";
import { Card } from "@mui/material";
import { IoTrophy, IoRibbon, IoShield, IoStar } from "react-icons/io5";

const AchievementBadge = ({ title, description, icon, unlocked, progress, maxProgress, rarity }) => {
  const getRarityColor = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case "common": return "#808080";
      case "rare": return "#0075FF";
      case "epic": return "#9D00FF";
      case "legendary": return "#FFD700";
      default: return "#808080";
    }
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "trophy": return <IoTrophy size="32px" />;
      case "ribbon": return <IoRibbon size="32px" />;
      case "shield": return <IoShield size="32px" />;
      case "star": return <IoStar size="32px" />;
      default: return <IoTrophy size="32px" />;
    }
  };

  return (
    <Card
      sx={{
        background: unlocked
          ? `linear-gradient(127.09deg, rgba(0, 117, 255, 0.3) 19.41%, rgba(0, 198, 255, 0.2) 76.65%)`
          : "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        backdropFilter: "saturate(200%) blur(50px)",
        border: `2px solid ${unlocked ? getRarityColor(rarity) : "rgba(255, 255, 255, 0.125)"}`,
        borderRadius: "15px",
        height: "100%",
        opacity: unlocked ? 1 : 0.6,
        transition: "all 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: unlocked ? `0px 10px 30px ${getRarityColor(rarity)}40` : "none",
        }
      }}
    >
      <VuiBox p={2.5} display="flex" flexDirection="column" alignItems="center" textAlign="center">
        {/* Icon */}
        <VuiBox
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: unlocked 
              ? `linear-gradient(135deg, ${getRarityColor(rarity)}, ${getRarityColor(rarity)}80)`
              : "linear-gradient(135deg, #333, #222)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            color: unlocked ? "white" : "#666",
            position: "relative",
          }}
        >
          {getIconComponent(icon)}
          {!unlocked && (
            <VuiBox
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.6)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🔒
            </VuiBox>
          )}
        </VuiBox>

        {/* Rarity Badge */}
        {unlocked && (
          <VuiBox mb={1}>
            <VuiBadge
              badgeContent={rarity}
              color="info"
              size="sm"
              sx={{
                background: getRarityColor(rarity),
                color: "white",
              }}
            />
          </VuiBox>
        )}

        {/* Title */}
        <VuiTypography 
          variant="h6" 
          color={unlocked ? "white" : "text"} 
          fontWeight="bold" 
          mb={1}
        >
          {title}
        </VuiTypography>

        {/* Description */}
        <VuiTypography variant="caption" color="text" mb={2}>
          {description}
        </VuiTypography>

        {/* Progress */}
        {!unlocked && progress !== undefined && maxProgress !== undefined && (
          <VuiBox width="100%">
            <VuiBox display="flex" justifyContent="space-between" mb={0.5}>
              <VuiTypography variant="caption" color="text">
                Progress
              </VuiTypography>
              <VuiTypography variant="caption" color="white" fontWeight="bold">
                {progress}/{maxProgress}
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                width: "100%",
                height: "6px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <VuiBox
                sx={{
                  width: `${(progress / maxProgress) * 100}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #0075FF, #00C6FF)",
                  transition: "width 0.3s",
                }}
              />
            </VuiBox>
          </VuiBox>
        )}

        {unlocked && (
          <VuiTypography variant="caption" color="success" fontWeight="bold">
            ✓ Unlocked
          </VuiTypography>
        )}
      </VuiBox>
    </Card>
  );
};

export default AchievementBadge;

import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import { Card } from "@mui/material";
import { IoCodeSlash, IoFlame, IoTrophy } from "react-icons/io5";

const ChallengeCard = ({ 
  title, 
  difficulty, 
  points, 
  category, 
  solvedCount,
  totalAttempts,
  description,
  tags = [],
  onStart
}) => {
  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case "easy": return "success";
      case "medium": return "warning";
      case "hard": return "error";
      default: return "info";
    }
  };

  return (
    <Card
      sx={{
        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        backdropFilter: "saturate(200%) blur(50px)",
        boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "20px",
        height: "100%",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 5px 15px rgba(0, 117, 255, 0.3)",
        }
      }}
    >
      <VuiBox p={3}>
        {/* Header */}
        <VuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <VuiBox>
            <VuiTypography variant="h5" color="white" fontWeight="bold" mb={1}>
              {title}
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              {category}
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              background: difficulty?.toLowerCase() === "easy" 
                ? "linear-gradient(135deg, #0a0, #060)" 
                : difficulty?.toLowerCase() === "medium"
                ? "linear-gradient(135deg, #fa0, #f60)"
                : "linear-gradient(135deg, #f00, #a00)",
              padding: "4px 12px",
              borderRadius: "8px",
            }}
          >
            <VuiTypography variant="caption" color="white" fontWeight="bold">
              {difficulty}
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        {/* Description */}
        <VuiBox mb={2}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        </VuiBox>

        {/* Tags */}
        {tags.length > 0 && (
          <VuiBox display="flex" gap={1} flexWrap="wrap" mb={2}>
            {tags.map((tag, index) => (
              <VuiBox
                key={index}
                sx={{
                  background: "rgba(0, 117, 255, 0.15)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 117, 255, 0.3)",
                }}
              >
                <VuiTypography variant="caption" color="info" fontWeight="medium">
                  {tag}
                </VuiTypography>
              </VuiBox>
            ))}
          </VuiBox>
        )}

        {/* Stats */}
        <VuiBox display="flex" gap={3} mb={3}>
          <VuiBox display="flex" alignItems="center" gap={1}>
            <IoTrophy size="18px" color="#FFD700" />
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {points} XP
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" gap={1}>
            <IoFlame size="18px" color="#FF4500" />
            <VuiTypography variant="button" color="text">
              {solvedCount}/{totalAttempts} solved
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        {/* Action Button */}
        <VuiButton 
          color="info" 
          fullWidth 
          onClick={onStart}
          sx={{ 
            background: "linear-gradient(135deg, #0075FF, #00C6FF)",
            "&:hover": {
              background: "linear-gradient(135deg, #0060DD, #00A8DD)",
            }
          }}
        >
          <IoCodeSlash size="18px" style={{ marginRight: "8px" }} />
          Start Challenge
        </VuiButton>
      </VuiBox>
    </Card>
  );
};

export default ChallengeCard;

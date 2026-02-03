import React, { useState } from "react";
import { Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import LeaderboardCard from "components/LeaderboardCard";
import { Card, Tabs, Tab } from "@mui/material";
import { IoTrophy, IoFlame, IoTime } from "react-icons/io5";

function Leaderboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, username: "CodeMaster2024", avatar: "", score: 15420, solvedChallenges: 342, streak: 45, isCurrentUser: false },
    { rank: 2, username: "AlgoWizard", avatar: "", score: 14850, solvedChallenges: 328, streak: 38, isCurrentUser: false },
    { rank: 3, username: "ByteNinja", avatar: "", score: 14100, solvedChallenges: 315, streak: 52, isCurrentUser: false },
    { rank: 4, username: "DevGuru", avatar: "", score: 13680, solvedChallenges: 298, streak: 28, isCurrentUser: false },
    { rank: 5, username: "You", avatar: "", score: 12950, solvedChallenges: 276, streak: 15, isCurrentUser: true },
    { rank: 6, username: "CodingKnight", avatar: "", score: 12430, solvedChallenges: 265, streak: 22, isCurrentUser: false },
    { rank: 7, username: "StackOverflow", avatar: "", score: 11890, solvedChallenges: 252, streak: 19, isCurrentUser: false },
    { rank: 8, username: "BugHunter", avatar: "", score: 11520, solvedChallenges: 241, streak: 33, isCurrentUser: false },
    { rank: 9, username: "JavaJedi", avatar: "", score: 11180, solvedChallenges: 235, streak: 14, isCurrentUser: false },
    { rank: 10, username: "PythonPro", avatar: "", score: 10890, solvedChallenges: 228, streak: 27, isCurrentUser: false },
  ];

  const weeklyData = [...leaderboardData].map((user, index) => ({
    ...user,
    rank: index + 1,
    score: Math.floor(user.score * 0.6),
  }));

  const monthlyData = [...leaderboardData];

  const getCurrentData = () => {
    switch (selectedTab) {
      case 0:
        return leaderboardData;
      case 1:
        return weeklyData;
      case 2:
        return monthlyData;
      default:
        return leaderboardData;
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Header */}
        <VuiBox mb={3} display="flex" justifyContent="space-between" alignItems="center">
          <VuiBox>
            <VuiTypography variant="h3" color="white" fontWeight="bold" display="flex" alignItems="center" gap={2}>
              <IoTrophy size="36px" color="#FFD700" />
              Global Leaderboard
            </VuiTypography>
            <VuiTypography variant="body2" color="text">
              Compete with developers worldwide
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        <Grid container spacing={3}>
          {/* Stats Cards */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    background: "linear-gradient(127.09deg, rgba(255, 215, 0, 0.3) 19.41%, rgba(255, 165, 0, 0.2) 76.65%)",
                    border: "2px solid #FFD700",
                  }}
                >
                  <VuiBox p={2} textAlign="center">
                    <IoTrophy size="32px" color="#FFD700" />
                    <VuiTypography variant="h3" color="white" fontWeight="bold" mt={1}>
                      #5
                    </VuiTypography>
                    <VuiTypography variant="button" color="text">
                      Your Rank
                    </VuiTypography>
                  </VuiBox>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    background: "linear-gradient(127.09deg, rgba(0, 117, 255, 0.3) 19.41%, rgba(0, 198, 255, 0.2) 76.65%)",
                    border: "2px solid #0075FF",
                  }}
                >
                  <VuiBox p={2} textAlign="center">
                    <IoTrophy size="32px" color="#0075FF" />
                    <VuiTypography variant="h3" color="white" fontWeight="bold" mt={1}>
                      12,950
                    </VuiTypography>
                    <VuiTypography variant="button" color="text">
                      Total XP
                    </VuiTypography>
                  </VuiBox>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    background: "linear-gradient(127.09deg, rgba(255, 69, 0, 0.3) 19.41%, rgba(255, 140, 0, 0.2) 76.65%)",
                    border: "2px solid #FF4500",
                  }}
                >
                  <VuiBox p={2} textAlign="center">
                    <IoFlame size="32px" color="#FF4500" />
                    <VuiTypography variant="h3" color="white" fontWeight="bold" mt={1}>
                      15
                    </VuiTypography>
                    <VuiTypography variant="button" color="text">
                      Day Streak
                    </VuiTypography>
                  </VuiBox>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Leaderboard */}
          <Grid item xs={12}>
            <Card
              sx={{
                background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
              }}
            >
              <VuiBox p={3}>
                {/* Tabs */}
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  sx={{
                    marginBottom: "24px",
                    "& .MuiTab-root": {
                      color: "rgba(255, 255, 255, 0.6)",
                      fontWeight: "bold",
                    },
                    "& .Mui-selected": {
                      color: "#0075FF !important",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#0075FF",
                    },
                  }}
                >
                  <Tab label="All Time" icon={<IoTime size="18px" />} iconPosition="start" />
                  <Tab label="This Week" icon={<IoTime size="18px" />} iconPosition="start" />
                  <Tab label="This Month" icon={<IoTime size="18px" />} iconPosition="start" />
                </Tabs>

                {/* Leaderboard List */}
                <VuiBox>
                  {getCurrentData().map((user) => (
                    <LeaderboardCard
                      key={user.rank}
                      rank={user.rank}
                      username={user.username}
                      avatar={user.avatar}
                      score={user.score}
                      solvedChallenges={user.solvedChallenges}
                      streak={user.streak}
                      isCurrentUser={user.isCurrentUser}
                    />
                  ))}
                </VuiBox>

                {/* Load More */}
                <VuiBox textAlign="center" mt={3}>
                  <VuiButton color="info" variant="outlined">
                    Load More
                  </VuiButton>
                </VuiBox>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Leaderboard;

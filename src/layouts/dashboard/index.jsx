// ByteBattle Dashboard - Main Overview
// @mui material components
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Custom components
import ChallengeCard from "components/ChallengeCard";
import AchievementBadge from "components/AchievementBadge";

// React icons
import { IoTrophy, IoFlame, IoCodeSlash, IoRibbon, IoTime, IoCheckmarkCircle } from "react-icons/io5";

function Dashboard() {
  // Mock user data
  const userStats = {
    rank: 5,
    totalXP: 12950,
    streak: 15,
    challengesSolved: 276,
    accuracy: 87,
    activeBattles: 2,
  };

  // Recent challenges
  const recentChallenges = [
    {
      id: 1,
      title: "Array Rotation",
      difficulty: "Easy",
      points: 100,
      category: "Arrays",
      solvedCount: 1500,
      totalAttempts: 3000,
      description: "Rotate an array by k positions",
      tags: ["Arrays", "Math"],
    },
    {
      id: 2,
      title: "Binary Search Tree",
      difficulty: "Medium",
      points: 250,
      category: "Trees",
      solvedCount: 800,
      totalAttempts: 2000,
      description: "Implement BST operations",
      tags: ["Trees", "BST"],
    },
  ];

  // Recent achievements
  const achievements = [
    {
      title: "First Blood",
      description: "Solve your first challenge",
      icon: "trophy",
      unlocked: true,
      rarity: "common",
    },
    {
      title: "Speed Demon",
      description: "Solve 10 challenges in under 5 minutes",
      icon: "ribbon",
      unlocked: true,
      rarity: "rare",
    },
    {
      title: "Perfectionist",
      description: "Get 100% accuracy on 50 challenges",
      icon: "star",
      unlocked: false,
      progress: 32,
      maxProgress: 50,
      rarity: "epic",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Welcome Section */}
        <VuiBox mb={3}>
          <VuiTypography variant="h3" color="white" fontWeight="bold">
            Welcome back, CodeWarrior! 👋
          </VuiTypography>
          <VuiTypography variant="body2" color="text">
            Ready to sharpen your coding skills today?
          </VuiTypography>
        </VuiBox>

        {/* Stats Cards */}
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Global Rank", fontWeight: "regular" }}
                count={`#${userStats.rank}`}
                percentage={{ color: "success", text: "Top 1%" }}
                icon={{ color: "info", component: <IoTrophy size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total XP" }}
                count={userStats.totalXP.toLocaleString()}
                percentage={{ color: "success", text: "+420 today" }}
                icon={{ color: "info", component: <IoRibbon size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Day Streak" }}
                count={userStats.streak}
                percentage={{ color: "warning", text: "Keep it up!" }}
                icon={{ color: "info", component: <IoFlame size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Challenges Solved" }}
                count={userStats.challengesSolved}
                percentage={{ color: "success", text: `${userStats.accuracy}% accuracy` }}
                icon={{ color: "info", component: <IoCodeSlash size="22px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {/* Active Battles Card */}
              <Grid item xs={12}>
                <Card
                  sx={{
                    background: "linear-gradient(127.09deg, rgba(255, 69, 0, 0.2) 19.41%, rgba(255, 140, 0, 0.1) 76.65%)",
                    border: "2px solid #FF4500",
                  }}
                >
                  <VuiBox p={3}>
                    <VuiBox display="flex" alignItems="center" gap={2} mb={2}>
                      <IoFlame size="28px" color="#FF4500" />
                      <VuiTypography variant="h5" color="white" fontWeight="bold">
                        Active Battles ({userStats.activeBattles})
                      </VuiTypography>
                    </VuiBox>
                    <VuiTypography variant="button" color="text" mb={2} display="block">
                      You have {userStats.activeBattles} ongoing battles. Complete them to earn bonus XP!
                    </VuiTypography>
                    <VuiBox display="flex" gap={2} flexWrap="wrap">
                      <VuiBox
                        sx={{
                          flex: 1,
                          minWidth: "200px",
                          background: "rgba(255, 255, 255, 0.05)",
                          padding: "12px",
                          borderRadius: "10px",
                        }}
                      >
                        <VuiTypography variant="button" color="text">
                          1v1 vs CodeMaster
                        </VuiTypography>
                        <VuiBox display="flex" alignItems="center" gap={1} mt={1}>
                          <IoTime size="16px" color="#FF4500" />
                          <VuiTypography variant="caption" color="white" fontWeight="bold">
                            5:23 remaining
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                      <VuiBox
                        sx={{
                          flex: 1,
                          minWidth: "200px",
                          background: "rgba(255, 255, 255, 0.05)",
                          padding: "12px",
                          borderRadius: "10px",
                        }}
                      >
                        <VuiTypography variant="button" color="text">
                          Team Battle
                        </VuiTypography>
                        <VuiBox display="flex" alignItems="center" gap={1} mt={1}>
                          <IoTime size="16px" color="#FF4500" />
                          <VuiTypography variant="caption" color="white" fontWeight="bold">
                            12:45 remaining
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                    </VuiBox>
                  </VuiBox>
                </Card>
              </Grid>

              {/* Skill Progress */}
              <Grid item xs={12}>
                <Card sx={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
                  <VuiBox p={3}>
                    <VuiTypography variant="h5" color="white" fontWeight="bold" mb={3}>
                      Skill Progress
                    </VuiTypography>
                    <VuiBox mb={3}>
                      <VuiBox display="flex" justifyContent="space-between" mb={1}>
                        <VuiTypography variant="button" color="white">Arrays & Strings</VuiTypography>
                        <VuiTypography variant="button" color="white" fontWeight="bold">85%</VuiTypography>
                      </VuiBox>
                      <VuiProgress value={85} color="info" sx={{ height: "6px" }} />
                    </VuiBox>
                    <VuiBox mb={3}>
                      <VuiBox display="flex" justifyContent="space-between" mb={1}>
                        <VuiTypography variant="button" color="white">Trees & Graphs</VuiTypography>
                        <VuiTypography variant="button" color="white" fontWeight="bold">72%</VuiTypography>
                      </VuiBox>
                      <VuiProgress value={72} color="success" sx={{ height: "6px" }} />
                    </VuiBox>
                    <VuiBox mb={3}>
                      <VuiBox display="flex" justifyContent="space-between" mb={1}>
                        <VuiTypography variant="button" color="white">Dynamic Programming</VuiTypography>
                        <VuiTypography variant="button" color="white" fontWeight="bold">58%</VuiTypography>
                      </VuiBox>
                      <VuiProgress value={58} color="warning" sx={{ height: "6px" }} />
                    </VuiBox>
                    <VuiBox>
                      <VuiBox display="flex" justifyContent="space-between" mb={1}>
                        <VuiTypography variant="button" color="white">Algorithms</VuiTypography>
                        <VuiTypography variant="button" color="white" fontWeight="bold">91%</VuiTypography>
                      </VuiBox>
                      <VuiProgress value={91} color="info" sx={{ height: "6px" }} />
                    </VuiBox>
                  </VuiBox>
                </Card>
              </Grid>

              {/* Recommended Challenges */}
              <Grid item xs={12}>
                <VuiTypography variant="h5" color="white" fontWeight="bold" mb={2}>
                  Recommended for You
                </VuiTypography>
                <Grid container spacing={3}>
                  {recentChallenges.map((challenge) => (
                    <Grid item xs={12} md={6} key={challenge.id}>
                      <ChallengeCard
                        title={challenge.title}
                        difficulty={challenge.difficulty}
                        points={challenge.points}
                        category={challenge.category}
                        solvedCount={challenge.solvedCount}
                        totalAttempts={challenge.totalAttempts}
                        description={challenge.description}
                        tags={challenge.tags}
                        onStart={() => console.log("Start challenge:", challenge.id)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              {/* Achievements */}
              <Grid item xs={12}>
                <Card sx={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
                  <VuiBox p={3}>
                    <VuiTypography variant="h5" color="white" fontWeight="bold" mb={3}>
                      Recent Achievements
                    </VuiTypography>
                    <Grid container spacing={2}>
                      {achievements.map((achievement, index) => (
                        <Grid item xs={12} key={index}>
                          <AchievementBadge
                            title={achievement.title}
                            description={achievement.description}
                            icon={achievement.icon}
                            unlocked={achievement.unlocked}
                            progress={achievement.progress}
                            maxProgress={achievement.maxProgress}
                            rarity={achievement.rarity}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </VuiBox>
                </Card>
              </Grid>

              {/* Daily Goal */}
              <Grid item xs={12}>
                <Card sx={{ background: "linear-gradient(127.09deg, rgba(0, 117, 255, 0.3) 19.41%, rgba(0, 198, 255, 0.2) 76.65%)", border: "2px solid #0075FF" }}>
                  <VuiBox p={3}>
                    <VuiBox display="flex" alignItems="center" gap={2} mb={2}>
                      <IoCheckmarkCircle size="28px" color="#0075FF" />
                      <VuiTypography variant="h5" color="white" fontWeight="bold">
                        Daily Goal
                      </VuiTypography>
                    </VuiBox>
                    <VuiTypography variant="button" color="text" mb={2} display="block">
                      Complete 3 challenges today
                    </VuiTypography>
                    <VuiBox mb={2}>
                      <VuiBox display="flex" justifyContent="space-between" mb={1}>
                        <VuiTypography variant="caption" color="text">Progress</VuiTypography>
                        <VuiTypography variant="caption" color="white" fontWeight="bold">2/3 completed</VuiTypography>
                      </VuiBox>
                      <VuiProgress value={66} color="info" sx={{ height: "8px" }} />
                    </VuiBox>
                    <VuiTypography variant="caption" color="success" fontWeight="bold">
                      🎁 Reward: 500 Bonus XP
                    </VuiTypography>
                  </VuiBox>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

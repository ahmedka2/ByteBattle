import React, { useState, useEffect } from "react";
import { Grid, Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { IoGameController, IoFlash, IoPeople, IoTime, IoTrophy } from "react-icons/io5";

function Battles() {
  const [activeTab, setActiveTab] = useState("1v1"); // "1v1", "team", "tournament"
  const [searchingOpponent, setSearchingOpponent] = useState(false);
  const [countdown, setCountdown] = useState(null);

  // Mock active battles data
  const activeBattles = [
    {
      id: 1,
      mode: "1v1",
      opponent: "CodeMaster2024",
      timeLeft: "5:23",
      yourProgress: 2,
      opponentProgress: 3,
      totalChallenges: 5,
    },
    {
      id: 2,
      mode: "Team",
      teamName: "Code Warriors",
      opponentTeam: "Byte Crushers",
      timeLeft: "12:45",
      yourScore: 450,
      opponentScore: 380,
    },
  ];

  const upcomingBattles = [
    {
      id: 3,
      mode: "Tournament",
      name: "Weekend Code Clash",
      startTime: "2 hours",
      participants: 128,
      prize: "5000 XP",
    },
  ];

  const handleFindOpponent = () => {
    setSearchingOpponent(true);
    // Simulate finding opponent
    setTimeout(() => {
      setSearchingOpponent(false);
      setCountdown(3);
    }, 2000);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      // Start battle
      console.log("Starting battle!");
      setCountdown(null);
    }
  }, [countdown]);

  const BattleModeCard = ({ icon, title, description, players, onStart }) => (
    <Card
      sx={{
        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "20px",
        height: "100%",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 10px 30px rgba(0, 117, 255, 0.3)",
          border: "1px solid rgba(0, 117, 255, 0.5)",
        }
      }}
    >
      <VuiBox p={3} textAlign="center">
        <VuiBox
          sx={{
            width: "80px",
            height: "80px",
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0075FF, #00C6FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </VuiBox>
        <VuiTypography variant="h4" color="white" fontWeight="bold" mb={1}>
          {title}
        </VuiTypography>
        <VuiTypography variant="button" color="text" mb={2} display="block">
          {description}
        </VuiTypography>
        <VuiBox display="flex" justifyContent="center" alignItems="center" gap={1} mb={3}>
          <IoPeople size="18px" color="#0075FF" />
          <VuiTypography variant="caption" color="white">
            {players}
          </VuiTypography>
        </VuiBox>
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
          Start Battle
        </VuiButton>
      </VuiBox>
    </Card>
  );

  const ActiveBattleCard = ({ battle }) => (
    <Card
      sx={{
        background: "linear-gradient(127.09deg, rgba(255, 69, 0, 0.2) 19.41%, rgba(255, 140, 0, 0.1) 76.65%)",
        border: "2px solid #FF4500",
        borderRadius: "15px",
        marginBottom: "16px",
      }}
    >
      <VuiBox p={3}>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <VuiBox>
            <VuiTypography variant="h5" color="white" fontWeight="bold">
              {battle.mode} Battle
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              vs {battle.opponent || battle.opponentTeam}
            </VuiTypography>
          </VuiBox>
          <VuiBox textAlign="right">
            <VuiBox display="flex" alignItems="center" gap={1} justifyContent="flex-end">
              <IoTime size="20px" color="#FF4500" />
              <VuiTypography variant="h4" color="white" fontWeight="bold">
                {battle.timeLeft}
              </VuiTypography>
            </VuiBox>
            <VuiTypography variant="caption" color="text">
              Time Remaining
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        {battle.mode === "1v1" && (
          <VuiBox>
            <VuiBox display="flex" justifyContent="space-between" mb={1}>
              <VuiTypography variant="button" color="info">
                You: {battle.yourProgress}/{battle.totalChallenges}
              </VuiTypography>
              <VuiTypography variant="button" color="error">
                Opponent: {battle.opponentProgress}/{battle.totalChallenges}
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                width: "100%",
                height: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <VuiBox
                sx={{
                  width: `${(battle.yourProgress / battle.totalChallenges) * 100}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #0075FF, #00C6FF)",
                }}
              />
            </VuiBox>
          </VuiBox>
        )}

        <VuiBox mt={2}>
          <VuiButton color="info" fullWidth>
            Continue Battle
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </Card>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Header */}
        <VuiBox mb={3}>
          <VuiTypography variant="h3" color="white" fontWeight="bold" display="flex" alignItems="center" gap={2}>
            <IoGameController size="36px" color="#FF4500" />
            Battle Arena
          </VuiTypography>
          <VuiTypography variant="body2" color="text">
            Challenge other developers in real-time coding battles
          </VuiTypography>
        </VuiBox>

        {/* Active Battles */}
        {activeBattles.length > 0 && (
          <VuiBox mb={3}>
            <VuiTypography variant="h5" color="white" fontWeight="bold" mb={2}>
              Active Battles
            </VuiTypography>
            <Grid container spacing={3}>
              {activeBattles.map((battle) => (
                <Grid item xs={12} md={6} key={battle.id}>
                  <ActiveBattleCard battle={battle} />
                </Grid>
              ))}
            </Grid>
          </VuiBox>
        )}

        {/* Battle Modes */}
        <VuiBox mb={3}>
          <VuiTypography variant="h5" color="white" fontWeight="bold" mb={2}>
            Choose Battle Mode
          </VuiTypography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <BattleModeCard
                icon={<IoGameController size="40px" color="white" />}
                title="1v1 Duel"
                description="Face off against a single opponent in a timed coding challenge"
                players="2 Players"
                onStart={handleFindOpponent}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BattleModeCard
                icon={<IoPeople size="40px" color="white" />}
                title="Team Battle"
                description="Collaborate with your team to defeat opponents"
                players="2-4 Players per team"
                onStart={() => console.log("Team battle")}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BattleModeCard
                icon={<IoTrophy size="40px" color="white" />}
                title="Tournament"
                description="Compete in elimination rounds to become the champion"
                players="Up to 128 Players"
                onStart={() => console.log("Tournament")}
              />
            </Grid>
          </Grid>
        </VuiBox>

        {/* Searching Opponent Modal */}
        {searchingOpponent && (
          <Card
            sx={{
              background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.98) 19.41%, rgba(10, 14, 35, 0.95) 76.65%)",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              width: "400px",
              border: "2px solid #0075FF",
            }}
          >
            <VuiBox p={4} textAlign="center">
              <IoFlash size="60px" color="#0075FF" style={{ animation: "pulse 1s infinite" }} />
              <VuiTypography variant="h4" color="white" fontWeight="bold" mt={2}>
                Finding Opponent...
              </VuiTypography>
              <VuiTypography variant="button" color="text" mt={1}>
                Matching you with a worthy adversary
              </VuiTypography>
            </VuiBox>
          </Card>
        )}

        {/* Countdown Modal */}
        {countdown !== null && (
          <Card
            sx={{
              background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.98) 19.41%, rgba(10, 14, 35, 0.95) 76.65%)",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              width: "400px",
              border: "2px solid #00FF00",
            }}
          >
            <VuiBox p={4} textAlign="center">
              <VuiTypography variant="h1" color="success" fontWeight="bold">
                {countdown}
              </VuiTypography>
              <VuiTypography variant="h5" color="white" fontWeight="bold" mt={2}>
                Battle Starting...
              </VuiTypography>
            </VuiBox>
          </Card>
        )}

        {/* Upcoming Tournaments */}
        {upcomingBattles.length > 0 && (
          <VuiBox>
            <VuiTypography variant="h5" color="white" fontWeight="bold" mb={2}>
              Upcoming Tournaments
            </VuiTypography>
            <Grid container spacing={3}>
              {upcomingBattles.map((battle) => (
                <Grid item xs={12} md={6} key={battle.id}>
                  <Card
                    sx={{
                      background: "linear-gradient(127.09deg, rgba(255, 215, 0, 0.2) 19.41%, rgba(255, 165, 0, 0.1) 76.65%)",
                      border: "2px solid #FFD700",
                      borderRadius: "15px",
                    }}
                  >
                    <VuiBox p={3}>
                      <VuiBox display="flex" alignItems="center" gap={2} mb={2}>
                        <IoTrophy size="32px" color="#FFD700" />
                        <VuiBox>
                          <VuiTypography variant="h5" color="white" fontWeight="bold">
                            {battle.name}
                          </VuiTypography>
                          <VuiTypography variant="caption" color="text">
                            Starts in {battle.startTime}
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                      <VuiBox display="flex" justifyContent="space-between" mb={2}>
                        <VuiBox>
                          <VuiTypography variant="caption" color="text">
                            Participants
                          </VuiTypography>
                          <VuiTypography variant="h6" color="white" fontWeight="bold">
                            {battle.participants}
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox textAlign="right">
                          <VuiTypography variant="caption" color="text">
                            Prize Pool
                          </VuiTypography>
                          <VuiTypography variant="h6" color="warning" fontWeight="bold">
                            {battle.prize}
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                      <VuiButton color="warning" fullWidth>
                        Register Now
                      </VuiButton>
                    </VuiBox>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </VuiBox>
        )}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Battles;

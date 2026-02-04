import React, { useState } from "react";
import { Grid, styled } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ChallengeCard from "components/ChallengeCard";
import { IoSearchSharp, IoFilterSharp } from "react-icons/io5";
import { Card, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// Styled Select with dark theme
const DarkSelect = styled(Select)({
  color: "white !important",
  height: "50px",
  borderRadius: "12px",
  backgroundColor: "#0e1a3a !important",
  cursor: "pointer",
  width: "100%",
  pointerEvents: "auto !important",
  "& .MuiSelect-select": {
    backgroundColor: "transparent !important",
    padding: "14px 14px",
    color: "white !important",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    pointerEvents: "auto !important",
  },
  "& .MuiOutlinedInput-input": {
    backgroundColor: "transparent !important",
    color: "white !important",
    cursor: "pointer",
    padding: "14px 14px",
    pointerEvents: "auto !important",
  },
  "& .MuiInputBase-input": {
    color: "white !important",
    cursor: "pointer",
    pointerEvents: "auto !important",
  },
  "& .MuiOutlinedInput-root": {
    pointerEvents: "auto !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    pointerEvents: "none",
  },
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 117, 255, 0.5)",
  },
  "& .MuiSvgIcon-root": {
    color: "white !important",
    cursor: "pointer",
    pointerEvents: "auto !important",
  },
  "& fieldset": {
    borderColor: "rgba(255, 255, 255, 0.1) !important",
    pointerEvents: "none",
  },
  "& legend": {
    pointerEvents: "none",
  },
});

const darkMenuProps = {
  PaperProps: {
    sx: {
      bgcolor: "#0a0e23",
      backgroundImage: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.98) 19.41%, rgba(10, 14, 35, 0.98) 76.65%)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      mt: 1,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
      "& .MuiMenuItem-root": {
        color: "white !important",
        padding: "12px 16px",
        "&:hover": {
          bgcolor: "rgba(0, 117, 255, 0.15)",
          color: "white !important",
        },
        "&.Mui-selected": {
          bgcolor: "rgba(0, 117, 255, 0.25) !important",
          color: "white !important",
          fontWeight: 500,
          "&:hover": {
            bgcolor: "rgba(0, 117, 255, 0.35) !important",
            color: "white !important",
          },
        },
      },
    },
  },
};

function Challenges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Mock challenges data - in production, this would come from API
  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      points: 100,
      category: "Arrays",
      solvedCount: 1234,
      totalAttempts: 5000,
      description: "Find two numbers in an array that add up to a target sum.",
      tags: ["Hash Table", "Arrays", "Math"],
    },
    {
      id: 2,
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      points: 250,
      category: "Trees",
      solvedCount: 856,
      totalAttempts: 3200,
      description: "Implement inorder, preorder, and postorder traversal of a binary tree.",
      tags: ["Trees", "DFS", "Recursion"],
    },
    {
      id: 3,
      title: "Dynamic Programming: Knapsack",
      difficulty: "Hard",
      points: 500,
      category: "Dynamic Programming",
      solvedCount: 432,
      totalAttempts: 2100,
      description: "Solve the classic 0/1 knapsack problem using dynamic programming.",
      tags: ["DP", "Optimization", "Algorithms"],
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      points: 100,
      category: "Stack",
      solvedCount: 2100,
      totalAttempts: 4500,
      description: "Check if a string of parentheses is valid using a stack.",
      tags: ["Stack", "String", "Parsing"],
    },
    {
      id: 5,
      title: "Merge Intervals",
      difficulty: "Medium",
      points: 250,
      category: "Arrays",
      solvedCount: 945,
      totalAttempts: 2800,
      description: "Merge overlapping intervals in an array of intervals.",
      tags: ["Arrays", "Sorting", "Intervals"],
    },
    {
      id: 6,
      title: "Graph Shortest Path",
      difficulty: "Hard",
      points: 500,
      category: "Graphs",
      solvedCount: 512,
      totalAttempts: 1900,
      description: "Find the shortest path in a weighted graph using Dijkstra's algorithm.",
      tags: ["Graphs", "Dijkstra", "Shortest Path"],
    },
  ];

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "all" || challenge.difficulty.toLowerCase() === difficultyFilter;
    const matchesCategory = categoryFilter === "all" || challenge.category === categoryFilter;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const handleStartChallenge = (challengeId) => {
    console.log("Starting challenge:", challengeId);
    // Navigate to challenge page
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Header */}
        <VuiBox mb={4}>
          <VuiTypography variant="h2" color="white" fontWeight="bold" mb={1}>
            Coding Challenges
          </VuiTypography>
          <VuiTypography variant="body1" color="text" fontWeight="regular">
            Choose a challenge and test your coding skills
          </VuiTypography>
        </VuiBox>

        {/* Filters */}
        <Card
          sx={{
            background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
            backdropFilter: "blur(42px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            marginBottom: "30px",
            borderRadius: "20px",
            pointerEvents: "auto",
          }}
        >
          <VuiBox p={3} sx={{ pointerEvents: "auto" }}>
            <Grid container spacing={2} alignItems="center" sx={{ pointerEvents: "auto" }}>
              {/* Search */}
              <Grid item xs={12} md={5} sx={{ pointerEvents: "auto" }}>
                <VuiBox display="flex" alignItems="center" sx={{ position: "relative", pointerEvents: "auto" }}>
                  <IoSearchSharp
                    size="20px"
                    color="#7A8AA3"
                    style={{ position: "absolute", left: "16px", zIndex: 1 }}
                  />
                  <VuiInput
                    placeholder="Search challenges..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ 
                      width: "100%",
                      "& .MuiInputBase-root": {
                        paddingLeft: "45px",
                        background: "rgba(14, 21, 58, 0.5) !important",
                        border: "1px solid rgba(255, 255, 255, 0.1) !important",
                        borderRadius: "12px !important",
                        height: "45px",
                        "&:hover": {
                          border: "1px solid rgba(255, 255, 255, 0.2) !important",
                        },
                        "&.Mui-focused": {
                          border: "1px solid rgba(0, 117, 255, 0.5) !important",
                        }
                      },
                      "& input": { 
                        color: "white !important",
                        "&::placeholder": {
                          color: "#7A8AA3 !important",
                          opacity: 1
                        }
                      }
                    }}
                  />
                </VuiBox>
              </Grid>

              {/* Difficulty Filter */}
              <Grid item xs={12} sm={6} md={3} sx={{ pointerEvents: "auto" }}>
                <FormControl fullWidth variant="outlined" sx={{ pointerEvents: "auto" }} onClick={() => setDifficultyOpen(!difficultyOpen)}>
                  <DarkSelect
                    open={difficultyOpen}
                    onOpen={() => setDifficultyOpen(true)}
                    onClose={() => setDifficultyOpen(false)}
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    MenuProps={darkMenuProps}
                    displayEmpty
                    variant="outlined"
                    sx={{ pointerEvents: "auto" }}
                  >
                    <MenuItem value="all">All Difficulties</MenuItem>
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                  </DarkSelect>
                </FormControl>
              </Grid>

              {/* Category Filter */}
              <Grid item xs={12} sm={6} md={4} sx={{ pointerEvents: "auto" }}>
                <FormControl fullWidth variant="outlined" sx={{ pointerEvents: "auto" }} onClick={() => setCategoryOpen(!categoryOpen)}>
                  <DarkSelect
                    open={categoryOpen}
                    onOpen={() => setCategoryOpen(true)}
                    onClose={() => setCategoryOpen(false)}
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    MenuProps={darkMenuProps}
                    displayEmpty
                    variant="outlined"
                    sx={{ pointerEvents: "auto" }}
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    <MenuItem value="Arrays">Arrays</MenuItem>
                    <MenuItem value="Trees">Trees</MenuItem>
                    <MenuItem value="Graphs">Graphs</MenuItem>
                    <MenuItem value="Dynamic Programming">Dynamic Programming</MenuItem>
                    <MenuItem value="Stack">Stack</MenuItem>
                  </DarkSelect>
                </FormControl>
              </Grid>
            </Grid>
          </VuiBox>
        </Card>

        {/* Results Count */}
        <VuiBox mb={3} mt={2}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Showing {filteredChallenges.length} of {challenges.length} challenges
          </VuiTypography>
        </VuiBox>

        {/* Challenge Grid */}
        <Grid container spacing={3}>
          {filteredChallenges.map((challenge) => (
            <Grid item xs={12} md={6} lg={4} key={challenge.id}>
              <ChallengeCard
                title={challenge.title}
                difficulty={challenge.difficulty}
                points={challenge.points}
                category={challenge.category}
                solvedCount={challenge.solvedCount}
                totalAttempts={challenge.totalAttempts}
                description={challenge.description}
                tags={challenge.tags}
                onStart={() => handleStartChallenge(challenge.id)}
              />
            </Grid>
          ))}
        </Grid>

        {filteredChallenges.length === 0 && (
          <VuiBox textAlign="center" py={5}>
            <VuiTypography variant="h5" color="text">
              No challenges found matching your criteria
            </VuiTypography>
          </VuiBox>
        )}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Challenges;

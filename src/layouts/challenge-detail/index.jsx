import React, { useState } from "react";
import { Grid, Card, Tabs, Tab } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiProgress from "components/VuiProgress";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import CodeEditor from "components/CodeEditor";
import { 
  IoCheckmarkCircle, 
  IoCloseCircle, 
  IoPlaySharp, 
  IoSend,
  IoTrophy,
  IoPeople
} from "react-icons/io5";

function ChallengeDetail() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [code, setCode] = useState('// Write your solution here\nfunction twoSum(nums, target) {\n  \n}');
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  // Mock challenge data
  const challenge = {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    points: 100,
    category: "Arrays",
    tags: ["Hash Table", "Arrays", "Math"],
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: ""
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: ""
      }
    ],
    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "-10⁹ <= target <= 10⁹",
      "Only one valid answer exists."
    ],
    hints: [
      "Think about using a hash map to store numbers you've seen.",
      "For each number, check if target - number exists in your hash map."
    ],
    submissions: 1234,
    acceptanceRate: 78.5
  };

  const handleRunCode = (code, language) => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setTestResults([
        { input: "[2,7,11,15], 9", expected: "[0,1]", actual: "[0,1]", passed: true, time: "0.5ms" },
        { input: "[3,2,4], 6", expected: "[1,2]", actual: "[1,2]", passed: true, time: "0.3ms" },
        { input: "[3,3], 6", expected: "[0,1]", actual: "[0,1]", passed: true, time: "0.4ms" },
      ]);
      setIsRunning(false);
    }, 1500);
  };

  const handleSubmit = () => {
    handleRunCode(code, "javascript");
    // In production, this would submit to backend
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Header */}
        <VuiBox mb={3} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <VuiBox>
            <VuiBox display="flex" alignItems="center" gap={2} mb={1}>
              <VuiTypography variant="h3" color="white" fontWeight="bold">
                {challenge.title}
              </VuiTypography>
              <VuiBox
                sx={{
                  background: challenge.difficulty === "Easy" 
                    ? "linear-gradient(135deg, #0a0, #060)" 
                    : "linear-gradient(135deg, #fa0, #f60)",
                  padding: "4px 12px",
                  borderRadius: "8px",
                }}
              >
                <VuiTypography variant="caption" color="white" fontWeight="bold">
                  {challenge.difficulty}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
            <VuiBox display="flex" gap={2} alignItems="center">
              <VuiBox display="flex" alignItems="center" gap={1}>
                <IoTrophy size="18px" color="#FFD700" />
                <VuiTypography variant="button" color="white">
                  {challenge.points} XP
                </VuiTypography>
              </VuiBox>
              <VuiBox display="flex" alignItems="center" gap={1}>
                <IoPeople size="18px" color="#0075FF" />
                <VuiTypography variant="button" color="text">
                  {challenge.submissions} submissions
                </VuiTypography>
              </VuiBox>
              <VuiTypography variant="button" color="success">
                {challenge.acceptanceRate}% acceptance
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>

        <Grid container spacing={3}>
          {/* Left Panel - Problem Description */}
          <Grid item xs={12} lg={5}>
            <Card
              sx={{
                background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
                height: "calc(100vh - 200px)",
                overflowY: "auto",
              }}
            >
              <VuiBox p={3}>
                <Tabs
                  value={selectedTab}
                  onChange={(e, val) => setSelectedTab(val)}
                  sx={{
                    marginBottom: "24px",
                    "& .MuiTab-root": { color: "rgba(255, 255, 255, 0.6)" },
                    "& .Mui-selected": { color: "#0075FF !important" },
                    "& .MuiTabs-indicator": { backgroundColor: "#0075FF" },
                  }}
                >
                  <Tab label="Description" />
                  <Tab label="Hints" />
                  <Tab label="Submissions" />
                </Tabs>

                {selectedTab === 0 && (
                  <VuiBox>
                    {/* Description */}
                    <VuiTypography variant="body1" color="white" mb={3} sx={{ lineHeight: 1.8 }}>
                      {challenge.description.split('\n').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                      ))}
                    </VuiTypography>

                    {/* Examples */}
                    <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2}>
                      Examples
                    </VuiTypography>
                    {challenge.examples.map((example, index) => (
                      <VuiBox
                        key={index}
                        sx={{
                          background: "rgba(0, 117, 255, 0.1)",
                          padding: "16px",
                          borderRadius: "10px",
                          border: "1px solid rgba(0, 117, 255, 0.3)",
                          marginBottom: "16px",
                        }}
                      >
                        <VuiTypography variant="button" color="info" fontWeight="bold" mb={1}>
                          Example {index + 1}:
                        </VuiTypography>
                        <VuiBox component="pre" sx={{ margin: 0, fontFamily: "monospace" }}>
                          <VuiTypography variant="caption" color="white">
                            Input: {example.input}{'\n'}
                            Output: {example.output}
                            {example.explanation && `\nExplanation: ${example.explanation}`}
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                    ))}

                    {/* Constraints */}
                    <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2} mt={3}>
                      Constraints
                    </VuiTypography>
                    <VuiBox component="ul" sx={{ paddingLeft: "20px" }}>
                      {challenge.constraints.map((constraint, index) => (
                        <li key={index}>
                          <VuiTypography variant="button" color="text">
                            {constraint}
                          </VuiTypography>
                        </li>
                      ))}
                    </VuiBox>

                    {/* Tags */}
                    <VuiBox mt={3}>
                      <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2}>
                        Topics
                      </VuiTypography>
                      <VuiBox display="flex" gap={1} flexWrap="wrap">
                        {challenge.tags.map((tag, index) => (
                          <VuiBox
                            key={index}
                            sx={{
                              background: "rgba(0, 117, 255, 0.15)",
                              padding: "6px 14px",
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
                    </VuiBox>
                  </VuiBox>
                )}

                {selectedTab === 1 && (
                  <VuiBox>
                    <VuiTypography variant="body2" color="text" mb={3}>
                      Here are some hints to help you solve this problem:
                    </VuiTypography>
                    {challenge.hints.map((hint, index) => (
                      <VuiBox
                        key={index}
                        sx={{
                          background: "rgba(255, 215, 0, 0.1)",
                          padding: "12px",
                          borderRadius: "8px",
                          border: "1px solid rgba(255, 215, 0, 0.3)",
                          marginBottom: "12px",
                        }}
                      >
                        <VuiTypography variant="button" color="warning" fontWeight="bold" mb={1}>
                          Hint {index + 1}:
                        </VuiTypography>
                        <VuiTypography variant="body2" color="white">
                          {hint}
                        </VuiTypography>
                      </VuiBox>
                    ))}
                  </VuiBox>
                )}

                {selectedTab === 2 && (
                  <VuiBox>
                    <VuiTypography variant="body2" color="text">
                      Your submission history will appear here.
                    </VuiTypography>
                  </VuiBox>
                )}
              </VuiBox>
            </Card>
          </Grid>

          {/* Right Panel - Code Editor & Results */}
          <Grid item xs={12} lg={7}>
            <Grid container spacing={3}>
              {/* Code Editor */}
              <Grid item xs={12}>
                <CodeEditor
                  initialCode={code}
                  language="javascript"
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                  height="calc(60vh - 100px)"
                />
              </Grid>

              {/* Action Buttons */}
              <Grid item xs={12}>
                <VuiBox display="flex" gap={2}>
                  <VuiButton
                    color="info"
                    variant="outlined"
                    onClick={() => handleRunCode(code, "javascript")}
                    disabled={isRunning}
                  >
                    <IoPlaySharp size="16px" style={{ marginRight: "8px" }} />
                    Run Tests
                  </VuiButton>
                  <VuiButton
                    color="success"
                    onClick={handleSubmit}
                    disabled={isRunning}
                    sx={{
                      background: "linear-gradient(135deg, #00aa00, #006600)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #008800, #004400)",
                      }
                    }}
                  >
                    <IoSend size="16px" style={{ marginRight: "8px" }} />
                    Submit Solution
                  </VuiButton>
                </VuiBox>
              </Grid>

              {/* Test Results */}
              {testResults.length > 0 && (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
                    }}
                  >
                    <VuiBox p={3}>
                      <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2}>
                        Test Results
                      </VuiTypography>
                      {testResults.map((result, index) => (
                        <VuiBox
                          key={index}
                          sx={{
                            background: result.passed 
                              ? "rgba(0, 255, 0, 0.1)" 
                              : "rgba(255, 0, 0, 0.1)",
                            padding: "12px",
                            borderRadius: "8px",
                            border: result.passed 
                              ? "1px solid rgba(0, 255, 0, 0.3)" 
                              : "1px solid rgba(255, 0, 0, 0.3)",
                            marginBottom: "12px",
                          }}
                        >
                          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <VuiBox display="flex" alignItems="center" gap={1}>
                              {result.passed ? (
                                <IoCheckmarkCircle size="20px" color="#00ff00" />
                              ) : (
                                <IoCloseCircle size="20px" color="#ff0000" />
                              )}
                              <VuiTypography variant="button" color="white" fontWeight="bold">
                                Test Case {index + 1}
                              </VuiTypography>
                            </VuiBox>
                            <VuiTypography variant="caption" color="text">
                              {result.time}
                            </VuiTypography>
                          </VuiBox>
                          <VuiTypography variant="caption" color="text" component="div">
                            Input: {result.input}
                          </VuiTypography>
                          <VuiTypography variant="caption" color="text" component="div">
                            Expected: {result.expected}
                          </VuiTypography>
                          <VuiTypography variant="caption" color={result.passed ? "success" : "error"} component="div">
                            Actual: {result.actual}
                          </VuiTypography>
                        </VuiBox>
                      ))}
                      
                      {isRunning && (
                        <VuiBox textAlign="center" py={2}>
                          <VuiTypography variant="button" color="info">
                            Running tests...
                          </VuiTypography>
                          <VuiProgress value={50} color="info" sx={{ marginTop: "10px" }} />
                        </VuiBox>
                      )}
                    </VuiBox>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ChallengeDetail;

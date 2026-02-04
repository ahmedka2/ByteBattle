import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import { Card, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { IoPlaySharp, IoDownloadSharp } from "react-icons/io5";

const CodeEditor = ({ 
  initialCode = "", 
  language = "javascript",
  onCodeChange,
  onRunCode,
  readOnly = false,
  height = "500px"
}) => {
  const [code, setCode] = useState(initialCode);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [theme, setTheme] = useState("vs-dark");

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "typescript", label: "TypeScript" },
  ];

  const handleEditorChange = (value) => {
    setCode(value);
    if (onCodeChange) {
      onCodeChange(value);
    }
  };

  const handleRunCode = () => {
    if (onRunCode) {
      onRunCode(code, selectedLanguage);
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Card sx={{ height: "100%", background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
      <VuiBox p={2}>
        {/* Editor Controls */}
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <VuiBox display="flex" gap={2} alignItems="center">
            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel sx={{ color: "white" }}>Language</InputLabel>
              <Select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                label="Language"
                disabled={readOnly}
                sx={{
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255, 255, 255, 0.2)" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255, 255, 255, 0.3)" },
                  ".MuiSvgIcon-root": { color: "white" }
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <VuiTypography variant="caption" color="text">
              {code.split("\n").length} lines
            </VuiTypography>
          </VuiBox>

          {!readOnly && (
            <VuiBox display="flex" gap={1}>
              <VuiButton 
                color="info" 
                onClick={handleRunCode}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <IoPlaySharp size="16px" />
                Run Code
              </VuiButton>
            </VuiBox>
          )}
        </VuiBox>

        {/* Monaco Editor */}
        <VuiBox
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Editor
            height={height}
            language={selectedLanguage}
            value={code}
            onChange={handleEditorChange}
            theme={theme}
            options={{
              readOnly: readOnly,
              minimap: { enabled: true },
              fontSize: 14,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: "on",
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default CodeEditor;

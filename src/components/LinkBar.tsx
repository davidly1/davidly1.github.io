import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { grey } from "@mui/material/colors";

const LinkBar = () => {
  return (
    <div className="mt-8 flex gap-4">
      <a href="https://github.com/davidly1" target="_blank">
        <GitHubIcon fontSize="large" sx={{ color: grey[800] }} />
      </a>
      <a href="https://www.linkedin.com/in/davidly26/" target="_blank">
        <LinkedInIcon fontSize="large" sx={{ color: grey[800] }} />
      </a>
      <a href="mailto:d26ly@uwaterloo.ca">
        <EmailIcon fontSize="large" sx={{ color: grey[800] }} />
      </a>
      <a href="https://github.com/davidly1" target="_blank">
        <InsertDriveFileIcon fontSize="large" sx={{ color: grey[800] }} />
      </a>
    </div>
  );
};

export default LinkBar;

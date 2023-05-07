import React, { useState } from "react";
import Resume from "../assets/Resume.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const LinkBar = () => {
  return (
    <div className="mt-8 flex gap-4">
      <a href="https://github.com/davidly1" title="GitHub" target="_blank">
        <GitHubIcon
          fontSize="large"
          sx={{ "&:hover": { color: "primary.main" } }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/davidly26/"
        title="LinkedIn"
        target="_blank"
      >
        <LinkedInIcon
          fontSize="large"
          sx={{ "&:hover": { color: "primary.main" } }}
        />
      </a>
      <a href="mailto:d26ly@uwaterloo.ca" title="Email">
        <EmailIcon
          fontSize="large"
          sx={{ "&:hover": { color: "primary.main" } }}
        />
      </a>
      <a href={Resume} title="Resume" target="_blank">
        <InsertDriveFileIcon
          fontSize="large"
          sx={{ "&:hover": { color: "primary.main" } }}
        />
      </a>
    </div>
  );
};

export default LinkBar;

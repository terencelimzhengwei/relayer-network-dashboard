import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { useLogger } from "../context/LoggerContext";

export default function LogViewer() {
  const { log, clear, logs } = useLogger();

  const logContent = logs.map((log, index) => {
    return <Typography key={index}>{log}</Typography>;
  });

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button onClick={clear} variant="contained" color="warning">
            Clear All Logs
          </Button>
          <div style={{ flexGrow: "1" }} />
          <Typography variant="h5">Persistent Logs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ maxHeight: "800px", overflow: "auto" }}>
            {logs.length === 0 ? (
              <Typography>No logs to display.</Typography>
            ) : (
              <div>{logContent}</div>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
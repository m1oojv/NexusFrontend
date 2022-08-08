// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled, { withTheme } from "styled-components/macro";

// import Helmet from "react-helmet";
// import {
//   Grid,
//   Divider as MuiDivider,
//   Typography,
//   Link,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Breadcrumbs as MuiBreadcrumbs,
//   Box,
// } from "@material-ui/core";

// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { spacing } from "@material-ui/system";
// // import { useForm, Controller } from "react-hook-form";

// import ThreatSummary from "./ThreatSummary";
// import Techniques from "./Techniques";

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography component="div">{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

// export default function NewThreat() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <React.Fragment>
//       <Helmet title="New Threat" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             New Threat Scenario
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="">
//               Scenario
//             </Link>
//             <Typography>New Threat</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <Grid>
//         <Box>
//           <Tabs
//             value={value}
//             indicatorColor="primary"
//             textColor="secondary"
//             onChange={handleChange}
//           >
//             <Tab label="Threat Summary" {...a11yProps(0)} />
//             <Tab label="ATT&CK Techniques" {...a11yProps(1)} />
//           </Tabs>
//         </Box>
//       </Grid>

//       <TabPanel value={value} index={0}>
//         <Grid container spacing={6}>
//           <Grid item md={12}>
//             <ThreatSummary value={value} />
//           </Grid>
//         </Grid>
//       </TabPanel>

//       <TabPanel value={value} index={1}>
//         <Grid container spacing={6}>
//           <Grid item md={12}>
//             <Techniques value={value} />
//           </Grid>
//         </Grid>
//       </TabPanel>
//     </React.Fragment>
//   );
// }

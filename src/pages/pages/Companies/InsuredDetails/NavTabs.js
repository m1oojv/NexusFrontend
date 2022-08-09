// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import {
//   AppBar,
//   Box,
//   Chip as MuiChip,
//   Container,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Grid,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography as MuiTypography,
//   Tabs,
//   Tab,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import ControlAnalysis from "./Controls";
// import Threats from "./Threats";
// import ThreatCategory from "./ThreatCategory";
// import LossChart from "./LossChart";
// import RiskTrend from "./RiskTrend";
// import Overview from "./Overview/Overview";
// import ControlsOverview from "./Overview/ControlsOverview";
// import ThreatsOverview from "./Overview/ThreatsOverview";
// import ReturnPeriod from "./Overview/ReturnPeriod";
// import Exposure from "./Overview/Exposure";

// const DEFAULT_QUERY = "redux";

// const Card = styled(MuiCard)(spacing);
// const Paper = styled(MuiPaper)(spacing);

// const Typography = styled(MuiTypography)(spacing);
// /*
//   <Grid item xs={12} sm={12} md={6} lg={6}>
//     <ControlsOverview companyDetails={companyDetails} />
//   </Grid>
//   <Grid item xs={12} sm={12} md={6} lg={6}>
//     <ThreatsOverview companyDetails={companyDetails} />
//   </Grid>
// */
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
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// function NavTabs({ uuid, companyDetails, theme, isCompleted }) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Card mb={6}>
//       <div>
//         <AppBar
//           position="static"
//           style={{ backgroundColor: theme.sidebar.background }}
//         >
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="vendor-tabs-details"
//           >
//             <Tab label="Overview" {...a11yProps(0)} />
//             <Tab label="Loss Analysis" {...a11yProps(1)} />
//             <Tab label="Controls Analysis" {...a11yProps(2)} />
//             <Tab label="Threats Analysis" {...a11yProps(3)} />
//           </Tabs>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={12} md={6} lg={6}>
//               <Overview companyDetails={companyDetails} />
//             </Grid>
//             <Grid item xs={12} sm={12} md={6} lg={6}>
//               <Exposure companyDetails={companyDetails} />
//             </Grid>
//           </Grid>
//         </TabPanel>
//         {isCompleted ? (
//           <TabPanel value={value} index={1}>
//             <Grid container spacing={6}>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <ReturnPeriod companyDetails={companyDetails} />
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <ThreatCategory
//                   threatCategory={companyDetails.financials.threatCategory.data}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <LossChart
//                   lossExceedence={companyDetails.financials.lossExceedence.data}
//                 />
//               </Grid>
//             </Grid>
//           </TabPanel>
//         ) : null}
//         <TabPanel value={value} index={2}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={12} md={12} lg={12}>
//               <ControlAnalysis uuid={uuid} />
//             </Grid>
//           </Grid>
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={12} md={12} lg={12}>
//               <Threats uuid={uuid} />
//             </Grid>
//           </Grid>
//         </TabPanel>
//       </div>
//     </Card>
//   );
// }

// export default withTheme(NavTabs);

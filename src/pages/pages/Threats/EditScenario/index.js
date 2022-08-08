// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation, useHistory } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import ControlsTable from "../../Scenario/AdvancedTable";
// import { useQuery, useMutation } from "react-query";
// import NavTab from "./NavTab";
// import { Helmet } from "react-helmet";

// import {
//   Button,
//   CardContent,
//   Grid,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Link,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography,
//   CircularProgress,
//   Box,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";
// import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

// import queryString from "query-string";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

// const TextField = styled(TextFieldSpacing)`
//   width: 200px;
// `;

// function createData(
//   killChainStage,
//   Description,
//   techniqueOne,
//   techniqueTwo,
//   techniqueThree
// ) {
//   return {
//     killChainStage,
//     Description,
//     techniqueOne,
//     techniqueTwo,
//     techniqueThree,
//   };
// }

// function createControlsData(
//   killChainStage,
//   controlID,
//   nistFunction,
//   controlFamily,
//   description
// ) {
//   return {
//     killChainStage,
//     controlID,
//     nistFunction,
//     controlFamily,
//     description,
//   };
// }

// function EditScenario() {
//   let location = useLocation();
//   let value = queryString.parse(location.search);
//   const history = useHistory();

//   const mutation = useMutation("updateScenario", (updateScenario) =>
//     services.updatethreatscenario(updateScenario)
//   );
//   const [firstLoad, setFirstLoad] = React.useState([false, false]);
//   const [firstData, setFirstData] = React.useState(false);

//   const {
//     isLoading,
//     error,
//     data = {
//       data: [
//         [[{ title: "", value: "" }]],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//         [{ businessImpact: "", businessUnit: "" }],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//         [{ title: "", value: "" }],
//       ],
//     },
//   } = useQuery(
//     "fetchEditScenario",
//     () => services.getsupplychainthreatscenariodetails(value),
//     {
//       onSuccess: () => {
//         setFirstLoad([true, true]);
//         setFirstData(true);
//       },
//     }
//   );

//   const [editedScenario, setEditedScenario] = React.useState(data.data);

//   console.log(firstLoad, firstData, data.data);

//   if (firstLoad[0] == false) return <React.Fragment></React.Fragment>;
//   if (firstLoad[1] == true) {
//     console.log("firstdata", data.data, editedScenario);
//     setEditedScenario(data.data);
//     setFirstLoad([true, false]);
//   }

//   const handleSubmit = () => {
//     mutation.mutate(editedScenario, {
//       onSuccess: () =>
//         history.push(`/threatscenario?id=${value.id}&vendor=${value.vendor}`),
//     });
//   };
//   console.log("editedscenario", editedScenario);

//   return (
//     <React.Fragment>
//       <Helmet title="Edit Threat Scenario" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {data.data[0][0].title}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/threatanalysis">
//               Threat Analysis
//             </Link>
//             <Link
//               component={NavLink}
//               exact
//               to={"/threatanalysis/scenario?id=" + value.id}
//             >
//               Scenario
//             </Link>
//             <Typography>Edit Scenario</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           {mutation.isLoading ? (
//             <Box sx={{ display: "flex" }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </Button>
//             </div>
//           )}
//         </Grid>
//       </Grid>
//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <NavTab
//             selectedScenario={editedScenario}
//             setEditedScenario={setEditedScenario}
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
// /*
//       <Grid item xs={12}>
//           <ControlledAccordion
//             selectedScenario={data.data[1]}
//             selectedScenarioControls={data.data[2]}
//           />
//         </Grid>
// */

// export default withTheme(EditScenario);

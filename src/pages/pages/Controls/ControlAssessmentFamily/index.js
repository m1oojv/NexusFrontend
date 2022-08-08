// import React, { useState, useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import { useMutation, useQuery } from "react-query";
// import services from "../../../../api/services/services.js";
// import queryString from "query-string";

// import Helmet from "react-helmet";
// import {
//   Grid,
//   Link,
//   Breadcrumbs as MuiBreadcrumbs,
//   Divider as MuiDivider,
//   Typography,
//   Button,
//   Chip as MuiChip,
//   Card,
//   CardContent,
//   CardActionArea,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";
// import ControlFamily from "./ControlFamily";

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// function ControlAssessmentFamily() {
//   let location = useLocation();
//   let uuid = queryString.parse(location.search);
//   console.log(uuid);

//   const mutation = useMutation("createnewapplication", (data) =>
//     services.addnewcompany(data)
//   );

//   const {
//     data = {
//       data: [
//         {
//           controlFamily: [
//             {
//               controlFamily: "",
//               assessmentProgress: "",
//             },
//           ],
//         },
//       ],
//     },
//   } = useQuery("getControlAssessmentFamily", () =>
//     services.getcontrolassessmentfamily(uuid)
//   );
//   console.log(data.data);
//   let controlFamilies = data.data[0];
//   let companyId = data.data[0].companyId;
//   //prettier-ignore
//   return (
//     <React.Fragment>
//       <Helmet title="Business Units" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {controlFamilies.companyName} - Controls Assessment
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to={"/insureddetails?id=" + companyId}>
//               Company
//             </Link>
//             <Typography>Control Assessment Navigation</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>
//       <Divider my={3} />
//       <ControlFamily
//         controlFamilies={controlFamilies.controlFamily}
//         uuid={uuid.uuid}
//       />
//     </React.Fragment>
//   );
// }

// export default withTheme(ControlAssessmentFamily);

// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import { spacing, typography } from "@material-ui/system";

// import Helmet from "react-helmet";
// import {
//   Grid,
//   Link,
//   Breadcrumbs as MuiBreadcrumbs,
//   Divider as MuiDivider,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Box,
//   Select as MuiSelect,
// } from "@material-ui/core";

// import ViewDialog from "./ViewDialog";

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Select = styled(MuiSelect)(spacing);

// const Assessment = ({
//   icon,
//   name,
//   status,
//   start,
//   assessed,
//   completion,
//   assessmentUuid,
//   companyUuid,
//   scanResults,
// }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={3}>
//             {icon}
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="caption">{status}</Typography>
//             <Typography variant="h6">{name}</Typography>
//           </Grid>
//           <Grid item xs={3}>
//             <ViewDialog
//               completion={completion}
//               name={name}
//               assessmentUuid={assessmentUuid}
//               companyUuid={companyUuid}
//               scanResults={scanResults}
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(Assessment);

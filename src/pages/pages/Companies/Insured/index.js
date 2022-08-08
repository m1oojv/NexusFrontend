// import React from "react";
// import styled from "styled-components/macro";
// import { NavLink, useHistory } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import { useQuery, useMutation } from "react-query";
// import DeleteDialog from "./DeleteDialog";

// import Helmet from "react-helmet";

// import {
//   Button,
//   Grid,
//   Link,
//   Avatar as MuiAvatar,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Typography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import MaterialTable from "@material-table/core";
// import { forwardRef } from "react";

// import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
// import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import Check from "@material-ui/icons/Check";
// import ChevronLeft from "@material-ui/icons/ChevronLeft";
// import ChevronRight from "@material-ui/icons/ChevronRight";
// import Clear from "@material-ui/icons/Clear";
// import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import Edit from "@material-ui/icons/Edit";
// import FilterList from "@material-ui/icons/FilterList";
// import FirstPage from "@material-ui/icons/FirstPage";
// import LastPage from "@material-ui/icons/LastPage";
// import Remove from "@material-ui/icons/Remove";
// import SaveAlt from "@material-ui/icons/SaveAlt";
// import Search from "@material-ui/icons/Search";
// import ViewColumn from "@material-ui/icons/ViewColumn";

// import { Add as AddIcon } from "@material-ui/icons";

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
// };
// const Card = styled(MuiCard)(spacing);

// const Avatar = styled(MuiAvatar)`
//   margin-right: ${(props) => props.theme.spacing(2)}px;
// `;

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// function createData(
//   name,
//   risk,
//   industry,
//   country,
//   premium,
//   id,
//   assessmentProgress,
//   assessmentId
// ) {
//   return {
//     name,
//     risk,
//     industry,
//     country,
//     premium,
//     id,
//     assessmentProgress,
//     assessmentId,
//   };
// }

// function determineLink(status, id, assessmentId) {
//   return `/insureddetails?id=${id}`;
//   /*return status == "COMPLETED"
//     ? `/insureddetails?id=${id}`
//     : `/controls/controlassessmentfamily?uuid=${assessmentId}`;*/
// }

// function Insured() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedItem, setSelectedItem] = React.useState({});

//   const mutation = useMutation("deleteCompany", (deleteCompany) =>
//     services.deletecompany(deleteCompany)
//   );

//   const {
//     refetch,
//     data = {
//       data: {
//         id: "",
//         companyName: "",
//         risk: "",
//         industry: "",
//         country: "",
//         premium: "",
//         assessmentProgress: "",
//       },
//     },
//   } = useQuery("fetchInsuredCompanies", () => services.getinsuredcompanies(), {
//     manual: true,
//   });

//   React.useEffect(() => {
//     refetch();
//   }, []);

//   const history = useHistory();

//   function handleClose() {
//     // reset on close
//     setOpen(false);
//     setSelectedItem({});
//   }

//   function handleConfirm() {
//     // reset on close
//     setOpen(false);
//     mutation.mutate({ data: selectedItem }, { onSuccess: () => refetch() });
//     console.log(selectedItem);
//     setSelectedItem({});
//   }

//   let companies = [];
//   Array.from(data.data).map((row) => {
//     companies.push(
//       createData(
//         row.companyName,
//         row.risk,
//         row.industry,
//         row.country,
//         row.premium,
//         row.id,
//         row.assessmentProgress,
//         row.assessmentId
//       )
//     );
//   });

//   return (
//     <React.Fragment>
//       <Helmet title="Business Units" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             Insured Companies
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/enterprise">
//               Portfolio
//             </Link>
//             <Typography>Companies</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           <div>
//             <Link component={NavLink} exact to="/newapplication">
//               <Button variant="contained" color="primary">
//                 <AddIcon />
//                 Add New Company
//               </Button>
//             </Link>
//           </div>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <MaterialTable
//         icons={tableIcons}
//         title="Companies"
//         columns={[
//           {
//             title: "Companies",
//             field: "name",
//             grouping: false,
//             render: (rowData) => {
//               return (
//                 <React.Fragment>
//                   <Grid container alignItems="center">
//                     <Avatar>{rowData.name.charAt(0)}</Avatar>
//                     <Typography>{rowData.name}</Typography>
//                   </Grid>
//                 </React.Fragment>
//               );
//             },
//           },
//           {
//             title: "Annual Average Loss ($)",
//             field: "risk",
//             render: (rowData) => {
//               return parseInt(rowData.risk).toLocaleString();
//             },
//             type: "numeric",
//             align: "left",
//             grouping: false,
//           },
//           { title: "Assessment Status", field: "assessmentProgress" },
//           { title: "Industry", field: "industry" },
//         ]}
//         data={companies}
//         actions={[
//           {
//             icon: () => <RemoveRedEye />,
//             tooltip: "View",
//             onClick: (event, rowData) =>
//               history.push(
//                 determineLink(
//                   rowData.assessmentProgress,
//                   rowData.id,
//                   rowData.assessmentId
//                 )
//               ),
//           },
//           {
//             icon: () => <DeleteOutline />,
//             tooltip: "Delete",
//             onClick: (event, rowData) => {
//               setSelectedItem(rowData.id);
//               setOpen(true);
//             },
//           },
//         ]}
//         options={{
//           search: true,
//           exportButton: true,
//           actionsColumnIndex: -1,
//           grouping: true,
//         }}
//       />
//       {open ? (
//         <DeleteDialog
//           open={open}
//           handleClose={handleClose}
//           handleConfirm={handleConfirm}
//         />
//       ) : null}
//     </React.Fragment>
//   );
// }

// export default Insured;

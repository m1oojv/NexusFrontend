import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import services from "../../../../../api/services/services.js";

import Helmet from "react-helmet";
import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Box,
  InputAdornment,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { useForm, Controller } from "react-hook-form";
import Industries from "./industries.json"; //import industry menu options json file
import Countries from "./countries.json"; //import countries menu options json file

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Select = styled(MuiSelect)(spacing);

//yup validation schema
const schema = yup.object().shape({
  companyName: yup.string().required("Please enter your company name."),
  revenue: yup
    .number()
    .typeError("Please specify a number.")
    .required("Please enter your company revenue."),
  industry: yup.string().required("Please select your industry."),
  countries: yup.string().required("Please select a country."),
  employees: yup
    .number()
    .typeError("Please specify a number.")
    .required("Please enter the number of employees."),
  domain: yup.string().required("Please enter your domain."),
  records: yup
    .number()
    .typeError("Please specify a number.")
    .required("Please enter the number of Records held by company."),
});

const defaultValues = {
  companyName: "",
  revenue: "",
  industry: "",
  countries: "",
  employees: "",
  domain: "",
  pii: "",
  phi: "",
  pci: "",
  controls: "",
};

function NewApplication() {
  const industries = Industries.industries; //get industry options from json file
  const countries = Countries.countries; //get countries options from json file
  const history = useHistory();

  const mutation = useMutation("createnewapplication", (data) =>
    services.addnewcompany(data)
  );

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => (
        console.log(data), history.push(`/existingclients`)
      ),
    });
    console.log(data);

    //reset values (clear fields after submit)
    setValue("companyName", "");
    setValue("revenue", "");
    setValue("industry", "");
    setValue("countries", "");
    setValue("employees", "");
    setValue("domain", "");
    setValue("records", "");
  };

  return (
    <React.Fragment>
      <Helmet title="Business Units" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Add New Client
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/home">
              Home
            </Link>
            <Typography>New Client</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={3} />
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Box flexGrow={1} flexBasis={0}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography variant="h4">Add a Company</Typography>
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Company Name</Typography>
                  <Controller
                    control={control}
                    name="companyName"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <TextField
                        style={{ width: "100%" }}
                        value={value}
                        variant="outlined"
                        size="medium"
                        error={!!formState.errors?.companyName}
                        onChange={({ target: { value } }) => {
                          setValue("companyName", value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                  {errors.companyName && <p>{errors.companyName.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Revenue</Typography>
                  <Controller
                    control={control}
                    name="revenue"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <TextField
                        style={{ width: "100%" }}
                        value={value}
                        variant="outlined"
                        size="medium"
                        error={!!formState.errors?.revenue}
                        InputProps={{
                          startAdornment: (
                            //for $ in revenue text field
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        onChange={({ target: { value } }) => {
                          setValue("revenue", value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                  {errors.revenue && <p>{errors.revenue.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Industry</Typography>
                  <Controller
                    control={control}
                    name="industry"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <Select
                        labelId="industry"
                        value={value}
                        style={{ width: "100%" }}
                        variant="outlined"
                        error={!!formState.errors?.industry}
                        onChange={({ target: { value } }) => {
                          setValue("industry", { value: value });
                          onChange(value);
                        }}
                      >
                        {industries.map((industry) => (
                          //loop through industries to display each menu item
                          <MenuItem key={industry} value={industry}>
                            {industry}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.industry && <p>{errors.industry.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Country</Typography>
                  <Controller
                    control={control}
                    name="countries"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <Select
                        labelId="countries"
                        value={value || []}
                        style={{ width: "100%" }}
                        variant="outlined"
                        error={!!formState.errors?.countries}
                        onChange={({ target: { value } }) => {
                          setValue("countries", { value: value });
                          onChange(value);
                        }}
                      >
                        {countries.map((country) => (
                          //loop through countries to display each menu item
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.countries && <p>{errors.countries.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Number of Employees</Typography>
                  <Controller
                    control={control}
                    name="employees"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <TextField
                        style={{ width: "100%" }}
                        value={value}
                        variant="outlined"
                        size="medium"
                        error={!!formState.errors?.employees}
                        onChange={({ target: { value } }) => {
                          setValue("employees", value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                  {errors.employees && <p>{errors.employees.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">Domain</Typography>
                  <Controller
                    control={control}
                    name="domain"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <TextField
                        style={{ width: "100%" }}
                        value={value}
                        variant="outlined"
                        size="medium"
                        error={!!formState.errors?.domain}
                        onChange={({ target: { value } }) => {
                          setValue("domain", value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                  {errors.domain && <p>{errors.domain.message}</p>}
                </Grid>

                <Grid item xs={12} s={6} md={6}>
                  <Typography variant="body2">
                    Estimated Number of Records (PII, PCI, PHI)
                  </Typography>
                  <Controller
                    control={control}
                    name="records"
                    defaultValue={""}
                    render={({ field: { onChange, value }, formState }) => (
                      <TextField
                        style={{ width: "100%" }}
                        value={value}
                        variant="outlined"
                        size="medium"
                        error={!!formState.errors?.records}
                        onChange={({ target: { value } }) => {
                          setValue("records", value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                  {errors.records && <p>{errors.records.message}</p>}
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default withTheme(NewApplication);

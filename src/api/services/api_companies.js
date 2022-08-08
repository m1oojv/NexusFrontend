import http from "../http-common";
import loss from "../http-loss";

function getInsuredCompanies(body) {
  return http.get("/web/api/v1/companies", body);
}

function getCompanyDetails(body) {
  return http.get(`/web/api/v1/companies/${body.id}`, body);
}

function addNewCompany(body) {
  return http.post("/web/api/v1/companies", body);
}

function updateCompany(body) {
  return http.put(`/web/api/v1/companies/${body.id}`, body);
}

function deleteCompany(body) {
  return http.delete(`/web/api/v1/companies/${body.id} `, body);
}

export default {
  getInsuredCompanies,
  getCompanyDetails,
  addNewCompany,
  updateCompany,
  deleteCompany,
};

import http from "../http-common";

function getPdfReport(body) {
  return http.post("/web/api/v1/companies/reports", body);
}

export default {
  getPdfReport,
};

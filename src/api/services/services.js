import http from "../http-common";
import loss from "../http-loss";

function getlosssimulation(body) {
  return loss.get("/losssimulation", body);
}

function getuserprofile(body) {
  return http.get("/userprofile", body);
}

function getthreatscenario() {
  return http.get("/threatscenario");
}

function updatethreatscenario(body) {
  return http.post("/updatethreatscenario", body);
}

function getvendorcontrolfamilies(body) {
  return http.post("/vendorcontrolfamilies", body);
}

function getvendorcontrolfamilydetails(body) {
  return http.post("/vendorcontrolfamilydetails", body);
}

function getvendorcontroldetails(body) {
  return http.post("/vendorcontroldetails", body);
}

function getcontrolassessmentfamily(body) {
  return http.post("/controlassessmentfamily", body);
}

function getcontrolassessment(body) {
  return http.post("/controlassessment", body);
}

function updatecontrolscore(body) {
  return http.post("/updatecontrolscore", body);
}

function getsupplychainthreatscenariodetails(body) {
  return http.post("/supplychainthreatscenariodetails", body);
}

function getvendorthreatscenario(body) {
  return http.post("/vendorthreatscenario", body);
}

function getsupplychaindashboard(body) {
  return http.post("/supplychaindashboard", body);
}

function getcompanydetails(body) {
  return http.post("/companydetails", body);
}

function getinsuredcompanies(body) {
  return http.get("/insuredcompanies", body);
}

function getinsurancedashboard(body) {
  return http.get("/insurancedashboard", body);
}

function getthreatscenariodetails(body) {
  return http.post("/threatscenariodetails", body);
}

function getinvestments(body) {
  return http.get("/investments");
}

function addnewcompany(body) {
  return http.post("/addnewcompany", body);
}

function deletecompany(body) {
  return http.delete("/deletecompany", body);
}

function createnewuser(body) {
  return http.post("/createnewuser", body);
}

function generatepdf(body) {
  return http.post("/generatepdf", body);
}

export default {
  getlosssimulation,
  getuserprofile,
  getthreatscenario,
  updatethreatscenario,
  getvendorcontrolfamilies,
  getvendorcontrolfamilydetails,
  getvendorcontroldetails,
  getcontrolassessmentfamily,
  getcontrolassessment,
  updatecontrolscore,
  getsupplychainthreatscenariodetails,
  getvendorthreatscenario,
  getsupplychaindashboard,
  getcompanydetails,
  getinsuredcompanies,
  getinsurancedashboard,
  getthreatscenariodetails,
  getinvestments,
  addnewcompany,
  deletecompany,
  createnewuser,
  generatepdf,
};

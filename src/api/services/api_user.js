import http from "../http-common";

function getUserProfile(body) {
  return http.get("/web/api/v1/users/current-user", body);
}

export default {
  getUserProfile,
};

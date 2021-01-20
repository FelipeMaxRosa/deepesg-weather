import http from "../http-common";

const getAll = (period) => {
  return http.get(`/api/weather?period=${period}`);
};

const get = (city) => {
  return http.get(`/api/weather/${city}`);
};

// const create = (data) => {
//   return http.post("/api", data);
// };

// const update = (id, data) => {
//   return http.put(`/api/${id}`, data);
// };

// const remove = (id) => {
//   return http.delete(`/api/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/api`);
// };

// const findByName = (name) => {
//   return http.get(`/api/?name=${name}`);
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { get };

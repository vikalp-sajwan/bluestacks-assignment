import { rest } from "msw";
import { mockData } from "./mockData";

const DB_KEY = "blueStacksDB";
(function putMockDataInLocalStorage() {
  if (localStorage.getItem(DB_KEY) !== null) {
    return;
  }
  localStorage.setItem(DB_KEY, JSON.stringify(mockData));
})();

export const handlers = [
  rest.post("/updateschedule", null),

  rest.get("/data", (req, res, ctx) => {
    const data = JSON.parse(localStorage.getItem(DB_KEY));
    // console.log(data);
    return res(
      ctx.status(200),
      ctx.json({
        data: data,
      })
    );
  }),
];

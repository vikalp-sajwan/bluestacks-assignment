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
  rest.put("/updateschedule", (req, res, ctx) => {
    const { id, newTimeStamp } = req.body;
    const currentData = JSON.parse(localStorage.getItem(DB_KEY));
    const updatedUpcomingCampaigns = currentData.upcoming.map((item) => {
      return item.id === id ? { ...item, createdOn: newTimeStamp } : item;
    });
    const updatedData = { ...currentData, upcoming: updatedUpcomingCampaigns };
    localStorage.setItem(DB_KEY, JSON.stringify(updatedData));

    return res(
      ctx.status(200),
      ctx.json({
        data: updatedData,
      })
    );
  }),

  rest.get("/data", (req, res, ctx) => {
    const data = JSON.parse(localStorage.getItem(DB_KEY));
    return res(
      ctx.status(200),
      ctx.json({
        data: data,
      })
    );
  }),
];

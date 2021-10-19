const functions = require("./index");
const context = require("../testing/Context");

test("Http trigger", async () => {
  const request = {
    query: { name: "Fernando cohuo" },
  };

  await functions(context, request);
  expect(context.res.body).toEqual("Welcome, Fernando cohuo");
  expect(context.log.mock.calls.length).toBe(1);
});

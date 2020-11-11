const request = require("supertest");
const expect = require("chai").expect;
const server = require("../app");

// PLANS FOR TEST SUITE:
// it responds to get / with status 200
// it responds to get /quotes with status 200
// it retrieves a quote by index
// it responds to non existing paths with 404

describe("API server", () => {
  let api;
  before(() => {
    api = server.listen(5005, () =>
      console.log("Test server running on port 5005")
    );
  });

  after((done) => {
    // close the server, then run done
    console.log("Gracefully stopping test server :)");
    api.close(done);
  });
});

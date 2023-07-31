import { test, describe } from "mocha";
import { assert } from "chai";
import moment from "moment";

const getNextBusinessDay = (date) => {
  return moment(date).add(1, "day").toDate();
};

describe("getNextBusinessDay", () => {
  test("returns tuesday when given monday@9am", () => {
    const monday = moment().day(1).hour(9).startOf("hour").toDate();
    const expectation = moment(monday).add(1, "day").toDate();
    assert.equal(getNextBusinessDay(monday).getTime(), expectation.getTime());
  });

  test("returns monday when given friday", () => {
    const monday = moment().day(5).hour(9).startOf("hour").toDate();
    const expectation = moment(monday).add(3, "day").toDate();
    assert.equal(getNextBusinessDay(monday).getTime(), expectation.getTime());
  });
});

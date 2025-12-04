import { updateTimes, initializeTimes } from "../times";

describe("initializeTimes reducer initializer", () => {
  test("returns the correct initial array of times", () => {
    const times = initializeTimes();

    expect(times).toEqual([
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
    ]);

    expect(times.length).toBe(4);
  });
});


describe("updateTimes reducer", () => {
  test("returns the even-day schedule when date is on an even-numbered day", () => {
    const state = [];
    const action = { type: "UPDATE_TIMES", date: "2024-10-02" }; // October 2 = even day

    const result = updateTimes(state, action);

    expect(result).toEqual([
      "12:00 PM",
      "1:30 PM",
      "3:00 PM",
      "6:00 PM",
    ]);
  });

  test("returns the odd-day schedule when date is on an odd-numbered day", () => {
    const state = [];
    const action = { type: "UPDATE_TIMES", date: "2024-10-03" }; // October 3 = odd day

    const result = updateTimes(state, action);

    expect(result).toEqual([
      "11:00 AM",
      "2:00 PM",
      "4:00 PM",
    ]);
  });

  test("returns empty array when given an invalid date", () => {
    const state = ["12:00 PM"];
    const action = { type: "UPDATE_TIMES", date: "" }; // invalid date

    const result = updateTimes(state, action);

    expect(result).toEqual([]);
  });

  test("returns the original state for unknown action types", () => {
    const state = ["12:00 PM"];
    const action = { type: "UNKNOWN_ACTION" };

    const result = updateTimes(state, action);

    expect(result).toEqual(state); // unchanged
  });
});

export function updateTimes(state, action) {
  if (action.type !== "UPDATE_TIMES") return state;

  const day = new Date(action.date).getDate();

  if (isNaN(day)) return [];

  return day % 2 === 0
    ? ["12:00 PM", "1:30 PM", "3:00 PM", "6:00 PM"]
    : ["11:00 AM", "2:00 PM", "4:00 PM"];
}

export function initializeTimes() {
  return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
}

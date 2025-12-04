import { updateTimes } from "../Main";
import { fetchAPI } from "../api/fetchAPI";

jest.mock("../api/fetchAPI");

describe("updateTimes reducer", () => {
  test("updates availableTimes based on a pre-selected date", () => {
    // Arrange: selected date to use in the dispatch action
    const selectedDate = "2025-05-10";

    // Mock API returned values
    const mockTimes = ["12:00 PM", "1:00 PM", "3:00 PM"];
    fetchAPI.mockReturnValue(mockTimes);

    // Initial state before the update
    const initialState = ["initial", "times"];

    // Act: dispatch update action with pre-selected date
    const result = updateTimes(initialState, {
      type: "update",
      payload: { date: selectedDate },
    });

    // Assert
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    expect(result).toEqual(mockTimes);
    expect(result.length).toBeGreaterThan(0);
  });
});

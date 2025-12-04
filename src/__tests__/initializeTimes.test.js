import { initializeTimes } from "../Main";
import { fetchAPI } from "../api/fetchAPI";

// ⭐ Mock the fetchAPI function
jest.mock("../api/fetchAPI");

describe("initializeTimes", () => {
  test("calls fetchAPI with today's date and returns available times", () => {
    // Arrange: mock response from fetchAPI
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    // We need to freeze time so the test always passes
    const mockDate = new Date("2025-01-15T12:00:00"); 
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    // Act
    const result = initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(mockTimes);

    // Restore Date after test
    jest.restoreAllMocks();
  });
});

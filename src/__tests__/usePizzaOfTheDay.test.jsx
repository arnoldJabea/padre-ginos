import { expect, test, vi } from "vitest";
import { renderHook,waitFor } from "@testing-library/react";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

const testPizza = {
    id: "calabrese",
    name: "The Calabrese Pizza",
    category:"Supreme",
    description: "A Calabrese pizza",
    image: "/public/pizzas/calabrese.webp",
    size: {S:12.25, M:16.25, L:20.25},
};

function getPizzaOfTheDay() {
    let pizza;

    function TestComponent() {

        pizza = usePizzaOfTheDay();
        return null;
        
    }
    render(<TestComponent />);

    return pizza;
}



test("gives null  whwn first called", async () => {
    fetchMocker.mockResponse(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay());
    expect(result.current).toBeNull();
});

test("to call the API and get the pizza of the day", async () => {
    fetchMocker.mockResponse(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay());
    await waitFor(() => {
        expect(result.current).toEqual(testPizza);
        
    });
    expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
});

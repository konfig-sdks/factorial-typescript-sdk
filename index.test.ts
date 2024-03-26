import { Factorial } from "./index";

describe("factorial-typescript-sdk", () => {
    it("initialize client", async () => {
        const factorial = new Factorial({
            apiKey: "API_KEY",
        });
    });
});

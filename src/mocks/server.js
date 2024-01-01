import { rest } from "msw";
import { setupServer } from "msw/node";
import { mockQuiz } from "./data";

export const server = setupServer(
  rest.get("http://localhost:3000/quiz", (req, res, ctx) => {
    return res(ctx.json(mockQuiz));
  })
);

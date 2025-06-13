import { Result } from "../types/result";
import { Problem } from "../types/Problem";

export async function submitResult(result: Result) {
  await fetch('/api/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  });
}

export async function submitError(problem: Problem) {
  await fetch('/api/errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(problem),
  });
}
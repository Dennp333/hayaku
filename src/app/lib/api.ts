import { Result } from "../types/result";

export async function submitResult(result: Result) {
  await fetch('/api/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  });
}
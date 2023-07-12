import { test, expect, vi } from 'vitest';









test.only('repro', async () => {
  expect(1 + 1).toBe(3);
  expect(1 + 1).toBe(2);
  expect(2 + 2).toBe(4);
});
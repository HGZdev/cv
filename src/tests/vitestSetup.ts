// tests/mockServerSetup.ts
import {afterAll, afterEach, beforeAll, beforeEach, vi} from "vitest";
import {cleanup} from "@testing-library/react";
import "jest-styled-components";

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {
  vi.clearAllMocks();
  // testing-library clean up
  cleanup();
});

afterAll(() => {});

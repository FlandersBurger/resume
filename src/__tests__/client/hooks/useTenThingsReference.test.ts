import { renderHook, waitFor } from "@testing-library/react";
import { resetTenThingsReference, useTenThingsReference } from "../../../client/hooks/useTenThingsReference";
import { getCategories, getLanguages } from "../../../client/services/tenthings";

jest.mock("../../../client/services/tenthings", () => ({ getCategories: jest.fn(), getLanguages: jest.fn() }));

const mockCategories = getCategories as jest.Mock;
const mockLanguages = getLanguages as jest.Mock;
const music = [{ value: "music", label: "Music" }];
const dutch = [{ code: "NL", name: "Dutch", native: "Nederlands" }];

beforeEach(() => {
  jest.clearAllMocks();
  resetTenThingsReference();
  mockCategories.mockResolvedValue(music);
  mockLanguages.mockResolvedValue(dutch);
});

it("fetches once, then serves later callers from memory right away", async () => {
  const first = renderHook(() => useTenThingsReference());
  await waitFor(() => expect(first.result.current.categoryOptions).toEqual(music));
  expect(first.result.current.languageOptions).toEqual(dutch);

  const second = renderHook(() => useTenThingsReference());
  expect(second.result.current).toEqual({ categoryOptions: music, languageOptions: dutch });
  expect(mockCategories).toHaveBeenCalledTimes(1);
  expect(mockLanguages).toHaveBeenCalledTimes(1);
});

it("shares one request between callers that ask at the same time", async () => {
  const a = renderHook(() => useTenThingsReference());
  const b = renderHook(() => useTenThingsReference());
  await waitFor(() => expect(b.result.current.categoryOptions).toEqual(music));
  expect(a.result.current.categoryOptions).toEqual(music);
  expect(mockCategories).toHaveBeenCalledTimes(1);
});

it("stays empty when a fetch fails, and the next caller tries again", async () => {
  mockCategories.mockRejectedValueOnce(new Error("500"));
  const first = renderHook(() => useTenThingsReference());
  await waitFor(() => expect(first.result.current.languageOptions).toEqual(dutch));
  expect(first.result.current.categoryOptions).toEqual([]);

  const second = renderHook(() => useTenThingsReference());
  await waitFor(() => expect(second.result.current.categoryOptions).toEqual(music));
  expect(mockCategories).toHaveBeenCalledTimes(2);
});

it("fetches nothing while disabled", () => {
  renderHook(() => useTenThingsReference(false));
  expect(mockCategories).not.toHaveBeenCalled();
  expect(mockLanguages).not.toHaveBeenCalled();
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formError = (filed: string, state: any | null) => {
  if (state && state.errors) {
    return state.errors.find((error: any) => error.field === filed)?.message;
  } else {
    return null;
  }
};

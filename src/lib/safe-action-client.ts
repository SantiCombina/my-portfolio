import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const isDev = process.env.NODE_ENV === 'development';
const MIN_ACTION_DURATION = isDev ? 1500 : 0;

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e.message) return e.message;
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(async ({ next, clientInput }) => {
  const startTime = performance.now();
  const actionId = Math.random().toString(36).substring(2, 9);

  if (isDev) {
    console.log(`[${actionId}] Action started`);
    console.log(`[${actionId}] Input:`, clientInput);
  }

  try {
    const result = await next();
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);

    if (isDev) {
      console.log(`[${actionId}] Completed in ${duration}ms`);
      console.log(`[${actionId}] Output:`, result);
    }

    if (isDev && duration < MIN_ACTION_DURATION) {
      await wait(MIN_ACTION_DURATION - duration);
    }

    return result;
  } catch (error) {
    if (isDev) console.error(`[${actionId}] Action failed:`, error);
    throw error;
  }
});

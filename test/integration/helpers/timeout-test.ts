const delay = async (time: number) => new Promise<void>(resolve => {
  setTimeout(() => {
    resolve();
  }, time);
});

// (kolyaventuri): A helper file that assumes a promise has passed if it doesn't resolve within a timeout
export const timeoutTest = async (func: (...args: any[]) => Promise<any>, timeout: number): Promise<void> => {
  let hasFailed = false;

  func()
    .then(() => {
      hasFailed = false;
    })
    .catch(error => {
      hasFailed = true;
      throw error;
    });

  await delay(timeout);

  if (hasFailed) {
    throw new Error('Test did not pass within the timeout, for an unknown reason');
  }
};

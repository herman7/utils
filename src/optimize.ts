
export const setAnimationInterval = (cb, interval) => {
  let timer = null;
  let now = Date.now;
  let startTime = now();
  let endTime = startTime;
  let loop = () => {
    timer = requestAnimationFrame(loop);
    endTime = now();
    if (endTime - startTime >= interval) {
      startTime = now();
      endTime = startTime;
      cb();
    }
  }
  timer = requestAnimationFrame(loop);
  return timer
}

export const setAnimationTimeout = (cb, interval) => {
  let timer = null;
  let now = Date.now;
  let startTime = now();
  let endTime = startTime;
  let loop = () => {
    timer = requestAnimationFrame(loop);
    endTime = now();
    if (endTime - startTime >= interval) {
      cb();
      cancelAnimationFrame(timer);
    }
  }
  timer = requestAnimationFrame(loop);
  return timer;
}
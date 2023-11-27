const timestampGenerator = () => {
  const timeElapsed = Date.now();
  const timeNow = new Date(timeElapsed);
  const timeStamp = timeNow.toISOString();
  return timeStamp;
}

export { timestampGenerator }
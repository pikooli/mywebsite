const pause = async (second: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

export default pause;

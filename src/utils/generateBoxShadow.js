const generateBoxShadow = (n) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
    Math.random() * 2000
  )}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 2000
    )}px #FFF`;
  }
  return value;
};

const shadowSmall = generateBoxShadow(700);
const shadowMedium = generateBoxShadow(200);
const shadowBig = generateBoxShadow(100);

const root = document.documentElement;

root.style.setProperty("--shadows-small", shadowSmall);
root.style.setProperty("--shadows-medium", shadowMedium);
root.style.setProperty("--shadows-big", shadowBig);

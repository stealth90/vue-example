export const capitalize = (sentence: string) => {
  return (
    sentence
      ?.split(" ")
      ?.map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
      ?.join(" ") || ""
  );
};

export const pickTextColorBasedOnBgColorSimple = (bgColor: string) => {
  const color = bgColor.substring(1, 7);
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff";
};

export const generateRandomColor = (): {
  backgroundColor: string;
  color: string;
} => {
  const HEX_CODE_VALUES = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const newColor = [];
  while (newColor.length < 6) {
    const randomNumber = Math.floor(Math.random() * HEX_CODE_VALUES.length);
    const color = HEX_CODE_VALUES[randomNumber] + "";
    newColor.push(color);
  }

  const backgroundColor = `#${newColor.join("")}`;
  const color = pickTextColorBasedOnBgColorSimple(backgroundColor);
  return { backgroundColor, color };
};

export const saveToLocalStorage = <T extends any>(key:string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const readFromLocalStorage = <T extends any>(key:string): T | null => {
  const data = localStorage.getItem(key);
  if(data){
    return JSON.parse(data)
  }
  return null
};

export default { capitalize, generateRandomColor };

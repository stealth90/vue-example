export const capitalize = (sentence: string) => {
  return (
    sentence
      ?.split(" ")
      ?.map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
      ?.join(" ") || ""
  );
};

export default capitalize;

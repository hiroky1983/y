// ページパスを受け取ってルフィかゾロを返す
export const getName = async (path: string) => {
  const name = path === "/" ? "Luffy" : "Zoro";

  return name;
};

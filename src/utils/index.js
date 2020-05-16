export const handleSpacing = (value) => {
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "object" && value.length >= 2 && value.length <= 4) {
    return value.map((unit) => `${unit}px`).join(" ");
  }
  return 0;
};

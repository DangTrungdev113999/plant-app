export const handleSpacing = (value) => {
  if (typeof value === "number") return `${value}`;
  if (typeof value === "object" && value.length >= 2 && value.length <= 4) {
    return value
      .map((unit, idx) => (idx === value.length - 1 ? `${unit}` : `${unit}px`))
      .join(" ");
  }
  return 0;
};

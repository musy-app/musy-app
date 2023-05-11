const convertRGBtoRGBA = (rgb: string, alpha: number): string => {
  const rgbArray = rgb.replace(/[^\d,]/g, "").split(",");
  return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${alpha})`;
};

export default convertRGBtoRGBA;

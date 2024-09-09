import fs from "fs";

export const imageToBase64 = async (imagePath: string) => {
  const file = fs.readFileSync(imagePath);
  const base64 = file.toString("base64");
  return `data:image/png;base64,${base64}`;
};

export const parseDataFromDb = (initialData: string[] | undefined) => {
  let parsedData: any = [];

  if (Array.isArray(initialData)) {
    try {
      parsedData = initialData.map((str: string) => {
        if (typeof str === "string") {
          return JSON.parse(str);
        }
        throw new Error("Invalid JSON string");
      });
    } catch (e) {
      console.error("Failed to parse parsedData:", e);
    }
  }

  return parsedData;
};

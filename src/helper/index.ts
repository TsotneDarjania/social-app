import fs from "fs";

export async function imageToBase64(imagePath: string) {
  const file = await fs.readFileSync(imagePath);
  const base64 = file.toString("base64");
  return `data:image/png;base64,${base64}`;
}

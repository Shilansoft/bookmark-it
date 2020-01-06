import fs from "fs";
import Link from "./models/Link";

const links = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/links.json`, "utf-8"),
);

// Import into DB
export const importData = async () => {
  try {
    const rows = await Link.find();
    if (!rows || rows.length === 0) {
      console.log("Database is empty...\t\n".yellow.inverse);
      await Link.create(links);
      console.log("Data Imported...\t".green.inverse);
    }
  } catch (err) {
    console.error(err);
  }
};

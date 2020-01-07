import fs from "fs";
import Link from "./models/Link";
import Category from "./models/Category";
import Tag from "./models/Tag";

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/categories.json`, "utf-8"),
);

const tags = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/tags.json`, "utf-8"),
);

const links = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/links.json`, "utf-8"),
);

const [category] = categories;
const data = links.map((link) => ({
  ...link,
  category,
  tags,
}));

// Import into DB
export const importData = async () => {
  try {
    await Category.create(categories);
    await Tag.create(tags);

    const rows = await Link.find();
    if (!rows || rows.length === 0) {
      console.log("Database is empty...\t\n".yellow.inverse);
      await Link.create(data);
      console.log("Data Imported...\t".green.inverse);
    }
  } catch (err) {
    console.error(err);
  }
};

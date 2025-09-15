const fs = require("fs-extra");
const path = require("path");

const source = path.resolve(
  __dirname,
  "node_modules/insillion-common-utilities-fe-tarun/dist/insillion-common-utilities-fe-tarun/browser/main.js"
);
const destination = path.resolve(__dirname, "public/assets/common-utility.js");

try {
  fs.copySync(source, destination, { overwrite: true });
  console.log("Successfully copied common-utility.js to assets folder!");
} catch (err) {
  console.error("Error copying file:", err);
}

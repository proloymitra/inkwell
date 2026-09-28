import fs from "fs";
const h = fs.readFileSync("index.html", "utf8");
const i = h.indexOf("function onGameKey");
console.log("onGameKey", i);
console.log(h.slice(i, i + 2200));
console.log("\n==== LISTENERS ====");
let p = 0, n = 0;
while ((p = h.indexOf("keydown", p)) >= 0 && n < 12) {
  console.log(p, h.slice(p - 30, p + 40).replace(/\n/g, " "));
  p += 7; n++;
}

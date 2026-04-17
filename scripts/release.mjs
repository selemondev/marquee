import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const SIBLINGS = ["packages/vue3-marquee/package.json", "www/docs/package.json"];
const ROOT = "package.json";
const ALL = [ROOT, ...SIBLINGS];

const args = process.argv.slice(2);
const explicit = args.find((a) => /^\d+\.\d+\.\d+/.test(a)); // e.g. "1.0.0"
const bumpFlag = args.filter((a) => a.startsWith("--")).join(" ");

let version;

if (explicit) {
  for (const p of ALL) {
    const pkg = JSON.parse(readFileSync(p, "utf8"));
    pkg.version = explicit;
    writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
  }
  execSync("pnpx changelogen@latest", { stdio: "inherit" }); // no --bump
  version = explicit;
} else {
  execSync(`pnpx changelogen@latest --bump ${bumpFlag}`, { stdio: "inherit" });
  version = JSON.parse(readFileSync(ROOT, "utf8")).version;
  for (const p of SIBLINGS) {
    const pkg = JSON.parse(readFileSync(p, "utf8"));
    pkg.version = version;
    writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
  }
}

execSync("git add -A", { stdio: "inherit" });
execSync(`git commit -m "chore(release): v${version}"`, { stdio: "inherit" });
execSync(`git tag v${version}`, { stdio: "inherit" });
execSync("git push --follow-tags", { stdio: "inherit" });

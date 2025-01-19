const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const packageJsonPath = path.resolve(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const version = packageJson.version;

const zipFileName = `futureisnowoldman-text-removed-${version}.zip`;
const outputDir = path.resolve(__dirname, "dist");
const outputFilePath = path.join(outputDir, zipFileName);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const output = fs.createWriteStream(outputFilePath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
    console.log(`Created zip file: ${outputFilePath} (${archive.pointer()} bytes)`);
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);

const srcDir = path.resolve(__dirname, "src");
archive.directory(srcDir, false);

archive.finalize();

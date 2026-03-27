const fs = require('fs');
const path = require('path');
const targetDir = 'c:\\Users\\ASUS\\Desktop\\Hungerhub';
const sourceDir = path.join(targetDir, 'temp-app');

try {
    const filesToMove = fs.readdirSync(sourceDir);
    for (const file of filesToMove) {
        fs.renameSync(path.join(sourceDir, file), path.join(targetDir, file));
    }
    fs.rmdirSync(sourceDir);
    fs.unlinkSync(__filename); // Remove this script
    console.log("Moved Next.js files successfully.");
} catch (e) {
    console.error("Error moving files:", e);
}

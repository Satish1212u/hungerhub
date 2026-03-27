const fs = require('fs');
const path = require('path');
const targetDir = 'c:\\Users\\ASUS\\Desktop\\Hungerhub';
const sourceDir = path.join(targetDir, 'temp-app');

try {
    const filesToMove = fs.readdirSync(sourceDir);
    for (const file of filesToMove) {
        if (file === 'node_modules') continue;
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);
        try {
            fs.renameSync(sourcePath, targetPath);
        } catch (e) {
            console.error("Failed to move", file, e);
        }
    }
    console.log("Moved remaining files.");
} catch (e) {
    console.error("Error reading dir:", e);
}

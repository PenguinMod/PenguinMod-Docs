/**
 * @fileoverview Fixes images in static/img/docimages with an upper-case png extension (.PNG) to have a lowercase one.
 * This is caused by Snipping Tool in Windows 10.
 */

(async () => {
    const path = require("path");
    const fs = require("fs").promises;
    
    const docimages = path.join(__dirname, "../static/img/docimages");

    // readdirSync doesnt always get every single file.... for some stupid reason?
    const files = await fs.readdir(docimages, {
        withFileTypes: true,
        recursive: true,
    });
    const filesWithPNG = files
        .filter(file => file.name.endsWith(".PNG"))
        .map(file => `${file.parentPath}/${file.name}`);
        
    if (filesWithPNG.length <= 0) return console.log("No upper-case .PNG files found.");
    
    for (const filePath of filesWithPNG) {
        const fileEndingInDot = filePath.substring(0, filePath.length - 3);
        await fs.rename(filePath, fileEndingInDot + "temp.png");
        await fs.rename(fileEndingInDot + "temp.png", fileEndingInDot + "png");
    }
})();
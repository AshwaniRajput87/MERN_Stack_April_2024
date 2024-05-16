/**

   NodeJS modules:

     1. fs
     2. http
     3. path
     4. os

     NodeJS references: 
     1. https://flaviocopes.com/nodejs/
     2. https://flaviocopes.pages.dev/books/node-handbook.pdf
*/

const os = require('os');

console.log(os.arch());
console.log(os.cpus());

console.log(os.release());

/**

Project: 1 (Give as an assignment)

-> Create a project to scan the files in downloads folder and categorise them as compressed ( for rar, zip, 7zip files ), documents ( txt, xlsx, pdf, etc ) , audio and video files.

Impl Algo:

1. Read the Downloads Directory: Use fs.readdir or fs.readdirSync to list all files in the downloads directory.

2. Categorize Files: Loop through the files, use the path module to extract file extensions, and categorize files based on their extension.

3. path.extname() method: This method returns the extension of the file from a file path.

4. Move Files: Create separate folders for each category and move files into the appropriate folder using fs.rename or fs.copyFile.

o/p:
pdf
 - all pdf files
docx
 - all doc files
zip
 - all zip files


*/
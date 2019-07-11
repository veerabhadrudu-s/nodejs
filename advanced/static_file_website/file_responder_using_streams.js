const fs = require('fs');

function serveFileUsingStream(filePath, response) {

  const rs = fs.createReadStream(filePath);
  let fileContent = '';

  rs.on('readable', () => {
    // Write using buffer length not working. 
    //let dataReadFromStream = rs.read(1000);
    let dataReadFromStream = rs.read();
    if (dataReadFromStream != null) {
      fileContent = dataReadFromStream instanceof Buffer ? dataReadFromStream.toString() : typeof dataReadFromStream == 'string' ? dataReadFromStream : dataReadFromStream.toString();
      //console.trace(`Writing buffer content ${fileContent} of file ${filePath}`);
      let isWritecompleted = response.write(fileContent);
      console.debug(`Is Write completed for ${filePath} - ${isWritecompleted}`);
      if (!isWritecompleted) {
        //To see this warn message add more random text content in any file.
        console.warn(`Hold on write operation for file ${filePath} is not completed !!!`);
        rs.pause();
      }
    }
  });

  rs.on('drain', () => {
    console.warn(`Hold on write operation for file ${filePath} is not completed !!!`);
    rs.resume();
  });

  rs.on('end', () => {
    console.debug(`Completed write for file ${filePath}`);
    response.end();
  });

  rs.on('error', (error) => {
    console.error(`Exception occured ${JSON.stringify(error)} while reading the file - ${filePath}`);
    response.statusCode = 404;
    response.end(JSON.stringify({ code: "file_not_found", message: `Requested ${filePath} page/file not found ` }));
  });

}

module.exports = { serveFileUsingStream: serveFileUsingStream }
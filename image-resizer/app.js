const sharp = require('sharp');

exports.lambdaHandler = async (event, context, callback) => sharp(Buffer.from(event.body, 'base64'))
  .resize(100,100)
  .png()
  .toBuffer()
  .then(image => ({
    statusCode: 200,
    body: image.toString('base64'),
    headers: {'content-type':'image/png'},
    isBase64Encoded: true,
  }));

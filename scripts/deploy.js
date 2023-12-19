const AWS = require('aws-sdk')
const mime = require('mime-types')
const fs = require('fs')
const path = require('path')
const constants = require('./deployConstants')

const config = {
  s3BucketName: constants.bucketName,
  folderPath: '../public'
}

const s3 = new AWS.S3({
  signatureVersion: 'v4'
})

const distFolderPath = path.join(__dirname, config.folderPath)

var win32 = process.platform === 'win32'

function unixifyPath(filepath) {
  if (win32) {
    return filepath.replace(/\\/g, '/')
  } else {
    return filepath
  }
}

function walk(rootdir, callback, subdir) {
  var isSubdir = !!subdir
  var abspath = subdir ? path.join(rootdir, subdir) : rootdir
  fs.readdirSync(abspath).forEach(function (filename) {
    var filepath = path.join(abspath, filename)
    if (fs.statSync(filepath).isDirectory()) {
      walk(rootdir, callback, unixifyPath(path.join(subdir || '', filename || '')))
    } else {
      fs.readFile(filepath, (error, fileContent) => {
        if (error) {
          throw error
        }

        const mimeType = mime.lookup(filepath)

        var s3Obj = {
          Bucket: `${config.s3BucketName}/${subdir}`,
          Key: filename,
          Body: fileContent,
          ContentType: mimeType
        }

        if (isSubdir) {
          s3Obj.Bucket = `${config.s3BucketName}/${subdir}`
        } else {
          s3Obj.Bucket = config.s3BucketName
        }
        s3.putObject(s3Obj, (res) => {
          console.log(`Successfully uploaded '${filepath}' with MIME type '${mimeType}'!`)
        })
      })
    }
  })
}

walk(distFolderPath, function (filepath, rootdir, subdir, filename) {
  console.log('Filepath', filepath)
})

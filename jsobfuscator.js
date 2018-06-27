var JavaScriptObfuscator = require('javascript-obfuscator');
var fs = require('fs');
var outputFile = fs.createWriteStream("test123.js");

fs.readFile('practice.js', "UTF-8", function(err, data) {
    if (err) {
        throw err;
    }
var obfuscationResult = JavaScriptObfuscator.obfuscate(data)
outputFile.write(obfuscationResult.getObfuscatedCode())
});
// fs.readFile('linkes.js', "UTF-8", function(err, data) {
//     if (err) {
//         throw err;
//     }

// var obfuscationResult = JavaScriptObfuscator.obfuscate(data)


// console.log(obfuscationResult.getObfuscatedCode());

// present.write("\n")
// present.write(obfuscationResult.getObfuscatedCode())
// });



// });
// var obfuscationResult
// // var array = [];
// // var dirname = "array";
// // var i = 1;
// // var value = true;
// var dirname="array/dist"

// fs.readdir(dirname, function (err, filenames) {
//     if (err) {
//         return;
//     }
//     console.log(filenames)
//     filenames.forEach(function (fileName) {
        
//         let name = dirname + "/" + fileName;
//        fs.readFile(name, 'utf-8', function (err, content) {
          
//             if (err) {
//                 return;
//             }
//             console.log(content)
//             obfuscationResult = JavaScriptObfuscator.obfuscate(content);
//             console.log(obfuscationResult.getObfuscatedCode());
//             present.write(obfuscationResult.getObfuscatedCode())
//         });
//     });
    
// });



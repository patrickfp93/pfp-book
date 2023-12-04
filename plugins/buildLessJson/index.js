import fs from "fs";
import consola from "consola";
import path from 'path';
const extensionTs = ".ts";
const extensionLessTs = ".less" + extensionTs;

const buildLessJson = (removeAcronymPx) => {
    return {
        name: 'build-less-json',
        resolveId(source, importer) {
            if (source.slice(-extensionLessTs.length) === extensionLessTs) {
                const newPath = importer.substring(0, importer.lastIndexOf('/'))
                + "/" + source.substring(source.indexOf('/'), source.length);
                console.log("newPath",newPath);
                console.log("__filename",__filename);
                const supportPath = __filename.substring(0,__filename.lastIndexOf('\\')) + "/lessToJson.ts";
                console.log("supportPath",supportPath);
                const lessToJsonContentFile = fs.readFileSync(supportPath);
                const content = 
                `import lessFile from "./index.less?inline";
///support
${lessToJsonContentFile}
////////////////////////////////////////////////////////////

const style = await lessToJson(lessFile,${removeAcronymPx});                    
export default style;`;
                    fs.writeFile(newPath, content, (err) => {
                        if (!err) {
                            consola.log(new Date().toLocaleTimeString('en-US', { hour12: false }),"\x1b[36m","[build-less-json]",
                            "\x1b[0m",'Json file('+source+') create/updated successfully!');
                        }else{
                            console.error("buildLessJson: ", err);
                        }
                    });                
                return newPath;
            }
            return source;
        },
        /*async load(id) {
          if(id.slice(-extensionLessJson.length) === extensionLessJson){            
              const lessPath = id.substring(0,id.lastIndexOf(extensionJson));
              //console.log("lessPath: ", lessPath);
              const lessCode = await readFile(lessPath);
              const json = await lessToJson(lessCode,"",removeAcronymPx);
              if(makeModuleDeclarationFile){
                  const fileName = id.substring(id.lastIndexOf('/')+1);
                  const content = `declare module '${fileName}' {const style: any;export default style;}`;
                  fs.writeFile(id + '.d.ts', content, (err) => {
                      if (!err) {
                          consola.log(new Date().toLocaleTimeString('en-US', { hour12: false }),"\x1b[36m","[build-less-json]",
                          "\x1b[0m",'Json file(' + id + '.d.ts' + ') create/updated successfully!');
                      }else{
                          console.error("buildLessJson: ", err);
                      }
                  });
              }
              return json;
          }else if(id.slice(-extensionLessTs.length) === extensionLessTs){
              const lessPath = id.substring(0,id.lastIndexOf(extensionTs));
              const lessCode = await readFile(lessPath);
              const json = await lessToJson(lessCode,"",removeAcronymPx);
              console.log("lessPath>>>>>>>>>>>>>: ", lessPath);
              return json;
          }
        }*/
    };
};
export default buildLessJson;
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
                /*console.log("newPath",newPath);
                console.log("__filename",__filename);
                const supportPath = __filename.substring(0, __filename.lastIndexOf('\\')) + "/suport.less.ts";
                //console.log("supportPath",supportPath);
                const lessToJsonContentFile = fs.readFileSync(supportPath);*/
                const realtiveSuportPath = getSupportFileRelativePath(newPath);
                console.log("realtiveSuportPath",realtiveSuportPath);
                const content =
`import lessFile from "./index.less?inline";
import lessToJson from "${realtiveSuportPath}";
const style = lessToJson(lessFile,${removeAcronymPx});                    
export default style;`;
                fs.writeFile(newPath, content, (err) => {
                    if (!err) {
                        consola.log(new Date().toLocaleTimeString('en-US', { hour12: false }), "\x1b[36m", "[build-less-json]",
                            "\x1b[0m", 'Json file(' + source + ') create/updated successfully!');
                    } else {
                        console.error("buildLessJson: ", err);
                    }
                });
                return newPath;
            }
            return source;
        },
    };
};

const nameSupportFile = "less.support.ts";

function getSupportFileRelativePath(localSupportPath) {
    const origin = __filename.substring(0, __filename.lastIndexOf('\\')) + "/"+nameSupportFile;
    const srcPath = path.join(process.cwd(), 'src');
    const destination = path.join(srcPath,nameSupportFile);
    const relativeDestination = path.relative(path.dirname(localSupportPath), destination);
    // Lê o conteúdo do arquivo de origem
    try {
        fs.accessSync(destination, fs.constants.F_OK);
    }
    catch(_){
        fs.readFile(origin, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading source file: ${err.message}`);
                return;
            }

            // Escreve o conteúdo no arquivo de destino
            fs.writeFile(destination, data, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing to destination file: ${err.message}`);
                    return;
                }

                console.log('File copied successfully!');
            });
        });
    } finally{
        return relativeDestination.split('\\').join('/');
    }
}


export default buildLessJson;
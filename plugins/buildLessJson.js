import fs from "fs";
import path from 'path';
import less from "less";

const extensionJson = ".json";
const extensionLessJson = ".less"+extensionJson;

const buildLessJson = (removeAcronymPx) => {
    return {
      name: 'build-less-json',
      resolveId(source,importer) {
          if (source.slice(-extensionLessJson.length) === extensionLessJson){            
            const resource = importer.substring(0, importer.lastIndexOf('/'))
             + source.substring(source.indexOf('/'),source.length);            
            return resource;
        }        
        return source;
      },
      async load(id) {
        if(id.slice(-extensionLessJson.length) === extensionLessJson){
            const lessPath = id.substring(0,id.lastIndexOf(extensionJson));
            //console.log("lessPath: ", lessPath);
            const lessCode = await readFile(lessPath);
            const json = await lessToJson(lessCode,"",removeAcronymPx);
            return json;
        } 
      }
    };
  };
  export default buildLessJson;


/*export async function auxBuildLessJson(jsonFilePath, removeAcronymPx) {
    const removeAPx = removeAcronymPx ?? true;
    const lessFilePath = jsonFilePath.replace(".json", "");
    try {
        console.log("lessFilePath",lessFilePath);
        const lessContent = await fs.readFile(lessFilePath, 'utf8');
        const lessTime = await fs.stat(lessFilePath, 'utf8').mtime;
        readFile(jsonFilePath).then((err, data) => {
            if (err) {
                lessToJson(lessContent,lessTime,removeAPx).then((data) => {
                    fs.writeFile(jsonFilePath, data, (err) => {
                        if (!err) {
                            console.log('File(' + jsonFilePath + ') created successfully!');
                        }else{
                            console.error("buildLessJson: ", err);
                        }
                    });
                }).err((err) => {
                    console.error("buildLessJson: ", err);
                });
                return;
            }
            const jsonTime = JSON.parse(data).timeBuilderLess;
            if (lessTime !== jsonTime){
                lessToJson(lessContent,lessTime,removeAPx).then((data) => {
                    fs.writeFile(jsonFilePath, data, (err) => {
                        if (!err) {
                            console.log('File(' + jsonFilePath + ') updated successfully!');
                        }else{
                            console.error("buildLessJson: ", err);
                        }
                    });
                }).err((err) => {
                    console.error("buildLessJson: ", err);
                });
            }
        });

        return true;
    } catch (err) {
        return false;
    }
}*/


async function readFile(path) {
    try {
        // Tenta ler o arquivo
        const content = fs.readFileSync(path, 'utf-8');
        return content;
    } catch (err) {
        // Se houver um erro (por exemplo, o arquivo não existe), retorna null
        return null;
    }
}

function nomarlizeJsonItemName(str) {
    // Dividir a string pelo traço
    const r0 = /[-:]/;
    const r1 = /[!@#$%^&*()_+{} \[\];<>,.?~\\/]/;
    if (r0.test(str)) {
        var parts = str.split('-');

        // Capitalizar a primeira letra da segunda palavra
        parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);

        // Concatenar as duas partes
        var result = parts.join('');

        return result;
    } else if (r1.test(str) || str.indexOf(' ') !== -1) {
        return undefined;
    }

    return str;
}

async function lessToJson(code,lessTime,removeAcronymPx) {
    try {        
        // Compilar o LESS para CSS
        const output = await less.render(code);

        // Extrair as regras CSS do código LESS compilado
        const cssRules = output.css;

        // Criar um objeto JavaScript diretamente das regras CSS
        const stylesObject = {};
        const lines = cssRules.replace("{", "").replace("}", "").split('\n');
        let currentSelector = '';

        lines.forEach((line) => {
            //console.log("//",line);
            if (line.trim().startsWith('.')) {
                // Início de um seletor CSS
                currentSelector = nomarlizeJsonItemName(line.trim().replace(/,$/, '').replace("{", "").replace("}", "").replace(".", "").replace(" ", ""));
                stylesObject[currentSelector] = {};
            } else {
                // Propriedades e valores CSS
                let [property, value] = line.trim().replace(";", "").split(':');
                property = nomarlizeJsonItemName(property);

                //console.log("normalizedProperty: ",property,"*---*",normalizedProperty);
                if (property && value) {
                    if (removeAcronymPx && value.indexOf('px') !== -1) {
                        value = value.trim().replace("px", "");
                        stylesObject[currentSelector][property.trim()] = Number.parseFloat(value.trim());
                    }
                    else stylesObject[currentSelector][property.trim()] = value.trim();
                }
            }
        });
        return JSON.stringify(stylesObject);
    } catch (error) {
        return error;
    }

}

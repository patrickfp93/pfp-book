import less from 'less';
import fs from "fs";

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


const lessToJson = (removeAcronymPx) => {
  return {
    name: 'less-to-json',
    async transform(code, id) {
      if (id.endsWith('.module.less')) {
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
          //console.log("stylesObject", stylesObject)
          let newCode = JSON.stringify(stylesObject);
          return {
            code: newCode,
            map: null,
          };
        } catch (error) {
          console.error(error);
          return {
            code,
            map: null,
          };
        }
      }
    },
  };
};
export default lessToJson;


const writeStep2 = (dataLess,cssFileName) => lessToJson(true).transform(dataLess,cssFileName).then((dataJson)=>{
  const pathnewfile = cssFileName + ".json";
  fs.access(pathnewfile, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(pathnewfile, dataJson.code, (err) => {
        if (!err){
          console.log('File created successfully!');
        }
      });
      return;
    }  
    // Obter a data de modificação do arquivo
    fs.stat(pathnewfile, (err, stats) => {
      if (err) {
        console.error('Error getting file information:', err);
        return;
      }      
      const jsonTime = stats.mtime;
      fs.stat(cssFileName,(err,stats)=>{
        if (err) {
          console.error('Error getting file information:', err);
          return;
        }            
        const lessTime = stats.mtime;
        if(lessTime !== jsonTime){
          writeStep2(dataLess,cssFileName);
        }
      });        
    });
  }); 
})

export function writeJsonFile(cssFileName){
  fs.readFile(cssFileName, 'utf8', (err, dataLess) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    writeStep2(dataLess,cssFileName);
  });
}
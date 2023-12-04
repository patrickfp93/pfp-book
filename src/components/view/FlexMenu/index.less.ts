import lessFile from "./index.less?inline";
///support
import less from "less";

function nomarlizeJsonItemName(str : string) {
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

async function lessToJson(code : string, removeAcronymPx: boolean) {
    try {
        // Compilar o LESS para CSS
        const output = await less.render(code);

        // Extrair as regras CSS do código LESS compilado
        const cssRules = output.css;

        // Criar um objeto JavaScript diretamente das regras CSS
        const stylesObject : any = {};
        const lines = cssRules.replace("{", "").replace("}", "").split('\n');
        let currentSelector : string = '';

        lines.forEach((line,index) => {
            //console.log("//",line);
            if (line.trim().startsWith('.')) {
                // Início de um seletor CSS
                currentSelector = nomarlizeJsonItemName(line.trim().replace(/,$/, '').replace("{", "").replace("}", "").replace(".", "").replace(" ", "")) ?? "";
                stylesObject[currentSelector] = {};
            } else {
                // Propriedades e valores CSS
                let [property, value] = line.trim().replace(";", "").split(':');
                property = nomarlizeJsonItemName(property) ?? `underfined-${index}`;

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
        return stylesObject;
    } catch (error) {
        return error;
    }

}

////////////////////////////////////////////////////////////

const style = await lessToJson(lessFile,true);                    
export default style;
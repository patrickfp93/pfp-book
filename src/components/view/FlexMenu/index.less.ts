import lessFile from "./index.less?inline";
import lessToJson from "../../../less.support.ts";
const style = lessToJson(lessFile,true);                    
export default style;
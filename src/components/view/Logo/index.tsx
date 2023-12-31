import useThemeAppLayout from "../../../services/hooks/useThemeAppLayout";
import "./index.less";

export default function Logo() {
    const {themeState} = useThemeAppLayout();
    const classNameLine = "line-"+themeState;    
    const classNameFill = "fill-"+themeState;

    return (<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" version="1.1" clipRule="evenodd">
        <path className={classNameLine}  fill="none" strokeWidth="8" opacity="undefined" d="m50.33909,94.84869c-24.86188,0 -45,-20.13812 -45,-45c0,-24.86188 20.13812,-45 45,-45c24.86188,0 45,20.13812 45,45l-45,45z" />
        <path className={classNameLine}  transform="rotate(-6.04167 40.0118 38.2496)" fill="none" opacity="NaN" d="m24.24924,63.16473l30.50821,-21.69466l1.01695,-28.13554l-31.18638,21.01691l-0.33878,28.81329z" strokeWidth="2" />
        <path className={classNameFill} stroke="null" strokeWidth="2" opacity="NaN" d="m28.92111,66.92707l28.1511,-0.76324l24.39778,-24.04933l-25.02337,0.38173l-27.52551,24.43083l0,0.00001z" id="svg_44" />
        <path className={classNameFill + " " + classNameLine}  transform="rotate(-7.8225 36.8418 46.5411)" fill="#fb0862" opacity="NaN" d="m29.38427,57.72738l14.43388,-9.74041l0.48113,-12.63221l-14.75474,9.43611l-0.16028,12.93651l0.00001,0z" strokeWidth="2"/>
        <path className={classNameFill} transform="rotate(-6.23879 44.6955 29.1393)" fill="#fb0862" opacity="NaN" d="m37.23797,40.3256l14.43388,-9.74041l0.48114,-12.63221l-14.75474,9.43611l-0.16028,12.93651z" strokeWidth="2" />
    </svg>)
}
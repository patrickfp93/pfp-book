import "./index.less";

type WarmingBuilderProps = {
    componentName : String
};

export default function WarmingBuilder({componentName}:WarmingBuilderProps) {
    return (<div className={"construction-container "}>
        <div className="construction-icon">&#x1F6A7;</div>
        <div className="construction-heading">Site em Construção</div>
        <div className="construction-text">Estou trabalhando duro para melhorar o  site e logo {componentName} estará pronto!</div>
    </div>)
}
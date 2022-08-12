import { IContainer } from "../../interfaces/IContainer";

export function Title(props:IContainer){
    const {classStyle, text} = props;

    return(
        <h1 className={classStyle}>{text}</h1>
    )
}
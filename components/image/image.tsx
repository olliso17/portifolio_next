import { IContainer } from "../../interfaces/IContainer";

export function ImagePhoto(props:IContainer){
    const {classStyle, text} = props;

    return(
        <img src={text} className={classStyle}></img> 
    )
}
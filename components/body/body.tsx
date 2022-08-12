import { IContainer } from "../../interfaces/IContainer";


export function Body(props:IContainer){
    const {child, classStyle}= props;
   return(
        <div className={classStyle}>
            {child}
        </div>
   );
}
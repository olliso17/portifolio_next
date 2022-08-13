import { IContainer } from "../../interfaces/IContainer";


export function Skill(props:IContainer){
    const {child, classStyle}= props;
   return(
        <div className={classStyle}>
            {child}
        </div>
   );
}
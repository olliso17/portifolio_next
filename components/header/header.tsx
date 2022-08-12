import { IContainer } from "../../interfaces/IContainer";


export function Header(props:IContainer){
    const {child, classStyle}= props;
   return(
        <div className={classStyle}>
            {child}
        </div>
   );
}

import { IContainer } from "../../interfaces/IContainer";


export function Card(props:IContainer){
    const {child, classStyle, onClick, target, href}= props;
   return(
    <a href={href} className={classStyle} target={target} onClick={()=>onClick}>
    {child}
  
</a>
   );
}
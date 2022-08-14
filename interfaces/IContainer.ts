export interface IContainer{
    child?: JSX.Element;
    classStyle?: string;
    text?: string;
    onClick?:React.MouseEvent<HTMLButtonElement>;
    href?: string;
    target?:string
}
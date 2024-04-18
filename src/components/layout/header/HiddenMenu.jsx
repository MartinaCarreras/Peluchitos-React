import style from './Header.module.css';
const { hiddenMenu } = style;

export const HiddenMenu = () => {
  return (
    <ul className={ hiddenMenu }>
       <li>Productos</li> 
       <li>Cotización</li> 
       <li>Blog</li> 
       <li>Contacto</li> 
    </ul>
  )
}

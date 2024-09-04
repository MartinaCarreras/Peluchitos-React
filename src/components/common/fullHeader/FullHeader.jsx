import { HeaderMenu } from "../headerMenu"

export const FullHeader = ({ actHamb }) => {
    
    return actHamb.map(({ key, path, title })=> {
        return <HeaderMenu
            key={key}
            path={path}
            title={title}
        />
    })
}

import { useContext } from "react"
import { HeaderContext } from "../../../context/headerContext"
import { FullHeader } from "./FullHeader";
import './fullHeader.css'

export const FullHeaderContainer = () => {
  const { actHamb } = useContext(HeaderContext);

  return (
    <main className="full_main">
      <FullHeader
        actHamb={actHamb}
      />
    </main>
  )
}

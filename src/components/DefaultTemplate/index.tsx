import { IProps } from "../../interfaces/propsInterface"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({children}:IProps) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
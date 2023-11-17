import { Header } from "@/components/Headers/Header"
import { Unauthenticated } from "./Contents/Unauthenticated";


export function UnauthenticatedHeader({ ...props }) {
    return (
        <Header opened={props.opened} toggle={props.toggle}>
            <Unauthenticated />
        </Header>
    )
} 
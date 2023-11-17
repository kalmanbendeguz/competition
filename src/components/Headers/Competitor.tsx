import { Header } from "@/components/Headers/Header"
import { Competitor } from "./Contents/Competitor";

export function CompetitorHeader({ ...props }) {
    return (
        <Header opened={props.opened} toggle={props.toggle}>
            <Competitor />
        </Header>
    )
} 
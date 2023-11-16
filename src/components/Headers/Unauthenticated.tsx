import { Header } from "@/components/Headers/Header"
import { Unauthenticated } from "./Contents/Unauthenticated";


export function UnauthenticatedHeader (){
    return Header({children: Unauthenticated() })
} 
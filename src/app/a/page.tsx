import { AuthenticatedShell } from '@/components/AuthenticatedShell'
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'

export default async function Home({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession();
    //const [opened, { toggle }] = useDisclosure();
    //let opened = true

    if (!session?.user?.name) {
        redirect('/')
    }

    //const role = session?.user?.role

    return (
        <>
            <AuthenticatedShell>
                {children}
            </AuthenticatedShell>
        </>
    )
}

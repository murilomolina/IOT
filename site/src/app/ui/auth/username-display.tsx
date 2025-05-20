import { auth } from  "@/auth"
 
export async function UserName() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div className="hidden font-bold sm:block">
    {session.user.name}
    </div>
  )
}
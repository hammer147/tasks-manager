import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { HiOutlineLogout } from "react-icons/hi"

const User = () => {
  const { data: session } = useSession()

  // const firstName = () => {
  //   if (session?.user?.name) {
  //     return session.user.name.split(" ")[0]
  //   }
  //   return ""
  // }

  // const lastName = () => {
  //   if (session?.user?.name) {
  //     return session.user.name.split(" ")[1]
  //   }
  //   return ""
  // }

  const email = () => session?.user?.email ?? ""


  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center border-r border-gray-400 pr-3 ">
        {/* <div className="relative h-20 w-20 ">
          <Image
            className="absolute rounded-full"
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? "user"}
            layout="fill"
          />
        </div> */}
        <div className="flex flex-col items-center font-bold text-gray-600">
          {/* <span>{firstName()}</span>
          <span>{lastName()}</span> */}
          <span>{email()}</span>
        </div>
      </div>
      {/* Logout  */}
      <button onClick={() => signOut({ callbackUrl: '/' })} className=" rounded-md mx-2">
        <HiOutlineLogout className="text-3xl transition-colors hover:text-red-500" />
      </button>
    </div>
  )
}

export default User

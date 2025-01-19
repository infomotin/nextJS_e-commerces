import { SignUp } from "@clerk/nextjs";


export default function SingUpPage() {
  return (
    <div className="flex items-center justify-center h-screen">
        <SignUp />
    </div>
  )
}

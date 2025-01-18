
import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-100 flex justify-center">
      <ThemeToggle>
        
      </ThemeToggle>
      </div>
      <h1 className="text-3xl  text-blue-500 font-barlow">Wellcome To Our Cources Page</h1>
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
}

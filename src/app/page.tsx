import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <p className="text-3xl font-dm-sans">Hello sagar</p>
      <Input />
      <Textarea placeholder="write some hit"></Textarea>
      <Button variant={"elevated"} >Sgar</Button>
      <Checkbox />
      <Progress value={40} />
      <Textarea />
    </div>
  )
}

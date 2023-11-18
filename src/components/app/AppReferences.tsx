import { Divider, Stack } from "rsuite";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiVite, SiVercel } from "react-icons/si";

export default function AppReferences() {
  return (
    <Stack
      spacing={6}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <SiVercel /><a href="https://vercel.com/" target="_blank"> Vercel</a>
      <Divider vertical />
      <SiVite /><a href="https://vitejs.dev/" target="_blank"> ViteJS</a>
      <Divider vertical />
      <SiTypescript /><a href="https://www.typescriptlang.org/" target="_blank"> Typescript</a>
      <Divider vertical />
      <FaReact /><a href="https://react.dev/" target="_blank"> React</a>
    </Stack>
  )
}
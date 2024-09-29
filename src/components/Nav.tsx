import { CgMenuRight } from "solid-icons/cg";
import { clientOnly } from "@solidjs/start";
import { BiRegularSearchAlt2 } from "solid-icons/bi";

const Menu = clientOnly(() => import("./Menu.tsx"));

export default function Nav() {
  return (
    <nav class="bg-purple-950 flex items-center gap-4 justify-between">
      <span class="flex gap-2 items-center text-2xl text-purple-100 font-bold w-fit">
        <img src="/logo.png" alt="" class="w-16" />
        Andern
      </span>
      <span class="flex items-center bg-purple-300 grow mx-4 rounded-lg py-1 px-2">
        <BiRegularSearchAlt2 size={32} color="#3B0764" />
        <input class="grow bg-transparent outline-none text-purple-950 mx-3 text-lg" />
      </span>
      <Menu
        fallback={<CgMenuRight class="mr-2 p-2" size={48} color="#F3E8FF" />}
      />
    </nav>
  );
}

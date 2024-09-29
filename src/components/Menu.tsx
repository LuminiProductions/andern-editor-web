import { Motion } from "solid-motionone";
import { Show, createSignal } from "solid-js";
import { IoCloseCircleOutline } from "solid-icons/io";
import { CgMenuRight } from "solid-icons/cg";
import { A } from "@solidjs/router";

export default function Menu() {
  const [show, setShow] = createSignal(false);

  const toggle = () => setShow((prev) => !prev);

  return (
    <>
      <Motion.button
        class="absolute top-0 left-0 h-full w-full bg-black flex justify-end"
        classList={{ "pointer-events-none": !show() }}
        animate={{ opacity: show() ? 0.5 : 0 }}
        transition={{ duration: 0.15 }}
        initial={{ opacity: 0 }}
        onClick={toggle}
      />
      <Motion.div
        class="flex absolute top-0 right-0 flex-col justify-between w-1/2 max-w-64 h-full bg-purple-950"
        animate={{ x: show() ? "0%" : "100%" }}
        transition={{ duration: 0.15 }}
        initial={{ x: "100%" }}
      >
        <div class="flex flex-col">
          <button
            class="p-4 w-full font-bold text-purple-100 text-xl flex flex-row justify-between items-center border-b-2 border-b-purple-100"
            onClick={toggle}
          >
            Close <IoCloseCircleOutline size={24} color="#F3E8FF" />
          </button>
          <Show>
            <span class="p-4 w-full font-bold text-purple-100 text-xl flex flex-row justify-between items-center border-b-2 border-b-purple-100">
              Login <IoCloseCircleOutline size={24} color="#F3E8FF" />
            </span>
          </Show>
        </div>
        <span class="p-4 flex justify-end items-center gap-2">
          <A
            class="font-bold py-1 px-3 text-purple-100"
            href="/account/sign-up"
            onClick={toggle}
          >
            Sign Up
          </A>
          <A
            class="bg-purple-100 py-1 px-3 text-purple-950 font-bold rounded-lg"
            href="/account/sign-in"
            onClick={toggle}
          >
            Sign In
          </A>
        </span>
      </Motion.div>
      <button onClick={toggle}>
        <CgMenuRight class="mr-2 p-2" size={48} color="#F3E8FF" />
      </button>
    </>
  );
}

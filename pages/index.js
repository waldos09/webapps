import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "<webclass>/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>
                  Aqui para aprernder next y tailwind
                </p>

                <button
                type="submit"
                class="rounded-2xl bg-emerald-300 px-5 hover:bg-emerald-500"
              >
                Ejercicio 1
              </button>

              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-gray-900">Documentacion</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-sky-500 hover:text-sky-600 mx-0.5"
                  >
                    tailwind  &rarr;
                  </a><br></br>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-sky-500 hover:text-sky-600"
                  >
                    Next.js  &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

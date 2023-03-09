import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "<webclass>/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div class="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-10">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <div className="p-10 max-w-sm mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-10">
        <button className="bg-sky-500 hover:bg-sky-700 rounded-xl flex-auto">
          Mira este trucaso
        </button>
      </div>
    </>
  );
}

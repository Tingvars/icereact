import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StartNewGame from "../components/StartNewGame";
import { Provider } from "jotai";

export default function Home() {
  return (
    <Provider>
      <StartNewGame />;
    </Provider>
  );
}

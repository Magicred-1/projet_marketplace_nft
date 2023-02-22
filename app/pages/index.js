import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
// import Header from "../components/Header";
import Header from "../components/Header"
import Hero from "../components/Hero/Hero";
import ImagesContainer from "../components/ImagesContainer/ImagesContainer";
// import Header from "../components/Header";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home = () => {
  // const side = process.browser ? "client" : "server";
  return (
    <>
    <Header/>
    <Hero/>
    <Banner/>
    <ImagesContainer/>
    </>
  );
};

export default Home;

import Head from "next/head";
import { Layout } from "antd";
import { Header } from "../../components/Header";

export default function Play() {
  return (
    <>
      <Head>
        <title>F5 Test - 모두의 테스트</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Layout>adsfa</Layout>
      </main>
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Degen Bears</title>
        <meta name="description" content="The NFT viewer for Degen Bears" />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;

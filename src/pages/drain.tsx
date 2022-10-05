import type { NextPage } from "next";
import Head from "next/head";
import { WalletView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Wallet Drainer</title>
        <meta
          name="description"
          content="Wallet Drainer"
        />
      </Head>
      <WalletView/>
    </div>
  );
};

export default Home;

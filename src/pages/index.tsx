import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Degen Bear Hub</title>
        <meta
          name="description"
          content="The Hub for all the utilities created by the Degen Bear Club"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;

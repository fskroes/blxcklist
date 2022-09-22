import type { NextPage } from "next";
import Head from "next/head";
import { BlxckmapView } from "../views";

const Blxckmap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKLIST | Map</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <BlxckmapView />
    </div>
  );
};

export default Blxckmap;

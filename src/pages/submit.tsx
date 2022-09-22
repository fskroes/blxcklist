import type { NextPage } from "next";
import Head from "next/head";
import { SubmitView } from "../views";

const Submit: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKLIST | Submit Profile</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <SubmitView />
    </div>
  );
};

export default Submit;

import Head from "next/head";
import { Fragment } from "react";

import Coin from "@containers/free-diamonds-coin/coin";

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>{"Get Diamonds"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6426436934865909"
          crossorigin="anonymous"></script>
      </Head>
      <div

      >
        <Coin />
      </div>
    </Fragment>
  );
}

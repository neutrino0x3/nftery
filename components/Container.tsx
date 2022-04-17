import {SidebarContainer} from "../components/Sidebar"
import Head from "next/dist/shared/lib/head";
import ToggleDark from "./ToggleDarkMode";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nftry</title>
        <meta name="robots" content="follow, index" />
        <meta content="An NFT Marketplace" name="description" />
      </Head>
      <main className="flex font-secular">
        <SidebarContainer />
        <section className="w-full">
          <Navbar />
          {children}
        </section>
        <ToggleDark />
      </main>
    </>
  );
};

export default Container;

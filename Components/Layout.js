import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children, title, description, keyword }) => {
  return (
    <div>
      {" "}
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width"></meta>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app_container">
        <Navbar />
        <NavbarMenu />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

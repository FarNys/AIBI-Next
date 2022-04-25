import Layout from "../Components/Layout";
import Header from "../Components/Home/Header";
import HomeMain from "../Components/Home/HomeMain";

const Home = () => {
  return (
    <Layout
      title="AIBI Homepage"
      description="Automation Webapp"
      keyword="Artificial Intelligence Bussines Intelligence Automation"
    >
      <div className="home_container">
        <Header />
        <HomeMain />
      </div>
    </Layout>
  );
};

export default Home;

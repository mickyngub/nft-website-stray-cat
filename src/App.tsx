import Header from "PageContent/Header/Header";
import Content1 from "PageContent/Content1/Content1";
import Content2 from "PageContent/Content2/Content2";
import Footer from "PageContent/Footer/Footer";
import Title from "PageContent/Title/Title";

function App() {
  return (
    <div className="bg-8bit-background bg-fixed font-press-start flex flex-col items-center overflow-hidden">
      <Title />
      <Header />
      <Content1 />
      <Content2 />
      <Footer />
    </div>
  );
}

export default App;

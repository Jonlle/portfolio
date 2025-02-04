import { Header, MainContainer, Footer } from "./components/layout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContainer>
        <h1 className="text-4xl font-bold text-heading">Mi Portfolio</h1>
        <p className="text-xl mt-6">Full Stack Developer | React Specialist</p>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

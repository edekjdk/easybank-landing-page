import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <InfoSection></InfoSection>
      <ArticlesSection></ArticlesSection>
      <Footer></Footer>
    </>
  );
};

export default App;

import { Description } from "./components/description";
import { Footer } from "./components/footer";

import { Form } from "./components/forms";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

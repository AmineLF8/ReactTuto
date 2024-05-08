import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider, SurveyProvider } from "./utils/context";

const Home = React.lazy(() => import("./pages/Home"));
const Survey = React.lazy(() => import("./pages/Survey"));
const Results = React.lazy(() => import("./pages/Results"));
const Freelances = React.lazy(() => import("./pages/Freelances"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} />
              <Route path="/results" element={<Results />} />
              <Route path="/freelances" element={<Freelances />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

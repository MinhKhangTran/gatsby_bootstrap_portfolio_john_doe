import * as React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <About />
      <Projects />
      <Experiences />
      <Education />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

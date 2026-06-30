/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import PipelineConfigurator from "./components/PipelineConfigurator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [specText, setSpecText] = useState("");
  const [projectType, setProjectType] = useState("");

  const handleApplySpec = (spec: string, type: string) => {
    setSpecText(spec);
    setProjectType(type);
  };

  const handleClearSpec = () => {
    setSpecText("");
    setProjectType("");
  };

  return (
    <div className="bg-background text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <Hero />
        <Expertise />
        <Portfolio />
        <Stats />
        <PipelineConfigurator onApplySpec={handleApplySpec} />
        <Contact
          initialSpecText={specText}
          initialProjectType={projectType}
          onClearSpec={handleClearSpec}
        />
      </div>
      <Footer />
    </div>
  );
}

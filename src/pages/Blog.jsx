import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";

export const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Get in Touch – We’re Here to Help!</h2>
          <p className="text-lg text-muted-foreground">
            Reach out for custom printing solutions, queries, or collaborations.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

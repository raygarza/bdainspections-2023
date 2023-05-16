import React from "react";
import Hero from "./components/home/Hero";
import CustomerService from "./components/home/CustomerService";
import Services from "./components/home/Services";
import GreenReviews from "./components/home/GreenReviews";
import RecentArticles from "./components/home/RecentArticles";
import ServiceArea from "./components/home/ServiceArea";

export default function Homepage() {
  return (
    <main>
      <div className="bg-white">
        <Hero />
      </div>

      <RecentArticles />
      <GreenReviews />
      <CustomerService />
      <Services/>
      <ServiceArea />

    </main>
  );
}

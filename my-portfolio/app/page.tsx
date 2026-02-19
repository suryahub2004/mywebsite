import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkCarousel from "./components/WorkCarousel";
import Challenges from "./components/Challenges";
import Solutions from "./components/Solutions";
import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <WorkCarousel /> */}
      <Challenges />
      <Solutions />
      <WhyChooseUs />
      <GetStarted />
      <Contact />
      <CTA />

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white"> */}
            {/* <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg> */}

            {/* <span className="text-xl font-bold tracking-tight text-primary">CodeDale</span> */}
          </div>

          <p className="text-muted-foreground text-sm">
            © 2026 Inc. All rights reserved. Built with love.
          </p>

          <div className="flex gap-6">
            {/* <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Terms of Service</a> */}
          </div>
        </div>
      </footer>
    </main >
  );
}


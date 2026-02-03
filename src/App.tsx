import { useState, useCallback } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import WinterBackground from "@/components/WinterBackground";
import SnowCanvas from "@/components/SnowCanvas";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Wrapper component to handle page transitions with loading screen
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Show short loading on route change
  if (location.pathname !== currentPath && !isLoading) {
    setIsLoading(true);
    setCurrentPath(location.pathname);
  }

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} isShort />
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-60' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

// Initial loading wrapper
const InitialLoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  if (!initialLoadComplete) {
    return (
      <>
        <WinterBackground />
        <SnowCanvas />
        <LoadingScreen onComplete={() => setInitialLoadComplete(true)} />
      </>
    );
  }

  return <>{children}</>;
};

const AppContent = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <WinterBackground />
      <SnowCanvas />
      <Navigation />
      
      <main className="flex-1 relative z-10">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </main>
      
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner 
        position="top-center"
        toastOptions={{
          style: {
            background: 'hsl(0 0% 100% / 0.12)',
            backdropFilter: 'blur(20px)',
            border: '1px solid hsl(0 0% 100% / 0.2)',
            color: 'white',
            borderLeft: '3px solid hsl(150, 32%, 18%)',
          },
        }}
      />
      <BrowserRouter>
        <InitialLoadingWrapper>
          <AppContent />
        </InitialLoadingWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

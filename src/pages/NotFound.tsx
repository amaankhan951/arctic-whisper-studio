import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlassCard from "@/components/GlassCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <GlassCard className="p-12 text-center max-w-md">
        <h1 className="font-display text-6xl text-white mb-4">404</h1>
        <p className="font-accent italic text-xl text-white/70 mb-8">
          Oops! This page seems to have drifted away like morning frost.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Return Home
        </Link>
      </GlassCard>
    </div>
  );
};

export default NotFound;

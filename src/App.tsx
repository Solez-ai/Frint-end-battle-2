import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingProgressBar from "@/components/ui/loading-progress-bar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the initial page load or a refresh
    const navigationEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    const isRefresh =
      navigationEntries.length > 0 && navigationEntries[0].type === "reload";
    const isInitialLoad = !sessionStorage.getItem("app-loaded") || isRefresh;

    if (isInitialLoad) {
      // Mark that the app has been loaded in this session
      sessionStorage.setItem("app-loaded", "true");
      setIsLoading(true);
    } else {
      // If it's not the initial load or refresh, skip the loading screen
      setIsLoading(false);
      setShowContent(true);
    }

    // Also listen for beforeunload to reset the session storage
    const handleBeforeUnload = () => {
      // Only clear if the user is actually leaving the site, not just refreshing
      if (performance.getEntriesByType("navigation").length > 0) {
        const navEntry = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (navEntry.type !== "reload") {
          sessionStorage.removeItem("app-loaded");
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingProgressBar onComplete={handleLoadingComplete} />}

        {showContent && (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

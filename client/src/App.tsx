import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnalyticsProvider } from "./components/Analytics";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Restaurant from "./pages/Restaurant";
import Brunch from "./pages/Brunch";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Culture from "./pages/Culture";
import Press from "./pages/Press";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/brunch" component={Brunch} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/culture" component={Culture} />
        <Route path="/press" component={Press} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AnalyticsProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

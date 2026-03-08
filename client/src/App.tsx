import { Analytics } from "@vercel/analytics/react";
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
import BrunchNearMe from "./pages/BrunchNearMe";
import RestaurantsNearMe from "./pages/RestaurantsNearMe";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Culture from "./pages/Culture";
import Press from "./pages/Press";
import PrivateEvents from "./pages/PrivateEvents";
import LocalSpots from "./pages/LocalSpots";
import LeaveReview from "./pages/LeaveReview";
import AdminNewsletter from "./pages/AdminNewsletter";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import { Redirect } from "./components/Redirect";

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Main Pages */}
        <Route path="/" component={Home} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/brunch" component={Brunch} />
        <Route path="/brunch-near-me-miami-beach" component={BrunchNearMe} />
        <Route path="/restaurants-near-me-miami-beach" component={RestaurantsNearMe} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/culture" component={Culture} />
        <Route path="/press" component={Press} />
        <Route path="/private-events" component={PrivateEvents} />
        <Route path="/local-spots" component={LocalSpots} />
        <Route path="/leave-review" component={LeaveReview} />
        <Route path="/admin/newsletter" component={AdminNewsletter} />

        {/* ============================================ */}
        {/* SEO REDIRECTS - Old URLs from previous site */}
        {/* Added: January 7, 2026                      */}
        {/* Purpose: Fix Google Search Console errors   */}
        {/* ============================================ */}
        
        {/* Menu redirects → Restaurant */}
        <Route path="/menu/dinner">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/dinner/">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/happy-hour">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/happy-hour/">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/miami-spice">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/miami-spice/">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menu/">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menus">{() => <Redirect to="/restaurant" />}</Route>
        <Route path="/menus/">{() => <Redirect to="/restaurant" />}</Route>
        
        {/* Event redirects → Brunch or Contact */}
        <Route path="/event/august-3rd-music-brunch">{() => <Redirect to="/brunch" />}</Route>
        <Route path="/event/august-3rd-music-brunch/">{() => <Redirect to="/brunch" />}</Route>
        <Route path="/event/august-3rd-music-brunch//">{() => <Redirect to="/brunch" />}</Route>
        <Route path="/event/private-balconies">{() => <Redirect to="/private-events" />}</Route>
        <Route path="/event/private-balconies/">{() => <Redirect to="/private-events" />}</Route>
        
        {/* Old page redirects → Homepage or relevant pages */}
        <Route path="/explore">{() => <Redirect to="/" />}</Route>
        <Route path="/explore/">{() => <Redirect to="/" />}</Route>
        <Route path="/explore-2">{() => <Redirect to="/" />}</Route>
        <Route path="/explore-2/">{() => <Redirect to="/" />}</Route>
        <Route path="/advanced">{() => <Redirect to="/" />}</Route>
        <Route path="/advanced/">{() => <Redirect to="/" />}</Route>
        <Route path="/it">{() => <Redirect to="/" />}</Route>
        <Route path="/sleep">{() => <Redirect to="/hotel" />}</Route>
        <Route path="/sleep/">{() => <Redirect to="/hotel" />}</Route>
        <Route path="/about">{() => <Redirect to="/culture" />}</Route>
        <Route path="/about/">{() => <Redirect to="/culture" />}</Route>
        <Route path="/offers">{() => <Redirect to="/" />}</Route>
        <Route path="/offers/">{() => <Redirect to="/" />}</Route>
        <Route path="/offers-gallery">{() => <Redirect to="/gallery" />}</Route>
        <Route path="/offers-gallery/">{() => <Redirect to="/gallery" />}</Route>
        <Route path="/store/cart">{() => <Redirect to="/" />}</Route>
        <Route path="/store/cart/">{() => <Redirect to="/" />}</Route>
        <Route path="/terms-and-conditions">{() => <Redirect to="/" />}</Route>
        <Route path="/terms-and-conditions/">{() => <Redirect to="/" />}</Route>
        <Route path="/the-local-house-team">{() => <Redirect to="/culture" />}</Route>
        <Route path="/the-local-house-team/">{() => <Redirect to="/culture" />}</Route>
        <Route path="/location/hours-location">{() => <Redirect to="/contact" />}</Route>
        <Route path="/location/hours-location/">{() => <Redirect to="/contact" />}</Route>
        <Route path="/hotel/">{() => <Redirect to="/hotel" />}</Route>
        <Route path="/gallery/">{() => <Redirect to="/gallery" />}</Route>
        <Route path="/contact/">{() => <Redirect to="/contact" />}</Route>
        <Route path="/culture/">{() => <Redirect to="/culture" />}</Route>
        
        {/* 404 Page */}
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
            <AccessibilityToolbar />
            <Router />
            <Analytics />
          </TooltipProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

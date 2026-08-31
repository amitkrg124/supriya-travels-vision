import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { createMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <RootDocument>
      <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl text-gold">404</h1>
          <h2 className="font-display mt-4 text-2xl text-white">Page not found</h2>
          <p className="mt-3 text-sm text-white/65">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep transition-transform duration-300 hover:scale-[1.03]"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </RootDocument>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <RootDocument>
      <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl text-white">This page didn't load</h1>
          <p className="mt-3 text-sm text-white/65">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </RootDocument>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...createMetadata(),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js",
        async: true,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <SmoothScroll />
        <Header />
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </motion.main>
        <Footer />
        <WhatsAppButton />
      </QueryClientProvider>
    </RootDocument>
  );
}

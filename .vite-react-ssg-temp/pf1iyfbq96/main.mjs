var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, useLocation, Outlet, Navigate } from "react-router-dom";
import * as React from "react";
import React__default, { useState, useEffect, useMemo, useRef, createContext, useCallback, useLayoutEffect, memo, Suspense, Component } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, AlertCircle, RefreshCw, Home, WifiOff, Wifi, Smartphone, Download, ChevronRight, ChevronDown, MessageSquare, Menu, BookOpen, Sparkles, Mail } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { AnimatePresence, motion } from "framer-motion";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import r from "prop-types";
import n from "react-fast-compare";
import i from "invariant";
import o from "shallowequal";
if (typeof globalThis !== "undefined") {
  const noopStorage = {
    length: 0,
    clear() {
    },
    getItem(_key) {
      return null;
    },
    key(_index) {
      return null;
    },
    removeItem(_key) {
    },
    setItem(_key, _value) {
    }
  };
  if (typeof globalThis.localStorage === "undefined") {
    globalThis.localStorage = noopStorage;
  }
  if (typeof globalThis.sessionStorage === "undefined") {
    globalThis.sessionStorage = noopStorage;
  }
}
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-toast flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-tooltip overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const ErrorFallback = ({
  error,
  resetErrorBoundary,
  minimal = false
}) => {
  if (minimal) {
    return /* @__PURE__ */ jsxs("div", { className: "p-4 bg-destructive/10 border border-destructive/20 rounded-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-destructive flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-destructive", children: "Une erreur est survenue" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Veuillez réessayer dans quelques instants." })
        ] })
      ] }),
      resetErrorBoundary && /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: resetErrorBoundary,
          variant: "outline",
          size: "sm",
          className: "mt-3",
          children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 mr-2" }),
            "Réessayer"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-[400px] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6", children: /* @__PURE__ */ jsx(AlertCircle, { className: "h-8 w-8 text-destructive" }) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-foreground mb-3", children: "Oups ! Quelque chose s'est mal passé" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Nous sommes désolés pour ce désagrément. Une erreur inattendue s'est produite." }),
    error && false,
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
      resetErrorBoundary && /* @__PURE__ */ jsxs(Button, { onClick: resetErrorBoundary, variant: "default", children: [
        /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 mr-2" }),
        "Réessayer"
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-2" }),
        "Retour à l'accueil"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-sm text-muted-foreground", children: [
      "Si le problème persiste, n'hésitez pas à",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-primary hover:underline", children: "nous contacter" }),
      "."
    ] })
  ] }) });
};
class AppErrorBoundary extends React__default.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false });
    __publicField(this, "resetError", () => {
      this.setState({ hasError: false, error: void 0 });
    });
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("AppErrorBoundary", { error, info });
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exception", {
        description: (error == null ? void 0 : error.message) || "Unknown error",
        fatal: true
      });
    }
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsx(
      ErrorFallback,
      {
        error: this.state.error,
        resetErrorBoundary: this.resetError
      }
    ) });
  }
}
const isBrowser$1 = typeof window !== "undefined";
function DiagnosticsPanel() {
  const [open, setOpen] = useState(
    () => isBrowser$1 ? new URLSearchParams(window.location.search).has("diag") : false
  );
  const [fails, setFails] = useState(0);
  const [lastError, setLastError] = useState("");
  useEffect(() => {
    const origFetch = window.fetch;
    window.fetch = async (input, init) => {
      const res = await origFetch(input, init);
      if (!res.ok) setFails((n2) => n2 + 1);
      return res;
    };
    const handler = (e) => setLastError(e.message || "Runtime error");
    window.addEventListener("error", handler);
    return () => {
      window.fetch = origFetch;
      window.removeEventListener("error", handler);
    };
  }, []);
  const route = useMemo(
    () => isBrowser$1 ? window.location.pathname + window.location.search : "",
    []
  );
  if (!open) return null;
  return /* @__PURE__ */ jsxs("div", { style: {
    position: "fixed",
    right: 16,
    bottom: 16,
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 10px 20px rgba(0,0,0,.1)",
    zIndex: 9999
  }, children: [
    /* @__PURE__ */ jsx("div", { style: { fontWeight: 600, marginBottom: 6 }, children: "Diagnostics" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Route:" }),
      " ",
      route
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Failed requests:" }),
      " ",
      fails
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Last error:" }),
      " ",
      lastError || "—"
    ] }),
    /* @__PURE__ */ jsx("button", { style: { marginTop: 8 }, onClick: () => setOpen(false), children: "Close" })
  ] });
}
function Analytics() {
  const hasLoadedRef = useRef(false);
  useEffect(() => {
    const id = "G-DNSN8DZTZV";
    const hasOptedOut = () => {
      try {
        const raw = localStorage.getItem("cookie-consent");
        if (!raw) return false;
        try {
          return JSON.parse(raw) === "declined";
        } catch {
          return raw === "declined";
        }
      } catch {
        return false;
      }
    };
    const initGtag = () => {
      if (window.gtag) return;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args) {
        window.dataLayer.push(arguments);
      };
    };
    const loadAnalytics = () => {
      if (hasOptedOut()) {
        console.log("[GA4] User opted out of cookies");
        return;
      }
      if (hasLoadedRef.current) return;
      hasLoadedRef.current = true;
      initGtag();
      window.gtag("consent", "default", {
        analytics_storage: "granted",
        ad_storage: "denied"
      });
      window.gtag("js", /* @__PURE__ */ new Date());
      window.gtag("config", id, {
        anonymize_ip: true,
        send_page_view: false,
        debug_mode: false
      });
      if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) {
        console.log("[GA4] Script already loaded");
        return;
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      script.onload = () => {
        console.log("[GA4] Script loaded successfully");
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      };
      script.onerror = () => {
        console.error("[GA4] Failed to load script");
        hasLoadedRef.current = false;
      };
      document.head.appendChild(script);
    };
    const handleConsentChange = () => {
      if (hasOptedOut() && window.gtag) {
        console.log("[GA4] User opted out");
        window.gtag("consent", "update", {
          analytics_storage: "denied"
        });
      }
    };
    loadAnalytics();
    window.addEventListener("storage", handleConsentChange);
    window.addEventListener("cookie-consent-changed", handleConsentChange);
    return () => {
      window.removeEventListener("storage", handleConsentChange);
      window.removeEventListener("cookie-consent-changed", handleConsentChange);
    };
  }, []);
  return null;
}
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("[Network] Back online");
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.warn("[Network] Offline");
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
const OfflineBanner = () => {
  const isOnline = useOnlineStatus();
  const [wasOffline, setWasOffline] = React__default.useState(false);
  const [showReconnected, setShowReconnected] = React__default.useState(false);
  React__default.useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
    } else if (wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);
  return /* @__PURE__ */ jsxs(AnimatePresence, { children: [
    !isOnline && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
        className: "fixed top-0 left-0 right-0 z-50 bg-destructive text-destructive-foreground px-4 py-3 shadow-lg",
        role: "alert",
        "aria-live": "assertive",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(WifiOff, { className: "h-5 w-5", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Pas de connexion Internet" })
        ] })
      }
    ),
    showReconnected && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
        className: "fixed top-0 left-0 right-0 z-50 bg-green-600 text-white px-4 py-3 shadow-lg",
        role: "status",
        "aria-live": "polite",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Wifi, { className: "h-5 w-5", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Connexion rétablie" })
        ] })
      }
    )
  ] });
};
const useSkipToContent = () => {
  useEffect(() => {
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Aller au contenu principal";
    skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded";
    document.body.prepend(skipLink);
    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);
};
const useReducedMotion = () => {
  const prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    }
  }, [prefersReducedMotion]);
  return prefersReducedMotion;
};
const A11yProvider = ({ children }) => {
  useSkipToContent();
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (!document.documentElement.lang) {
      document.documentElement.lang = "fr";
    }
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms");
    }
  }, [prefersReducedMotion]);
  return /* @__PURE__ */ jsx(Fragment, { children });
};
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  return [storedValue, setValue];
}
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasSeenNotice, setHasSeenNotice] = useLocalStorage("cookie-notice-seen", false);
  useEffect(() => {
    if (!hasSeenNotice) {
      const showTimer = setTimeout(() => setShowBanner(true), 2e3);
      const hideTimer = setTimeout(() => {
        setShowBanner(false);
        setHasSeenNotice(true);
      }, 5e3);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasSeenNotice, setHasSeenNotice]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: showBanner && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      className: "fixed bottom-2 left-2 z-40",
      children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/politique-confidentialite",
          className: "text-xs text-foreground/80 hover:text-foreground underline-offset-2 hover:underline transition-colors",
          children: "🍪 cookies"
        }
      )
    }
  ) });
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedDate.getTime()) / (1e3 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) return;
    }
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const timer = setTimeout(() => setShowPrompt(true), 3e4);
      const scrollHandler = () => {
        if (window.scrollY > 500) {
          setShowPrompt(true);
          window.removeEventListener("scroll", scrollHandler);
          clearTimeout(timer);
        }
      };
      window.addEventListener("scroll", scrollHandler);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", scrollHandler);
      };
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);
  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("PWA installed");
      setIsInstalled(true);
    }
    setShowPrompt(false);
    setDeferredPrompt(null);
  };
  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", (/* @__PURE__ */ new Date()).toISOString());
  };
  if (isInstalled || !deferredPrompt) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: showPrompt && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      className: "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50",
      children: /* @__PURE__ */ jsxs(Card, { className: "p-4 shadow-2xl border-primary/20 bg-background/95 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleDismiss,
            className: "absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(Smartphone, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: "Install Antony Addy" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Install our app for quick access to exercises, offline learning, and a better mobile experience." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleInstall,
              className: "flex-1 gap-2",
              size: "sm",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                "Install App"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleDismiss,
              variant: "outline",
              size: "sm",
              children: "Not now"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-3 text-center", children: "Works offline • Fast loading • No app store needed" })
      ] })
    }
  ) });
};
const nav$1 = {
  home: "Home",
  about: "About",
  training: "Training",
  testimonials: "Testimonials",
  contact: "Contact",
  blog: "Blog",
  resources: "Free Resources",
  openMenu: "Open menu",
  closeMenu: "Close menu"
};
const footer$1 = {
  tagline: "Certified professional English trainer (FPA). Over 20 years of experience teaching English to adults, companies and institutions.",
  navigation: "Navigation",
  resources: "Free Resources",
  exercises: "English exercises",
  listening: "Listening & Comprehension",
  reading: "Reading comprehension",
  writing: "Writing exercises",
  stories: "Interactive stories",
  dashboard: "My dashboard",
  contact: "Contact",
  location: "Var & Alpes-Maritimes, France",
  legal: "Legal",
  legalNotices: "Legal notices",
  privacy: "Privacy policy",
  sitemap: "Sitemap",
  rights: "All rights reserved. Certified Professional Adult Trainer.",
  hostedBy: "Site hosted by"
};
const settings$1 = {
  title: "Language settings",
  interfaceLanguage: "Interface language",
  feedbackLanguage: "AI feedback language",
  interfaceHelp: "Controls menus, buttons and forms.",
  feedbackHelp: "Controls AI corrections and explanations. The AI conversation stays in English.",
  aiSettings: "AI Settings"
};
const ai$1 = {
  translateAnswer: "Translate this answer",
  explainInMyLanguage: "Explain in my language",
  showVocab: "Show key vocabulary",
  translateShort: "Translate",
  explainShort: "Explain",
  vocabShort: "Vocabulary",
  supportHelp: "Need help? Translate, explain, or study vocabulary in your support language.",
  supportError: "Something went wrong. Please try again.",
  feedbackLanguageNote: "Feedback will be shown in {{lang}}.",
  loadingAction: "Working on",
  tryAgain: "Try again",
  noVocab: "No vocabulary items found.",
  supportActionsGroup: "Multilingual support actions",
  grammarEnterSentence: "Please enter an English sentence.",
  dailyLimitReached: "Daily limit reached (10 sessions / 24h).",
  grammarAnalyzeError: "Analysis failed. Please try again.",
  dailyLimitReachedHours: "Daily limit reached ({{count}} sessions per 24h). Please come back tomorrow!",
  failedStartConversation: "Failed to start conversation.",
  failedStartNegotiation: "Failed to start negotiation.",
  failedSendMessage: "Failed to send message.",
  failedFeedback: "Could not generate feedback. Please try again.",
  failedModelPresentation: "Failed to generate model presentation.",
  failedImprovePresentation: "Failed to improve presentation.",
  networkError: "Network error. Please try again.",
  copied: "Copied!",
  copyFailed: "Unable to copy. Please select the text manually.",
  grammarPlaceholder: "Type or paste an English sentence...",
  grammarTryThis: "Try this:",
  grammarExample1: "Correct my business email",
  grammarExample2: "Explain present perfect",
  grammarExample3: "Improve this sentence",
  presentationPlaceholder: "Write your professional presentation here...",
  emailSubjectPlaceholder: "Re: ...",
  emailReplyPlaceholder: "Write your professional email reply here..."
};
const common$1 = {
  language: "Language",
  save: "Save",
  cancel: "Cancel",
  close: "Close"
};
const onboarding$1 = {
  title: "Choose your languages",
  subtitle: "Pick your interface language and your AI feedback language. You can change these anytime.",
  "continue": "Continue"
};
const aiTools$1 = {
  conversation: "Conversation",
  writingCoach: "Writing Coach",
  speaking: "Speaking",
  grammar: "Grammar",
  email: "Email",
  presentation: "Presentation",
  negotiation: "Negotiation",
  interview: "Interview",
  navLabel: "AI Tools"
};
const en = {
  nav: nav$1,
  footer: footer$1,
  settings: settings$1,
  ai: ai$1,
  common: common$1,
  onboarding: onboarding$1,
  aiTools: aiTools$1
};
const nav = {
  home: "Accueil",
  about: "Qui je suis",
  training: "Offres de formation",
  testimonials: "Témoignages",
  contact: "Contact",
  blog: "Blog",
  resources: "Ressources Gratuites",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu"
};
const footer = {
  tagline: "Formateur d'anglais professionnel certifié FPA. Plus de 20 ans d'expérience dans la formation d'anglais pour adultes, entreprises et institutions.",
  navigation: "Navigation",
  resources: "Ressources Gratuites",
  exercises: "Exercices d'anglais",
  listening: "Écoute & Compréhension",
  reading: "Compréhension écrite",
  writing: "Exercices d'écriture",
  stories: "Histoires interactives",
  dashboard: "Mon tableau de bord",
  contact: "Contact",
  location: "Var & Alpes-Maritimes, France",
  legal: "Informations légales",
  legalNotices: "Mentions légales",
  privacy: "Politique de confidentialité",
  sitemap: "Plan du site",
  rights: "Tous droits réservés. Formateur Professionnel d'Adultes certifié.",
  hostedBy: "Site hébergé par"
};
const settings = {
  title: "Paramètres de langue",
  interfaceLanguage: "Langue de l'interface",
  feedbackLanguage: "Langue du feedback IA",
  interfaceHelp: "Contrôle les menus, boutons et formulaires.",
  feedbackHelp: "Contrôle les corrections et explications de l'IA. La conversation IA reste en anglais.",
  aiSettings: "Paramètres IA"
};
const ai = {
  translateAnswer: "Traduire cette réponse",
  explainInMyLanguage: "Expliquer dans ma langue",
  showVocab: "Afficher le vocabulaire clé",
  translateShort: "Traduire",
  explainShort: "Expliquer",
  vocabShort: "Vocabulaire",
  supportHelp: "Besoin d'aide ? Traduisez, expliquez ou étudiez le vocabulaire dans votre langue.",
  supportError: "Une erreur est survenue. Veuillez réessayer.",
  feedbackLanguageNote: "Le feedback sera affiché en {{lang}}.",
  loadingAction: "Traitement en cours :",
  tryAgain: "Réessayer",
  noVocab: "Aucun élément de vocabulaire trouvé.",
  supportActionsGroup: "Actions de support multilingue",
  grammarEnterSentence: "Entrez une phrase en anglais.",
  dailyLimitReached: "Limite quotidienne atteinte (10 sessions / 24h).",
  grammarAnalyzeError: "Erreur lors de l'analyse.",
  dailyLimitReachedHours: "Limite quotidienne atteinte ({{count}} sessions / 24h). Revenez demain !",
  failedStartConversation: "Impossible de démarrer la conversation.",
  failedStartNegotiation: "Impossible de démarrer la négociation.",
  failedSendMessage: "Échec de l'envoi du message.",
  failedFeedback: "Impossible de générer le feedback. Veuillez réessayer.",
  failedModelPresentation: "Impossible de générer la présentation modèle.",
  failedImprovePresentation: "Impossible d'améliorer la présentation.",
  networkError: "Erreur réseau. Veuillez réessayer.",
  copied: "Copié !",
  copyFailed: "Impossible de copier. Veuillez sélectionner le texte manuellement.",
  grammarPlaceholder: "Tapez ou collez une phrase en anglais...",
  grammarTryThis: "Essayez :",
  grammarExample1: "Corrige mon e-mail professionnel",
  grammarExample2: "Explique le present perfect",
  grammarExample3: "Améliore cette phrase",
  presentationPlaceholder: "Rédigez votre présentation professionnelle ici...",
  emailSubjectPlaceholder: "Re : ...",
  emailReplyPlaceholder: "Rédigez votre réponse e-mail professionnelle ici..."
};
const common = {
  language: "Langue",
  save: "Enregistrer",
  cancel: "Annuler",
  close: "Fermer"
};
const onboarding = {
  title: "Choisissez vos langues",
  subtitle: "Sélectionnez la langue de l'interface et celle des retours de l'IA. Vous pouvez les modifier à tout moment.",
  "continue": "Continuer"
};
const aiTools = {
  conversation: "Conversation",
  writingCoach: "Coach d'écriture",
  speaking: "Expression orale",
  grammar: "Grammaire",
  email: "E-mail",
  presentation: "Présentation",
  negotiation: "Négociation",
  interview: "Entretien",
  navLabel: "Outils IA"
};
const fr = {
  nav,
  footer,
  settings,
  ai,
  common,
  onboarding,
  aiTools
};
const SUPPORTED_LANGS = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr", nativeName: "Français" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr", nativeName: "English" }
];
const SUPPORTED_LANG_CODES = SUPPORTED_LANGS.map((l2) => l2.code);
function getLangMeta(code) {
  return SUPPORTED_LANGS.find((l2) => l2.code === code) ?? SUPPORTED_LANGS[0];
}
const isBrowser = typeof window !== "undefined";
if (!i18n.isInitialized) {
  const chain = isBrowser ? i18n.use(LanguageDetector).use(initReactI18next) : i18n.use(initReactI18next);
  chain.init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    fallbackLng: "fr",
    lng: isBrowser ? void 0 : "fr",
    supportedLngs: SUPPORTED_LANG_CODES,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: isBrowser ? {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "interfaceLanguage",
      caches: ["localStorage"]
    } : void 0,
    react: { useSuspense: false }
  });
}
if (typeof document !== "undefined") {
  const apply = (lng) => {
    const meta = getLangMeta(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = meta.dir;
  };
  apply(i18n.language || "fr");
  i18n.on("languageChanged", apply);
}
const LanguageContext = createContext(null);
const FEEDBACK_KEY = "feedbackLanguage";
const INTERFACE_KEY = "interfaceLanguage";
function detect() {
  if (typeof navigator === "undefined") return "en";
  const browser = (navigator.language || "en").toLowerCase().slice(0, 2);
  return SUPPORTED_LANG_CODES.includes(browser) ? browser : "en";
}
function readStored(key) {
  if (typeof window === "undefined") return null;
  try {
    const v2 = window.localStorage.getItem(key);
    if (v2 && SUPPORTED_LANG_CODES.includes(v2)) {
      return v2;
    }
  } catch {
  }
  return null;
}
const LanguageProvider = ({ children }) => {
  const [interfaceLang, setInterfaceLangState] = useState(
    () => readStored(INTERFACE_KEY) ?? detect()
  );
  const [feedbackLang, setFeedbackLangState] = useState(
    () => readStored(FEEDBACK_KEY) ?? readStored(INTERFACE_KEY) ?? detect()
  );
  useEffect(() => {
    if (i18n.language !== interfaceLang) {
      i18n.changeLanguage(interfaceLang);
    }
  }, [interfaceLang]);
  const setInterfaceLang = useCallback((lang) => {
    setInterfaceLangState(lang);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(INTERFACE_KEY, lang);
      } catch {
      }
    }
  }, []);
  const setFeedbackLang = useCallback((lang) => {
    setFeedbackLangState(lang);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(FEEDBACK_KEY, lang);
      } catch {
      }
    }
  }, []);
  const isRTL = getLangMeta(interfaceLang).dir === "rtl";
  return /* @__PURE__ */ jsx(
    LanguageContext.Provider,
    {
      value: { interfaceLang, feedbackLang, setInterfaceLang, setFeedbackLang, isRTL },
      children
    }
  );
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useIsomorphicLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};
const PREFETCH_ROUTES = [
  "/qui-je-suis",
  "/offres-de-formation",
  "/blog",
  "/contact",
  "/temoignages"
];
const PrefetchRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined" || !("requestIdleCallback" in window)) {
      return;
    }
    const prefetchRoute = (route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      link.as = "document";
      document.head.appendChild(link);
    };
    const handleIdle = () => {
      PREFETCH_ROUTES.forEach((route) => {
        if (route !== location.pathname) {
          prefetchRoute(route);
        }
      });
    };
    const idleCallback = window.requestIdleCallback(handleIdle, { timeout: 2e3 });
    return () => {
      if (idleCallback) {
        window.cancelIdleCallback(idleCallback);
      }
    };
  }, [location.pathname]);
  return null;
};
const ScrollProgressBar = memo(() => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScroll(window.scrollY / total * 100);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed top-0 left-0 z-50 h-1 bg-yellow-500 will-change-[width]",
      style: { width: `${scroll}%` },
      role: "progressbar",
      "aria-valuenow": Math.round(scroll),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": "Reading progress"
    }
  );
});
const FadeInSection = ({ children }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
    children
  }
);
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 border-b pb-2", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setOpen(!open), className: "w-full text-left text-lg font-semibold text-blue-900", children: title }),
    open && /* @__PURE__ */ jsx("div", { className: "mt-2 text-gray-700", children })
  ] });
};
const logoImage = "/assets/antony-addy-logo-BVl3HwR5.png";
function SiteLogo({
  height = 40,
  width,
  className = "",
  alt = "Antony Addy — Formateur d'anglais professionnel"
}) {
  const calculatedWidth = width || Math.round(height * 1.2);
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoImage,
      alt,
      className: `object-contain ${className}`,
      style: { height: `${height}px`, width: `${calculatedWidth}px` }
    }
  );
}
function RawJsonLd({ json }) {
  return /* @__PURE__ */ jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(json) }
    }
  );
}
function OrgJsonLd({ siteName }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName ?? "Antony Addy",
    url: "https://www.antonyaddy.com",
    logo: "https://www.antonyaddy.com/assets/logo-512.png",
    sameAs: []
  };
  return /* @__PURE__ */ jsx(RawJsonLd, { json });
}
function WebSiteJsonLd({
  siteName,
  url
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName ?? "Antony Addy",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  return /* @__PURE__ */ jsx(RawJsonLd, { json });
}
function BreadcrumbJsonLd({
  items
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i2) => ({
      "@type": "ListItem",
      position: i2 + 1,
      name: it.name,
      item: it.item
    }))
  };
  return /* @__PURE__ */ jsx(RawJsonLd, { json });
}
function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  type = "Article",
  url
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    url,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: authorName ? { "@type": "Person", name: authorName } : void 0,
    mainEntityOfPage: url ? { "@type": "WebPage", "@id": url } : void 0
  };
  return /* @__PURE__ */ jsx(RawJsonLd, { json });
}
const jsonLdPerson = (opts) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: (opts == null ? void 0 : opts.name) ?? "Antony Addy",
  url: (opts == null ? void 0 : opts.url) ?? "https://www.antonyaddy.com",
  image: (opts == null ? void 0 : opts.image) ?? "/og/antonyaddy-card.png",
  sameAs: (opts == null ? void 0 : opts.sameAs) ?? []
});
const jsonLdOrganization = (opts) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: (opts == null ? void 0 : opts.name) ?? "Antony Addy — English Training",
  url: (opts == null ? void 0 : opts.url) ?? "https://www.antonyaddy.com",
  logo: (opts == null ? void 0 : opts.logo) ?? "https://www.antonyaddy.com/og/antonyaddy-card.png",
  telephone: (opts == null ? void 0 : opts.telephone) ?? "+33649829826",
  email: (opts == null ? void 0 : opts.email) ?? "contact@antonyaddy.com",
  address: (opts == null ? void 0 : opts.address) ?? {
    "@type": "PostalAddress",
    streetAddress: "135 rue Henri Vadon",
    addressLocality: "Fréjus",
    postalCode: "83600",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR"
  },
  sameAs: (opts == null ? void 0 : opts.sameAs) ?? [
    "https://www.linkedin.com/in/antonyaddy",
    "https://twitter.com/antonyaddy"
  ]
});
const jsonLdWebsite = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Antony Addy — Formateur d'anglais",
  url: "https://www.antonyaddy.com",
  description: "Formations d'anglais professionnel en présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.antonyaddy.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});
const SITE_URL$1 = "https://www.antonyaddy.com";
const routeConfig = {
  "/": { label: "Accueil" },
  "/qui-je-suis": { label: "Qui je suis" },
  "/offres-de-formation": { label: "Offres de formation" },
  "/temoignages": { label: "Témoignages" },
  "/contact": { label: "Contact" },
  "/blog": { label: "Blog" },
  "/exercices": { label: "Exercices" },
  "/reading": { label: "Compréhension écrite" },
  "/dashboard": { label: "Tableau de bord" },
  "/mentions-legales": { label: "Mentions légales" },
  "/politique-confidentialite": { label: "Politique de confidentialité" },
  "/sitemap-page": { label: "Plan du site" },
  "/auth": { label: "Connexion" },
  "/install": { label: "Installer" },
  "/conversation-trainer": { label: "Conversation Trainer" },
  "/email-trainer": { label: "Email Reply Trainer" },
  "/presentation-trainer": { label: "Presentation Trainer" },
  "/negotiation-trainer": { label: "Negotiation Trainer" },
  "/speaking-practice": { label: "Speaking Practice" },
  "/writing-coach": { label: "Writing Coach" },
  "/interview-simulator": { label: "Interview Simulator" },
  "/grammar-explainer": { label: "Grammar Explainer" }
};
const sectionMappings = {
  "/blog/": { section: "Blog", sectionPath: "/blog" },
  "/exercices/cloe-preparation/practice-test": { section: "Préparation CLOE", sectionPath: "/exercices/cloe-preparation" },
  "/exercices/cloe-preparation/history": { section: "Préparation CLOE", sectionPath: "/exercices/cloe-preparation" },
  "/exercices/cloe-preparation/overview": { section: "Préparation CLOE", sectionPath: "/exercices/cloe-preparation" },
  "/exercices/cloe-preparation/": { section: "Préparation CLOE", sectionPath: "/exercices/cloe-preparation" },
  "/exercices/cloe/": { section: "Préparation CLOE", sectionPath: "/exercices/cloe-preparation" },
  "/exercices/drag-drop/": { section: "Exercices interactifs", sectionPath: "/exercices" },
  "/exercices/writing/": { section: "Exercices d'écriture", sectionPath: "/exercices" },
  "/exercices/listening/": { section: "Exercices d'écoute", sectionPath: "/exercices" },
  "/exercices/dictation/": { section: "Exercices de dictée", sectionPath: "/exercices" },
  "/exercices/translation/": { section: "Exercices de traduction", sectionPath: "/exercices" },
  "/exercices/idioms/": { section: "Expressions idiomatiques", sectionPath: "/exercices" },
  "/exercices/phrasal-verbs/": { section: "Phrasal Verbs", sectionPath: "/exercices" },
  "/exercices/collocations/": { section: "Collocations", sectionPath: "/exercices" },
  "/exercices/conditionals/": { section: "Conditionnels", sectionPath: "/exercices" },
  "/exercices/error-correction/": { section: "Correction d'erreurs", sectionPath: "/exercices" },
  "/exercices/matching/": { section: "Exercices d'association", sectionPath: "/exercices" },
  "/exercices/crossword/": { section: "Mots croisés", sectionPath: "/exercices" },
  "/exercices/flashcards/": { section: "Flashcards", sectionPath: "/exercices" },
  "/exercices/grammar/": { section: "Leçons de Grammaire", sectionPath: "/exercices" },
  "/exercices/": { section: "Exercices", sectionPath: "/exercices" },
  "/reading/": { section: "Compréhension écrite", sectionPath: "/reading" },
  "/story/": { section: "Histoires interactives", sectionPath: "/reading" }
};
function slugToTitle(slug) {
  if (!slug) return "";
  const decoded = decodeURIComponent(slug);
  const minorWords = ["vs", "and", "or", "of", "the", "a", "an", "in", "on", "at", "to", "for"];
  return decoded.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().split(" ").map((word, index) => {
    const lower = word.toLowerCase();
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    if (minorWords.includes(lower)) {
      return lower;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");
}
function Breadcrumbs({ customTitle, customSection }) {
  const location = useLocation();
  const pathname = location.pathname;
  if (pathname === "/") return null;
  const crumbs = [
    { name: "Accueil", path: "/" }
  ];
  let sectionInfo = null;
  for (const [prefix, info] of Object.entries(sectionMappings)) {
    if (pathname.startsWith(prefix)) {
      sectionInfo = info;
      break;
    }
  }
  if (customSection) {
    crumbs.push({ name: customSection.label, path: customSection.path });
  } else if (sectionInfo) {
    crumbs.push({ name: sectionInfo.section, path: sectionInfo.sectionPath });
  }
  let currentLabel = customTitle;
  if (!currentLabel) {
    const config = routeConfig[pathname];
    if (config == null ? void 0 : config.label) {
      currentLabel = config.label;
    } else {
      const segments = pathname.split("/").filter(Boolean);
      const lastSegment = segments.pop() || "";
      if (!lastSegment || /^\d+$/.test(lastSegment)) {
        currentLabel = sectionInfo ? `${sectionInfo.section} – Détail` : "Détail";
      } else {
        currentLabel = slugToTitle(lastSegment);
      }
    }
  }
  crumbs.push({ name: currentLabel, path: pathname });
  const jsonLdItems = crumbs.map((crumb) => ({
    name: crumb.name,
    item: `${SITE_URL$1}${crumb.path === "/" ? "" : crumb.path}`
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(BreadcrumbJsonLd, { items: jsonLdItems }),
    /* @__PURE__ */ jsx(
      "nav",
      {
        "aria-label": "Fil d'Ariane",
        className: "py-3 px-4 bg-muted/30 border-b border-border",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap items-center gap-1 text-sm text-muted-foreground", children: crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          const isFirst = index === 0;
          return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
            index > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 flex-shrink-0", "aria-hidden": "true" }),
            isLast ? /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-medium text-foreground",
                "aria-current": "page",
                children: crumb.name
              }
            ) : /* @__PURE__ */ jsxs(
              Link,
              {
                to: crumb.path,
                className: "hover:text-primary transition-colors flex items-center gap-1",
                children: [
                  isFirst && /* @__PURE__ */ jsx(Home, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsx("span", { children: crumb.name })
                ]
              }
            )
          ] }, crumb.path + index);
        }) }) })
      }
    )
  ] });
}
const getSessionId = () => {
  const key = "page_tracking_session";
  let sessionId = sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
};
function usePageTracking() {
  const location = useLocation();
  const lastPathRef = useRef(null);
  useEffect(() => {
    const currentPath = location.pathname;
    if (lastPathRef.current === currentPath) {
      return;
    }
    lastPathRef.current = currentPath;
    const trackPageView = async () => {
      try {
        const supabaseUrl = "https://gkwzodsznrnbfafaqbtu.supabase.co";
        if (!supabaseUrl) ;
        const response = await fetch(`${supabaseUrl}/functions/v1/track-pageview`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            path: currentPath,
            referrer: document.referrer || null,
            sessionId: getSessionId()
          })
        });
        if (!response.ok) {
          console.warn("[PageTracking] Failed to track:", response.status);
        }
      } catch (error) {
        console.warn("[PageTracking] Error:", error);
      }
    };
    const timer = setTimeout(trackPageView, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
const trackEvent = (eventName, params) => {
  if (typeof window === "undefined" || !window.gtag) {
    console.log("[Analytics] Event tracked (GA not loaded):", eventName, params);
    return;
  }
  window.gtag("event", eventName, {
    event_category: params == null ? void 0 : params.category,
    event_label: params == null ? void 0 : params.label,
    value: params == null ? void 0 : params.value,
    ...params
  });
  console.log("[Analytics] Event tracked:", eventName, params);
};
const trackFormSubmission = (formName, success = true) => {
  trackEvent("form_submission", {
    category: "form",
    label: formName,
    success
  });
};
const trackFormError = (formName, errorType) => {
  trackEvent("form_error", {
    category: "form",
    label: formName,
    error_type: errorType
  });
};
const trackSocialShare = (platform, contentType) => {
  trackEvent("social_share", {
    category: "social",
    label: platform,
    content_type: contentType
  });
};
const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    category: "conversion",
    label: "WhatsApp Contact"
  });
};
const trackEmailClick = () => {
  trackEvent("email_click", {
    category: "conversion",
    label: "Email Contact"
  });
};
const WHATSAPP_NUMBER = "33649829826";
const WHATSAPP_PREFILLED_MESSAGE = `Bonjour Antony,

Je souhaite améliorer mon anglais.

• Mon niveau actuel : 
• Mon objectif (ex : travail, entretien, examen) : 
• Mon délai : 
• Format souhaité (visio / présentiel) : 

Pouvez-vous me proposer une solution adaptée ?`;
const WHATSAPP_PREFILLED_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;
const WHATSAPP_URL = WHATSAPP_PREFILLED_URL;
const trackWA = (location) => trackEvent("whatsapp_cta_click", { page: "Layout", target: WHATSAPP_URL, location, prefilled: true });
const AUDIENCE_LINKS = [
  { name: "Entreprises", href: "/anglais-entreprise" },
  { name: "Cadres & dirigeants", href: "/anglais-cadres" },
  { name: "Particuliers", href: "/anglais-particuliers" },
  { name: "Étudiants", href: "/anglais-etudiants" }
];
const CITY_LINKS = [
  { name: "Fréjus", href: "/cours-anglais-frejus" },
  { name: "Nice", href: "/cours-anglais-nice" },
  { name: "Cannes", href: "/cours-anglais-cannes" },
  { name: "Antibes", href: "/cours-anglais-antibes" },
  { name: "Sophia Antipolis", href: "/cours-anglais-sophia-antipolis" }
];
const Layout = ({ children, breadcrumbTitle, breadcrumbSection }) => {
  const location = useLocation();
  const { t: tRaw } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const t = (key, fallback) => tRaw(key, { lng: "fr", defaultValue: fallback });
  usePageTracking();
  const audienceActive = AUDIENCE_LINKS.some((a2) => a2.href === location.pathname);
  const navigation = [
    { name: t("nav.home"), href: "/", current: location.pathname === "/" },
    { name: t("nav.about"), href: "/qui-je-suis", current: location.pathname === "/qui-je-suis" },
    { name: t("nav.training"), href: "/offres-de-formation", current: location.pathname === "/offres-de-formation" },
    { name: t("nav.testimonials"), href: "/temoignages", current: location.pathname === "/temoignages" },
    { name: t("nav.contact"), href: "/contact", current: location.pathname === "/contact" },
    { name: t("nav.blog"), href: "/blog", current: location.pathname === "/blog" }
  ];
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background font-body", children: [
    /* @__PURE__ */ jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(SiteLogo, { height: 40, className: "me-3", alt: "Antony Addy" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-lg font-bold text-primary font-heading", children: "Antony Addy" }) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center space-x-1", children: [
          navigation.map((item) => /* @__PURE__ */ jsx(
            Link,
            {
              to: item.href,
              className: `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body border ${item.current ? "bg-accent text-accent-foreground border-accent" : "text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent"}`,
              children: item.name
            },
            item.href
          )),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative",
              onMouseEnter: () => setIsAudienceOpen(true),
              onMouseLeave: () => setIsAudienceOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setIsAudienceOpen((o2) => !o2),
                    "aria-haspopup": "true",
                    "aria-expanded": isAudienceOpen,
                    className: `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body border inline-flex items-center gap-1 ${audienceActive ? "bg-accent text-accent-foreground border-accent" : "text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent"}`,
                    children: [
                      "Pour qui",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                    ]
                  }
                ),
                isAudienceOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50", children: AUDIENCE_LINKS.map((a2) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: a2.href,
                    onClick: () => setIsAudienceOpen(false),
                    className: `block px-4 py-2 text-sm font-body transition-colors ${location.pathname === a2.href ? "bg-accent text-accent-foreground" : "text-primary hover:bg-muted"}`,
                    children: a2.name
                  },
                  a2.href
                )) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: WHATSAPP_URL,
              className: "bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition-colors text-sm font-body",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => trackWA("header-mobile"),
              "aria-label": "WhatsApp",
              children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: toggleMobileMenu,
              "aria-label": isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu"),
              "aria-expanded": isMobileMenuOpen,
              "aria-controls": "mobile-navigation",
              className: "text-primary hover:text-primary/80 p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg active:scale-[0.95] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6", "aria-hidden": "true" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2 ms-4", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/questionnaire",
              className: "bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors font-body text-sm",
              children: "Évaluer mes besoins"
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: WHATSAPP_URL,
              className: "bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors font-body",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => trackWA("header-desktop"),
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
                "WhatsApp"
              ]
            }
          )
        ] })
      ] }),
      isMobileMenuOpen && /* @__PURE__ */ jsx("div", { id: "mobile-navigation", className: "lg:hidden border-t border-gray-200 py-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-2", children: [
        navigation.map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            onClick: () => setIsMobileMenuOpen(false),
            className: `flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 font-body border active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${item.current ? "text-accent-foreground bg-accent border-accent" : "text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent"}`,
            children: item.name
          },
          item.href
        )),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 mt-2 border-t border-gray-100", children: [
          /* @__PURE__ */ jsx("p", { className: "px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pour qui" }),
          AUDIENCE_LINKS.map((a2) => /* @__PURE__ */ jsx(
            Link,
            {
              to: a2.href,
              onClick: () => setIsMobileMenuOpen(false),
              className: `flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 font-body border ${location.pathname === a2.href ? "text-accent-foreground bg-accent border-accent" : "text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent"}`,
              children: a2.name
            },
            a2.href
          ))
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/questionnaire",
            onClick: () => setIsMobileMenuOpen(false),
            className: "flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-body",
            children: "Évaluer mes besoins"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Breadcrumbs, { customTitle: breadcrumbTitle, customSection: breadcrumbSection }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 text-white text-sm py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsx(SiteLogo, { height: 32, className: "brightness-0 invert", alt: "Antony Addy" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: "Antony Addy" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4 leading-relaxed", children: t("footer.tagline") }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                "aria-label": "WhatsApp",
                onClick: () => trackWA("footer-social"),
                children: "💬 WhatsApp"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://linkedin.com/in/antonyaddy",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                "aria-label": "LinkedIn",
                children: "LinkedIn"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs italic text-gray-400 leading-relaxed", children: [
            "Vous préférez apprendre en autonomie ? Découvrez ma plateforme d'exercices d'anglais en ligne :",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://anglaisadistance.fr",
                target: "_blank",
                rel: "noopener",
                className: "text-gray-200 hover:text-white underline underline-offset-2",
                children: "anglaisadistance.fr ↗"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": t("footer.navigation"), children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-white", children: t("footer.navigation") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.home") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/qui-je-suis", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.about") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/offres-de-formation", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.training") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/temoignages", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.testimonials") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.contact") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-gray-400 hover:text-white transition-colors", children: t("nav.blog") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/questionnaire", className: "text-gray-400 hover:text-white transition-colors", children: "Questionnaire de profil" }) })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-6 mb-2 text-white text-xs uppercase tracking-wider", children: "Pour qui" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: AUDIENCE_LINKS.map((a2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: a2.href, className: "text-gray-400 hover:text-white transition-colors text-xs", children: a2.name }) }, a2.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-white", children: "Zones d'intervention" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: CITY_LINKS.map((c2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: c2.href, className: "text-gray-400 hover:text-white transition-colors", children: c2.name }) }, c2.href)) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs mt-3 leading-relaxed", children: "Présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-white", children: t("footer.contact") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:formations@antonyaddy.com", className: "text-gray-400 hover:text-white transition-colors", children: "📧 formations@antonyaddy.com" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-gray-400 hover:text-white transition-colors",
                onClick: () => trackWA("footer-contact"),
                children: "💬 +33 6 49 82 98 26"
              }
            ) }),
            /* @__PURE__ */ jsxs("li", { className: "text-gray-400", children: [
              "📍 ",
              t("footer.location")
            ] })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-white text-xs uppercase tracking-wider", children: t("footer.legal") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/mentions-legales", className: "text-gray-400 hover:text-white transition-colors text-xs", children: t("footer.legalNotices") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/politique-confidentialite", className: "text-gray-400 hover:text-white transition-colors text-xs", children: t("footer.privacy") }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/cgv", className: "text-gray-400 hover:text-white transition-colors text-xs", children: "CGV" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-800 pt-6 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs text-center md:text-left", children: "Organisme de formation enregistré sous le numéro [À CONFIRMER PAR ANTONY] auprès de la DREETS Provence-Alpes-Côte d'Azur." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-xs", children: [
            "© ",
            year,
            " Antony Addy. ",
            t("footer.rights")
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-xs", children: [
            t("footer.hostedBy"),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://www.bluehost.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400 transition-colors", children: "Bluehost" })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
};
const TestimonialSkeleton = () => /* @__PURE__ */ jsxs(Card, { className: "border-2 border-muted animate-pulse", children: [
  /* @__PURE__ */ jsxs(CardHeader, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded mb-4" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-full" }),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-5/6" }),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-4/6" })
    ] })
  ] }),
  /* @__PURE__ */ jsxs(CardContent, { children: [
    /* @__PURE__ */ jsx("div", { className: "h-5 bg-muted rounded w-2/3 mb-2" }),
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-1/2" })
  ] })
] });
const CardSkeleton = () => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 animate-pulse", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded mr-3" }),
    /* @__PURE__ */ jsx("div", { className: "h-7 bg-muted rounded w-1/3" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-full" }),
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-5/6" }),
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-4/6" })
  ] })
] });
const HeroSkeleton = () => /* @__PURE__ */ jsx("div", { className: "w-full h-[600px] bg-muted animate-pulse" });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1e3,
      refetchOnWindowFocus: false
    }
  }
});
const PageLoader = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 space-y-8", children: [
  /* @__PURE__ */ jsx(HeroSkeleton, {}),
  /* @__PURE__ */ jsx(CardSkeleton, {}),
  /* @__PURE__ */ jsx(CardSkeleton, {})
] }) });
const AppShell = () => /* @__PURE__ */ jsx(AppErrorBoundary, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(A11yProvider, { children: /* @__PURE__ */ jsxs(LanguageProvider, { children: [
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsx(PrefetchRoutes, {}),
  /* @__PURE__ */ jsx(Analytics, {}),
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(DiagnosticsPanel, {}),
  /* @__PURE__ */ jsx(OfflineBanner, {}),
  /* @__PURE__ */ jsx(CookieConsent, {}),
  /* @__PURE__ */ jsx(PWAInstallPrompt, {}),
  /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children: /* @__PURE__ */ jsx(Outlet, {}) })
] }) }) }) }) });
const LayoutShell = () => /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) });
function a() {
  return a = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r2 = arguments[e];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t[n2] = r2[n2]);
    }
    return t;
  }, a.apply(this, arguments);
}
function s(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, c(t, e);
}
function c(t, e) {
  return c = Object.setPrototypeOf || function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, c(t, e);
}
function u(t, e) {
  if (null == t) return {};
  var r2, n2, i2 = {}, o2 = Object.keys(t);
  for (n2 = 0; n2 < o2.length; n2++) e.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = t[r2]);
  return i2;
}
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, p = { rel: ["amphtml", "canonical", "alternate"] }, f = { type: ["application/ld+json"] }, d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] }, h = Object.keys(l).map(function(t) {
  return l[t];
}), m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, y = Object.keys(m).reduce(function(t, e) {
  return t[m[e]] = e, t;
}, {}), T = function(t, e) {
  for (var r2 = t.length - 1; r2 >= 0; r2 -= 1) {
    var n2 = t[r2];
    if (Object.prototype.hasOwnProperty.call(n2, e)) return n2[e];
  }
  return null;
}, g = function(t) {
  var e = T(t, l.TITLE), r2 = T(t, "titleTemplate");
  if (Array.isArray(e) && (e = e.join("")), r2 && e) return r2.replace(/%s/g, function() {
    return e;
  });
  var n2 = T(t, "defaultTitle");
  return e || n2 || void 0;
}, b = function(t) {
  return T(t, "onChangeClientState") || function() {
  };
}, v = function(t, e) {
  return e.filter(function(e2) {
    return void 0 !== e2[t];
  }).map(function(e2) {
    return e2[t];
  }).reduce(function(t2, e2) {
    return a({}, t2, e2);
  }, {});
}, A = function(t, e) {
  return e.filter(function(t2) {
    return void 0 !== t2[l.BASE];
  }).map(function(t2) {
    return t2[l.BASE];
  }).reverse().reduce(function(e2, r2) {
    if (!e2.length) for (var n2 = Object.keys(r2), i2 = 0; i2 < n2.length; i2 += 1) {
      var o2 = n2[i2].toLowerCase();
      if (-1 !== t.indexOf(o2) && r2[o2]) return e2.concat(r2);
    }
    return e2;
  }, []);
}, C = function(t, e, r2) {
  var n2 = {};
  return r2.filter(function(e2) {
    return !!Array.isArray(e2[t]) || (void 0 !== e2[t] && console && "function" == typeof console.warn && console.warn("Helmet: " + t + ' should be of type "Array". Instead found type "' + typeof e2[t] + '"'), false);
  }).map(function(e2) {
    return e2[t];
  }).reverse().reduce(function(t2, r3) {
    var i2 = {};
    r3.filter(function(t3) {
      for (var r4, o3 = Object.keys(t3), a2 = 0; a2 < o3.length; a2 += 1) {
        var s3 = o3[a2], c3 = s3.toLowerCase();
        -1 === e.indexOf(c3) || "rel" === r4 && "canonical" === t3[r4].toLowerCase() || "rel" === c3 && "stylesheet" === t3[c3].toLowerCase() || (r4 = c3), -1 === e.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r4 = s3);
      }
      if (!r4 || !t3[r4]) return false;
      var u3 = t3[r4].toLowerCase();
      return n2[r4] || (n2[r4] = {}), i2[r4] || (i2[r4] = {}), !n2[r4][u3] && (i2[r4][u3] = true, true);
    }).reverse().forEach(function(e2) {
      return t2.push(e2);
    });
    for (var o2 = Object.keys(i2), s2 = 0; s2 < o2.length; s2 += 1) {
      var c2 = o2[s2], u2 = a({}, n2[c2], i2[c2]);
      n2[c2] = u2;
    }
    return t2;
  }, []).reverse();
}, O = function(t, e) {
  if (Array.isArray(t) && t.length) {
    for (var r2 = 0; r2 < t.length; r2 += 1) if (t[r2][e]) return true;
  }
  return false;
}, S = function(t) {
  return Array.isArray(t) ? t.join("") : t;
}, E = function(t, e) {
  return Array.isArray(t) ? t.reduce(function(t2, r2) {
    return function(t3, e2) {
      for (var r3 = Object.keys(t3), n2 = 0; n2 < r3.length; n2 += 1) if (e2[r3[n2]] && e2[r3[n2]].includes(t3[r3[n2]])) return true;
      return false;
    }(r2, e) ? t2.priority.push(r2) : t2.default.push(r2), t2;
  }, { priority: [], default: [] }) : { default: t };
}, I = function(t, e) {
  var r2;
  return a({}, t, ((r2 = {})[e] = void 0, r2));
}, P = [l.NOSCRIPT, l.SCRIPT, l.STYLE], w = function(t, e) {
  return void 0 === e && (e = true), false === e ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}, x = function(t) {
  return Object.keys(t).reduce(function(e, r2) {
    var n2 = void 0 !== t[r2] ? r2 + '="' + t[r2] + '"' : "" + r2;
    return e ? e + " " + n2 : n2;
  }, "");
}, L = function(t, e) {
  return void 0 === e && (e = {}), Object.keys(t).reduce(function(e2, r2) {
    return e2[m[r2] || r2] = t[r2], e2;
  }, e);
}, j = function(e, r2) {
  return r2.map(function(r3, n2) {
    var i2, o2 = ((i2 = { key: n2 })["data-rh"] = true, i2);
    return Object.keys(r3).forEach(function(t) {
      var e2 = m[t] || t;
      "innerHTML" === e2 || "cssText" === e2 ? o2.dangerouslySetInnerHTML = { __html: r3.innerHTML || r3.cssText } : o2[e2] = r3[t];
    }), React__default.createElement(e, o2);
  });
}, M = function(e, r2, n2) {
  switch (e) {
    case l.TITLE:
      return { toComponent: function() {
        return n3 = r2.titleAttributes, (i2 = { key: e2 = r2.title })["data-rh"] = true, o2 = L(n3, i2), [React__default.createElement(l.TITLE, o2, e2)];
        var e2, n3, i2, o2;
      }, toString: function() {
        return function(t, e2, r3, n3) {
          var i2 = x(r3), o2 = S(e2);
          return i2 ? "<" + t + ' data-rh="true" ' + i2 + ">" + w(o2, n3) + "</" + t + ">" : "<" + t + ' data-rh="true">' + w(o2, n3) + "</" + t + ">";
        }(e, r2.title, r2.titleAttributes, n2);
      } };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: function() {
        return L(r2);
      }, toString: function() {
        return x(r2);
      } };
    default:
      return { toComponent: function() {
        return j(e, r2);
      }, toString: function() {
        return function(t, e2, r3) {
          return e2.reduce(function(e3, n3) {
            var i2 = Object.keys(n3).filter(function(t2) {
              return !("innerHTML" === t2 || "cssText" === t2);
            }).reduce(function(t2, e4) {
              var i3 = void 0 === n3[e4] ? e4 : e4 + '="' + w(n3[e4], r3) + '"';
              return t2 ? t2 + " " + i3 : i3;
            }, ""), o2 = n3.innerHTML || n3.cssText || "", a2 = -1 === P.indexOf(t);
            return e3 + "<" + t + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o2 + "</" + t + ">");
          }, "");
        }(e, r2, n2);
      } };
  }
}, k = function(t) {
  var e = t.baseTag, r2 = t.bodyAttributes, n2 = t.encode, i2 = t.htmlAttributes, o2 = t.noscriptTags, a2 = t.styleTags, s2 = t.title, c2 = void 0 === s2 ? "" : s2, u2 = t.titleAttributes, h2 = t.linkTags, m2 = t.metaTags, y2 = t.scriptTags, T2 = { toComponent: function() {
  }, toString: function() {
    return "";
  } };
  if (t.prioritizeSeoTags) {
    var g2 = function(t2) {
      var e2 = t2.linkTags, r3 = t2.scriptTags, n3 = t2.encode, i3 = E(t2.metaTags, d), o3 = E(e2, p), a3 = E(r3, f);
      return { priorityMethods: { toComponent: function() {
        return [].concat(j(l.META, i3.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
      }, toString: function() {
        return M(l.META, i3.priority, n3) + " " + M(l.LINK, o3.priority, n3) + " " + M(l.SCRIPT, a3.priority, n3);
      } }, metaTags: i3.default, linkTags: o3.default, scriptTags: a3.default };
    }(t);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e, n2), bodyAttributes: M("bodyAttributes", r2, n2), htmlAttributes: M("htmlAttributes", i2, n2), link: M(l.LINK, h2, n2), meta: M(l.META, m2, n2), noscript: M(l.NOSCRIPT, o2, n2), script: M(l.SCRIPT, y2, n2), style: M(l.STYLE, a2, n2), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n2) };
}, H = [], N = function(t, e) {
  var r2 = this;
  void 0 === e && (e = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: function(t2) {
    r2.context.helmet = t2;
  }, helmetInstances: { get: function() {
    return r2.canUseDOM ? H : r2.instances;
  }, add: function(t2) {
    (r2.canUseDOM ? H : r2.instances).push(t2);
  }, remove: function(t2) {
    var e2 = (r2.canUseDOM ? H : r2.instances).indexOf(t2);
    (r2.canUseDOM ? H : r2.instances).splice(e2, 1);
  } } }, this.context = t, this.canUseDOM = e, e || (t.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, R = React__default.createContext({}), D = r.shape({ setHelmet: r.func, helmetInstances: r.shape({ get: r.func, add: r.func, remove: r.func }) }), U = "undefined" != typeof document, q = /* @__PURE__ */ function(e) {
  function r2(t) {
    var n2;
    return (n2 = e.call(this, t) || this).helmetData = new N(n2.props.context, r2.canUseDOM), n2;
  }
  return s(r2, e), r2.prototype.render = function() {
    return React__default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r2;
}(Component);
q.canUseDOM = U, q.propTypes = { context: r.shape({ helmet: r.shape() }), children: r.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = function(t, e) {
  var r2, n2 = document.head || document.querySelector(l.HEAD), i2 = n2.querySelectorAll(t + "[data-rh]"), o2 = [].slice.call(i2), a2 = [];
  return e && e.length && e.forEach(function(e2) {
    var n3 = document.createElement(t);
    for (var i3 in e2) Object.prototype.hasOwnProperty.call(e2, i3) && ("innerHTML" === i3 ? n3.innerHTML = e2.innerHTML : "cssText" === i3 ? n3.styleSheet ? n3.styleSheet.cssText = e2.cssText : n3.appendChild(document.createTextNode(e2.cssText)) : n3.setAttribute(i3, void 0 === e2[i3] ? "" : e2[i3]));
    n3.setAttribute("data-rh", "true"), o2.some(function(t2, e3) {
      return r2 = e3, n3.isEqualNode(t2);
    }) ? o2.splice(r2, 1) : a2.push(n3);
  }), o2.forEach(function(t2) {
    return t2.parentNode.removeChild(t2);
  }), a2.forEach(function(t2) {
    return n2.appendChild(t2);
  }), { oldTags: o2, newTags: a2 };
}, B = function(t, e) {
  var r2 = document.getElementsByTagName(t)[0];
  if (r2) {
    for (var n2 = r2.getAttribute("data-rh"), i2 = n2 ? n2.split(",") : [], o2 = [].concat(i2), a2 = Object.keys(e), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e[c2] || "";
      r2.getAttribute(c2) !== u2 && r2.setAttribute(c2, u2), -1 === i2.indexOf(c2) && i2.push(c2);
      var l2 = o2.indexOf(c2);
      -1 !== l2 && o2.splice(l2, 1);
    }
    for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1) r2.removeAttribute(o2[p2]);
    i2.length === o2.length ? r2.removeAttribute("data-rh") : r2.getAttribute("data-rh") !== a2.join(",") && r2.setAttribute("data-rh", a2.join(","));
  }
}, K = function(t, e) {
  var r2 = t.baseTag, n2 = t.htmlAttributes, i2 = t.linkTags, o2 = t.metaTags, a2 = t.noscriptTags, s2 = t.onChangeClientState, c2 = t.scriptTags, u2 = t.styleTags, p2 = t.title, f2 = t.titleAttributes;
  B(l.BODY, t.bodyAttributes), B(l.HTML, n2), function(t2, e2) {
    void 0 !== t2 && document.title !== t2 && (document.title = S(t2)), B(l.TITLE, e2);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r2), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t2) {
    var e2 = d2[t2], r3 = e2.newTags, n3 = e2.oldTags;
    r3.length && (h2[t2] = r3), n3.length && (m2[t2] = d2[t2].oldTags);
  }), e && e(), s2(t, h2, m2);
}, _ = null, z = /* @__PURE__ */ function(t) {
  function e() {
    for (var e2, r3 = arguments.length, n2 = new Array(r3), i2 = 0; i2 < r3; i2++) n2[i2] = arguments[i2];
    return (e2 = t.call.apply(t, [this].concat(n2)) || this).rendered = false, e2;
  }
  s(e, t);
  var r2 = e.prototype;
  return r2.shouldComponentUpdate = function(t2) {
    return !o(t2, this.props);
  }, r2.componentDidUpdate = function() {
    this.emitChange();
  }, r2.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r2.emitChange = function() {
    var t2, e2, r3 = this.props.context, n2 = r3.setHelmet, i2 = null, o2 = (t2 = r3.helmetInstances.get().map(function(t3) {
      var e3 = a({}, t3.props);
      return delete e3.context, e3;
    }), { baseTag: A(["href"], t2), bodyAttributes: v("bodyAttributes", t2), defer: T(t2, "defer"), encode: T(t2, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t2), linkTags: C(l.LINK, ["rel", "href"], t2), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t2), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t2), onChangeClientState: b(t2), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t2), styleTags: C(l.STYLE, ["cssText"], t2), title: g(t2), titleAttributes: v("titleAttributes", t2), prioritizeSeoTags: O(t2, "prioritizeSeoTags") });
    q.canUseDOM ? (e2 = o2, _ && cancelAnimationFrame(_), e2.defer ? _ = requestAnimationFrame(function() {
      K(e2, function() {
        _ = null;
      });
    }) : (K(e2), _ = null)) : k && (i2 = k(o2)), n2(i2);
  }, r2.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r2.render = function() {
    return this.init(), null;
  }, e;
}(Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"], G = ["children"], W = /* @__PURE__ */ function(e) {
  function r2() {
    return e.apply(this, arguments) || this;
  }
  s(r2, e);
  var o2 = r2.prototype;
  return o2.shouldComponentUpdate = function(t) {
    return !n(I(this.props, "helmetData"), I(t, "helmetData"));
  }, o2.mapNestedChildrenToProps = function(t, e2) {
    if (!e2) return null;
    switch (t.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e2 };
      case l.STYLE:
        return { cssText: e2 };
      default:
        throw new Error("<" + t.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o2.flattenArrayTypeChildren = function(t) {
    var e2, r3 = t.child, n2 = t.arrayTypeChildren;
    return a({}, n2, ((e2 = {})[r3.type] = [].concat(n2[r3.type] || [], [a({}, t.newChildProps, this.mapNestedChildrenToProps(r3, t.nestedChildren))]), e2));
  }, o2.mapObjectTypeChildren = function(t) {
    var e2, r3, n2 = t.child, i2 = t.newProps, o3 = t.newChildProps, s2 = t.nestedChildren;
    switch (n2.type) {
      case l.TITLE:
        return a({}, i2, ((e2 = {})[n2.type] = s2, e2.titleAttributes = a({}, o3), e2));
      case l.BODY:
        return a({}, i2, { bodyAttributes: a({}, o3) });
      case l.HTML:
        return a({}, i2, { htmlAttributes: a({}, o3) });
      default:
        return a({}, i2, ((r3 = {})[n2.type] = a({}, o3), r3));
    }
  }, o2.mapArrayTypeChildrenToProps = function(t, e2) {
    var r3 = a({}, e2);
    return Object.keys(t).forEach(function(e3) {
      var n2;
      r3 = a({}, r3, ((n2 = {})[e3] = t[e3], n2));
    }), r3;
  }, o2.warnOnInvalidChildren = function(t, e2) {
    return i(h.some(function(e3) {
      return t.type === e3;
    }), "function" == typeof t.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t.type + "> elements. Refer to our API for more information."), i(!e2 || "string" == typeof e2 || Array.isArray(e2) && !e2.some(function(t2) {
      return "string" != typeof t2;
    }), "Helmet expects a string as a child of <" + t.type + ">. Did you forget to wrap your children in braces? ( <" + t.type + ">{``}</" + t.type + "> ) Refer to our API for more information."), true;
  }, o2.mapChildrenToProps = function(e2, r3) {
    var n2 = this, i2 = {};
    return React__default.Children.forEach(e2, function(t) {
      if (t && t.props) {
        var e3 = t.props, o3 = e3.children, a2 = u(e3, F), s2 = Object.keys(a2).reduce(function(t2, e4) {
          return t2[y[e4] || e4] = a2[e4], t2;
        }, {}), c2 = t.type;
        switch ("symbol" == typeof c2 ? c2 = c2.toString() : n2.warnOnInvalidChildren(t, o3), c2) {
          case l.FRAGMENT:
            r3 = n2.mapChildrenToProps(o3, r3);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i2 = n2.flattenArrayTypeChildren({ child: t, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o3 });
            break;
          default:
            r3 = n2.mapObjectTypeChildren({ child: t, newProps: r3, newChildProps: s2, nestedChildren: o3 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i2, r3);
  }, o2.render = function() {
    var e2 = this.props, r3 = e2.children, n2 = u(e2, G), i2 = a({}, n2), o3 = n2.helmetData;
    return r3 && (i2 = this.mapChildrenToProps(r3, i2)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? /* @__PURE__ */ React__default.createElement(z, a({}, i2, { context: o3.value, helmetData: void 0 })) : /* @__PURE__ */ React__default.createElement(R.Consumer, null, function(e3) {
      return React__default.createElement(z, a({}, i2, { context: e3 }));
    });
  }, r2;
}(Component);
W.propTypes = { base: r.object, bodyAttributes: r.object, children: r.oneOfType([r.arrayOf(r.node), r.node]), defaultTitle: r.string, defer: r.bool, encodeSpecialCharacters: r.bool, htmlAttributes: r.object, link: r.arrayOf(r.object), meta: r.arrayOf(r.object), noscript: r.arrayOf(r.object), onChangeClientState: r.func, script: r.arrayOf(r.object), style: r.arrayOf(r.object), title: r.string, titleAttributes: r.object, titleTemplate: r.string, prioritizeSeoTags: r.bool, helmetData: r.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";
function composeTitle(baseTitle, siteName) {
  if (!baseTitle && !siteName) return "";
  if (!siteName) return baseTitle ?? "";
  if (!baseTitle) return siteName;
  return `${baseTitle} | ${siteName}`;
}
function buildCanonical(url) {
  return url;
}
const SITE_URL = "https://www.antonyaddy.com";
const SITE_NAME = "Antony Addy";
const DEFAULT_LOCALE = "fr_FR";
const DEFAULT_LANG = "fr";
function normalizeCanonicalUrl(url) {
  try {
    const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
    const parsed = new URL(fullUrl);
    parsed.protocol = "https:";
    parsed.search = "";
    parsed.hash = "";
    let pathname = parsed.pathname;
    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    return `${parsed.origin}${pathname}`;
  } catch {
    const cleanPath = url === "/" ? "/" : url.replace(/\/$/, "").split("?")[0].split("#")[0];
    return `${SITE_URL}${cleanPath}`;
  }
}
function generateCanonicalUrl(path) {
  return normalizeCanonicalUrl(path);
}
function generateDefaultHreflangs(canonicalUrl) {
  return [
    { href: canonicalUrl, hrefLang: DEFAULT_LANG },
    { href: canonicalUrl, hrefLang: "x-default" }
  ];
}
function robotsValue(noIndex, noFollow) {
  if (!noIndex && !noFollow) return "index,follow";
  return `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;
}
function SEOHead(props) {
  const location = useLocation();
  const {
    title,
    siteName = SITE_NAME,
    description,
    canonical,
    canonicalPath,
    canonicalUrl,
    image,
    ogImage,
    imageAlt,
    imageWidth = 1200,
    imageHeight = 630,
    locale = DEFAULT_LOCALE,
    type = "website",
    twitterCard = "summary_large_image",
    twitterSite = "@antonyaddy",
    twitterCreator = "@antonyaddy",
    hreflangs,
    noIndex = false,
    noFollow = false,
    noindex = false,
    enableOrgJsonLd = false,
    enableWebSiteJsonLd = false,
    breadcrumbItems,
    article,
    datePublished,
    dateModified,
    jsonLd,
    author = "Antony Addy",
    section,
    tags
  } = props;
  const computedTitle = composeTitle(title, siteName);
  let finalCanonicalUrl;
  if (canonicalUrl) finalCanonicalUrl = buildCanonical(canonicalUrl);
  else if (canonical) finalCanonicalUrl = buildCanonical(canonical);
  else if (canonicalPath) finalCanonicalUrl = generateCanonicalUrl(canonicalPath);
  else finalCanonicalUrl = generateCanonicalUrl(location.pathname);
  const finalHreflangs = hreflangs && hreflangs.length > 0 ? hreflangs : generateDefaultHreflangs(finalCanonicalUrl);
  const robots = robotsValue(noIndex || noindex, noFollow);
  const finalImage = image || ogImage || `${SITE_URL}/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png`;
  const finalImageAlt = imageAlt || "Antony Addy - Formateur d'anglais professionnel";
  const metaTags = [];
  const push = (tag) => {
    const content = tag.content;
    if (content !== void 0 && content !== null && content !== "") {
      metaTags.push(tag);
    }
  };
  if (description) push({ name: "description", content: description });
  if (robots) push({ name: "robots", content: robots });
  push({ property: "og:title", content: computedTitle });
  if (description) push({ property: "og:description", content: description });
  push({ property: "og:url", content: finalCanonicalUrl });
  push({ property: "og:type", content: type });
  if (siteName) push({ property: "og:site_name", content: siteName });
  if (locale) push({ property: "og:locale", content: locale });
  push({ property: "og:image", content: finalImage });
  push({ property: "og:image:alt", content: finalImageAlt });
  push({ property: "og:image:width", content: String(imageWidth) });
  push({ property: "og:image:height", content: String(imageHeight) });
  if (author) push({ property: "article:author", content: author });
  if (section) push({ property: "article:section", content: section });
  if (tags) {
    tags.forEach((t) => push({ property: "article:tag", content: t }));
  }
  if (datePublished)
    push({ property: "article:published_time", content: datePublished });
  if (dateModified)
    push({ property: "article:modified_time", content: dateModified });
  push({ name: "twitter:card", content: twitterCard });
  if (twitterSite) push({ name: "twitter:site", content: twitterSite });
  if (twitterCreator) push({ name: "twitter:creator", content: twitterCreator });
  push({ name: "twitter:title", content: computedTitle });
  if (description) push({ name: "twitter:description", content: description });
  push({ name: "twitter:image", content: finalImage });
  push({ name: "twitter:image:alt", content: finalImageAlt });
  if (author) push({ name: "author", content: author });
  push({ name: "geo.region", content: "FR-83" });
  push({
    name: "geo.placename",
    content: "Fréjus, Var & Alpes-Maritimes, France"
  });
  const linkTags = [
    { rel: "canonical", href: finalCanonicalUrl },
    ...finalHreflangs.map(({ href, hrefLang }) => ({
      rel: "alternate",
      hreflang: hrefLang,
      href
    }))
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      W,
      {
        htmlAttributes: { lang: DEFAULT_LANG },
        title: computedTitle,
        meta: metaTags,
        link: linkTags
      }
    ),
    enableOrgJsonLd && /* @__PURE__ */ jsx(OrgJsonLd, { siteName }),
    enableWebSiteJsonLd && /* @__PURE__ */ jsx(WebSiteJsonLd, { siteName, url: finalCanonicalUrl }),
    breadcrumbItems && breadcrumbItems.length > 0 && /* @__PURE__ */ jsx(BreadcrumbJsonLd, { items: breadcrumbItems }),
    type === "article" && article && /* @__PURE__ */ jsx(
      ArticleJsonLd,
      {
        headline: article.headline,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        authorName: article.authorName,
        type: article.type,
        url: finalCanonicalUrl
      }
    ),
    Array.isArray(jsonLd) ? jsonLd.map((block, i2) => /* @__PURE__ */ jsx(RawJsonLd, { json: block }, i2)) : jsonLd ? /* @__PURE__ */ jsx(RawJsonLd, { json: jsonLd }) : null
  ] });
}
const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Redirection",
        description: "Cette ressource a été déplacée sur anglaisadistance.fr.",
        noIndex: true,
        noFollow: true
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { padding: "4rem 1.5rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxs("p", { style: { fontSize: "1rem", color: "hsl(var(--muted-foreground))" }, children: [
        "Redirection vers ",
        /* @__PURE__ */ jsx("strong", { children: "anglaisadistance.fr" }),
        "…"
      ] }),
      /* @__PURE__ */ jsxs("p", { style: { marginTop: "0.75rem", fontSize: "0.875rem" }, children: [
        "Si rien ne se passe,",
        " ",
        /* @__PURE__ */ jsx("a", { href: to, style: { color: "hsl(var(--primary))", textDecoration: "underline" }, children: "cliquez ici" }),
        "."
      ] })
    ] })
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  const recoveryActions = [
    { href: "/", label: "Back to Home", icon: Home, variant: "default" },
    { href: "/ressources-gratuites", label: "Explore Free Resources", icon: BookOpen, variant: "outline" },
    { href: "/conversation-trainer", label: "Continue your English practice →", icon: Sparkles, variant: "outline" },
    { href: "/contact", label: "Contact Antony", icon: Mail, variant: "ghost" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Page not found — 404 | Antony Addy",
        description: "The page you're looking for doesn't exist or has been moved. Browse free English exercises, the AI trainer, or get in touch with Antony.",
        noIndex: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-7xl font-bold text-primary mb-4", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-foreground mb-3", children: "Page not found" }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mb-8 max-w-md mx-auto", children: "The page you're looking for doesn't exist or has been moved. Pick one of the options below to keep going." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto", children: recoveryActions.map((a2) => /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          variant: a2.variant,
          className: "w-full justify-start",
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: a2.href,
              onClick: () => trackEvent("404_cta_click", {
                source: "not_found_page",
                from: location.pathname,
                target: a2.href,
                label: a2.label
              }),
              children: [
                /* @__PURE__ */ jsx(a2.icon, { className: "w-4 h-4 mr-2" }),
                a2.label
              ]
            }
          )
        },
        a2.href
      )) })
    ] }) })
  ] });
};
const grammarBlogPosts = [
  {
    id: "present-simple-vs-present-continuous",
    title: "Present Simple vs Present Continuous : Quelle différence ?",
    excerpt: "Comprendre quand utiliser le Present Simple et le Present Continuous est essentiel pour parler anglais correctement. Découvrez les règles et exemples pratiques.",
    content: `
      <p>La distinction entre le <strong>Present Simple</strong> et le <strong>Present Continuous</strong> est l'une des premières difficultés rencontrées par les francophones. Ces deux temps expriment le présent mais dans des contextes très différents.</p>

      <h2>Le Present Simple : habitudes et vérités générales</h2>
      <p>Le Present Simple s'utilise pour :</p>
      <ul>
        <li><strong>Les habitudes et routines</strong> : "I wake up at 7 AM every day"</li>
        <li><strong>Les vérités générales</strong> : "Water boils at 100°C"</li>
        <li><strong>Les situations permanentes</strong> : "She lives in Paris"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> always, usually, often, sometimes, never, every day/week/month</p>

      <h2>Le Present Continuous : actions en cours</h2>
      <p>Le Present Continuous s'utilise pour :</p>
      <ul>
        <li><strong>Actions en cours</strong> : "I am reading a book right now"</li>
        <li><strong>Situations temporaires</strong> : "He is staying with us this week"</li>
        <li><strong>Arrangements futurs</strong> : "We are meeting tomorrow"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> now, at the moment, currently, right now, today</p>

      <h2>Exemples comparatifs</h2>
      <ul>
        <li>"I <strong>work</strong> in a bank." (emploi permanent) vs "I <strong>am working</strong> on a project." (en ce moment)</li>
        <li>"She <strong>speaks</strong> three languages." (capacité permanente) vs "She <strong>is speaking</strong> to her boss right now." (action en cours)</li>
      </ul>

      <h2>Attention aux verbes d'état</h2>
      <p>Certains verbes ne s'utilisent généralement pas au Present Continuous : know, understand, believe, love, hate, want, need, prefer.</p>
      <p>❌ "I am understanding" → ✅ "I understand"</p>
    `,
    date: "2025-01-20",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "5 min",
    description: "Maîtrisez la différence entre Present Simple et Present Continuous avec des explications claires et des exemples pratiques.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "present-simple-continuous"
  },
  {
    id: "past-simple-vs-present-perfect",
    title: "Past Simple vs Present Perfect : Comment choisir ?",
    excerpt: "Le Past Simple et le Present Perfect sont souvent confondus par les francophones. Apprenez à les distinguer avec des règles simples.",
    content: `
      <p>La distinction entre <strong>Past Simple</strong> et <strong>Present Perfect</strong> est cruciale en anglais. Ces deux temps parlent du passé mais avec des perspectives différentes.</p>

      <h2>Le Past Simple : passé terminé et daté</h2>
      <p>Le Past Simple s'utilise pour :</p>
      <ul>
        <li><strong>Actions terminées à un moment précis</strong> : "I visited Paris in 2019"</li>
        <li><strong>Séquences d'événements</strong> : "I got up, had breakfast, and left"</li>
        <li><strong>Habitudes passées</strong> : "She always walked to school"</li>
      </ul>
      <p><strong>Mots-clés :</strong> yesterday, last week/month/year, in 2019, ago, when</p>

      <h2>Le Present Perfect : lien avec le présent</h2>
      <p>Le Present Perfect s'utilise pour :</p>
      <ul>
        <li><strong>Expériences de vie</strong> (sans moment précis) : "I have visited Paris"</li>
        <li><strong>Actions commencées dans le passé qui continuent</strong> : "I have lived here for 5 years"</li>
        <li><strong>Actions récentes avec impact présent</strong> : "I have just finished my work"</li>
      </ul>
      <p><strong>Mots-clés :</strong> ever, never, already, yet, just, since, for, recently</p>

      <h2>La clé : le moment est-il précisé ?</h2>
      <ul>
        <li>"I <strong>went</strong> to Rome last summer." (moment précis → Past Simple)</li>
        <li>"I <strong>have been</strong> to Rome." (expérience de vie → Present Perfect)</li>
        <li>"She <strong>worked</strong> here for 5 years." (elle n'y travaille plus)</li>
        <li>"She <strong>has worked</strong> here for 5 years." (elle y travaille encore)</li>
      </ul>
    `,
    date: "2025-01-19",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "6 min",
    description: "Comprenez enfin la différence entre Past Simple et Present Perfect avec des règles claires et des exemples concrets.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "past-simple-present-perfect"
  },
  {
    id: "past-simple-vs-past-continuous",
    title: "Past Simple vs Past Continuous : Actions et contexte",
    excerpt: "Découvrez comment utiliser le Past Simple et le Past Continuous pour raconter des histoires et décrire des situations passées.",
    content: `
      <p>Le <strong>Past Simple</strong> et le <strong>Past Continuous</strong> travaillent souvent ensemble pour raconter des histoires, créant un effet de "scène" et "action".</p>

      <h2>Le Past Simple : actions complètes</h2>
      <ul>
        <li><strong>Actions terminées</strong> : "I finished my work"</li>
        <li><strong>Actions courtes</strong> : "She opened the door"</li>
        <li><strong>Séquences</strong> : "He arrived, sat down, and ordered a coffee"</li>
      </ul>

      <h2>Le Past Continuous : actions en cours (décor)</h2>
      <ul>
        <li><strong>Actions en cours à un moment précis</strong> : "I was reading at 8 PM"</li>
        <li><strong>Actions interrompues</strong> : "I was cooking when he called"</li>
        <li><strong>Actions simultanées</strong> : "While I was reading, she was watching TV"</li>
      </ul>

      <h2>Le schéma classique : When + Past Simple + Past Continuous</h2>
      <p>L'action courte (Past Simple) interrompt l'action longue (Past Continuous) :</p>
      <ul>
        <li>"When the phone <strong>rang</strong>, I <strong>was having</strong> a shower."</li>
        <li>"I <strong>was walking</strong> home when I <strong>met</strong> John."</li>
        <li>"He <strong>fell</strong> asleep while he <strong>was watching</strong> the film."</li>
      </ul>

      <h2>Astuce visuelle</h2>
      <p>Imaginez une scène de film : le Past Continuous est le décor (ce qui se passe en arrière-plan), le Past Simple est l'action principale qui se produit.</p>
    `,
    date: "2025-01-18",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "5 min",
    description: "Apprenez à combiner Past Simple et Past Continuous pour raconter des histoires en anglais de manière naturelle.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "past-simple-continuous"
  },
  {
    id: "past-simple-vs-past-perfect",
    title: "Past Simple vs Past Perfect : Le passé du passé",
    excerpt: "Le Past Perfect permet de parler d'une action antérieure à une autre action passée. Découvrez comment l'utiliser correctement.",
    content: `
      <p>Le <strong>Past Perfect</strong> est le "passé du passé". Il permet de clarifier l'ordre chronologique de deux événements passés.</p>

      <h2>Quand utiliser le Past Perfect ?</h2>
      <p>Utilisez le Past Perfect pour une action qui s'est produite <strong>AVANT</strong> une autre action passée :</p>
      <ul>
        <li>"When I <strong>arrived</strong>, she <strong>had</strong> already <strong>left</strong>." (Elle est partie d'abord, puis je suis arrivé)</li>
        <li>"I didn't recognize him because he <strong>had changed</strong> so much."</li>
      </ul>

      <h2>Structure</h2>
      <p><strong>Had + participe passé</strong></p>
      <ul>
        <li>I had finished / She had gone / They had eaten</li>
      </ul>

      <h2>Mots-clés associés</h2>
      <p>after, before, when, by the time, already, just, never... before</p>
      <ul>
        <li>"<strong>After</strong> I <strong>had finished</strong> dinner, I watched TV."</li>
        <li>"<strong>By the time</strong> we got there, the film <strong>had started</strong>."</li>
        <li>"I <strong>had never seen</strong> such a beautiful sunset <strong>before</strong> that day."</li>
      </ul>

      <h2>Quand NE PAS l'utiliser</h2>
      <p>Si les événements sont racontés dans l'ordre chronologique, le Past Simple suffit :</p>
      <p>"I finished my homework and then watched TV." (ordre chronologique clair)</p>
    `,
    date: "2025-01-17",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "5 min",
    description: "Maîtrisez le Past Perfect pour exprimer l'antériorité dans le passé et raconter des événements dans le bon ordre.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "past-simple-perfect"
  },
  {
    id: "past-perfect-continuous",
    title: "Le Past Perfect Continuous expliqué simplement",
    excerpt: "Le Past Perfect Continuous combine durée et antériorité. Apprenez à l'utiliser pour décrire des actions continues avant un moment passé.",
    content: `
      <p>Le <strong>Past Perfect Continuous</strong> décrit une action qui était <strong>en cours pendant une durée</strong> avant un autre événement passé.</p>

      <h2>Structure</h2>
      <p><strong>Had been + verbe-ing</strong></p>
      <ul>
        <li>I had been waiting / She had been working / They had been studying</li>
      </ul>

      <h2>Utilisations principales</h2>
      <ul>
        <li><strong>Durée avant un événement passé</strong> : "I <strong>had been waiting</strong> for 2 hours when she finally arrived."</li>
        <li><strong>Cause d'une situation passée</strong> : "He was tired because he <strong>had been working</strong> all night."</li>
        <li><strong>Action récemment terminée avec effet visible</strong> : "Her eyes were red. She <strong>had been crying</strong>."</li>
      </ul>

      <h2>Mots-clés</h2>
      <p>for, since, all day/night/week, how long</p>

      <h2>Past Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "I <strong>had written</strong> three emails." (3 emails terminés)</li>
        <li><strong>Continuous</strong> (durée/processus) : "I <strong>had been writing</strong> emails all morning." (focus sur la durée)</li>
      </ul>
    `,
    date: "2025-01-16",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "4 min",
    description: "Comprenez le Past Perfect Continuous pour exprimer la durée d'une action avant un moment passé.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "past-perfect-continuous"
  },
  {
    id: "future-continuous",
    title: "Le Future Continuous : Actions en cours dans le futur",
    excerpt: "Le Future Continuous permet de parler d'actions qui seront en cours à un moment précis du futur.",
    content: `
      <p>Le <strong>Future Continuous</strong> décrit une action qui sera <strong>en cours</strong> à un moment spécifique dans le futur.</p>

      <h2>Structure</h2>
      <p><strong>Will be + verbe-ing</strong></p>
      <ul>
        <li>I will be working / She will be traveling / They will be sleeping</li>
      </ul>

      <h2>Utilisations</h2>
      <ul>
        <li><strong>Action en cours à un moment futur</strong> : "This time tomorrow, I <strong>will be flying</strong> to New York."</li>
        <li><strong>Événements prévus/normaux</strong> : "Don't call at 8 PM. I <strong>will be having</strong> dinner."</li>
        <li><strong>Questions polies sur les plans</strong> : "<strong>Will you be using</strong> the car tonight?"</li>
      </ul>

      <h2>Expressions temporelles</h2>
      <p>this time tomorrow, at 3 PM, in an hour, when you arrive, all day tomorrow</p>

      <h2>Future Simple vs Future Continuous</h2>
      <ul>
        <li><strong>Simple</strong> : "I <strong>will work</strong> tomorrow." (fait/décision)</li>
        <li><strong>Continuous</strong> : "I <strong>will be working</strong> at 9 AM tomorrow." (en cours à ce moment)</li>
      </ul>
    `,
    date: "2025-01-15",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "4 min",
    description: "Apprenez à utiliser le Future Continuous pour décrire des actions en cours à un moment précis du futur.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "future-continuous"
  },
  {
    id: "future-perfect-continuous",
    title: "Le Future Perfect Continuous : Durée jusqu'au futur",
    excerpt: "Le Future Perfect Continuous exprime la durée d'une action jusqu'à un point dans le futur. Un temps avancé expliqué simplement.",
    content: `
      <p>Le <strong>Future Perfect Continuous</strong> décrit la <strong>durée</strong> d'une action qui sera en cours jusqu'à un moment futur.</p>

      <h2>Structure</h2>
      <p><strong>Will have been + verbe-ing</strong></p>

      <h2>Utilisation principale</h2>
      <p>Souligner <strong>combien de temps</strong> une action aura duré à un moment futur :</p>
      <ul>
        <li>"By December, I <strong>will have been working</strong> here <strong>for 10 years</strong>."</li>
        <li>"Next month, they <strong>will have been living</strong> in Paris <strong>for 5 years</strong>."</li>
      </ul>

      <h2>Future Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "By 6 PM, I <strong>will have finished</strong> the report." (terminé)</li>
        <li><strong>Continuous</strong> (durée) : "By 6 PM, I <strong>will have been working</strong> on this report for 8 hours." (focus sur le temps passé)</li>
      </ul>

      <h2>Expressions clés</h2>
      <p>by + moment futur, for + durée, when + événement futur</p>
    `,
    date: "2025-01-14",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "4 min",
    description: "Maîtrisez le Future Perfect Continuous pour exprimer la durée d'une action jusqu'à un point futur.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "future-perfect-continuous"
  },
  {
    id: "prepositions-de-lieu",
    title: "Les prépositions de lieu en anglais : in, on, at, under...",
    excerpt: "Maîtrisez les prépositions de lieu anglaises avec des règles claires et des exemples concrets pour ne plus jamais vous tromper.",
    content: `
      <p>Les <strong>prépositions de lieu</strong> indiquent la position d'une personne ou d'un objet. Voici les principales à maîtriser.</p>

      <h2>IN - à l'intérieur</h2>
      <ul>
        <li>in the box, in the room, in the car</li>
        <li>in Paris, in France (villes, pays)</li>
        <li>in the water, in the sky</li>
      </ul>

      <h2>ON - sur une surface</h2>
      <ul>
        <li>on the table, on the wall, on the floor</li>
        <li>on the bus/train/plane (transports publics)</li>
        <li>on the left/right, on the corner</li>
      </ul>

      <h2>AT - point précis</h2>
      <ul>
        <li>at the door, at the bus stop, at the corner</li>
        <li>at home, at work, at school</li>
        <li>at the top/bottom</li>
      </ul>

      <h2>Autres prépositions essentielles</h2>
      <ul>
        <li><strong>under</strong> : under the table (sous)</li>
        <li><strong>above/over</strong> : above the door (au-dessus)</li>
        <li><strong>between</strong> : between the two buildings (entre)</li>
        <li><strong>next to/beside</strong> : next to the bank (à côté de)</li>
        <li><strong>in front of/behind</strong> : in front of the house (devant/derrière)</li>
      </ul>
    `,
    date: "2025-01-13",
    author: "Antony Addy",
    category: "Grammaire - Prépositions",
    readTime: "5 min",
    description: "Guide complet des prépositions de lieu en anglais : in, on, at, under, above et plus encore.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "prepositions-place"
  },
  {
    id: "prepositions-de-temps",
    title: "Les prépositions de temps : in, on, at - Quand les utiliser ?",
    excerpt: "In, on, at pour le temps : découvrez les règles simples pour ne plus confondre ces prépositions temporelles.",
    content: `
      <p>Les prépositions <strong>in, on, at</strong> s'utilisent aussi pour le temps, avec des règles précises à connaître.</p>

      <h2>AT - moments précis</h2>
      <ul>
        <li><strong>Heures</strong> : at 3 o'clock, at noon, at midnight</li>
        <li><strong>Moments de la journée</strong> : at night, at lunchtime</li>
        <li><strong>Fêtes</strong> : at Christmas, at Easter</li>
        <li><strong>Expressions</strong> : at the moment, at the weekend (UK)</li>
      </ul>

      <h2>ON - jours et dates</h2>
      <ul>
        <li><strong>Jours</strong> : on Monday, on weekdays</li>
        <li><strong>Dates</strong> : on 15th January, on my birthday</li>
        <li><strong>Jours spéciaux</strong> : on Christmas Day, on New Year's Eve</li>
      </ul>

      <h2>IN - périodes plus longues</h2>
      <ul>
        <li><strong>Parties du jour</strong> : in the morning/afternoon/evening</li>
        <li><strong>Mois</strong> : in January, in December</li>
        <li><strong>Saisons</strong> : in summer, in winter</li>
        <li><strong>Années/siècles</strong> : in 2025, in the 21st century</li>
        <li><strong>Durée future</strong> : in 5 minutes, in 2 weeks</li>
      </ul>

      <h2>Astuce mnémotechnique</h2>
      <p>Du plus petit au plus grand : AT (point) → ON (jour) → IN (période)</p>
    `,
    date: "2025-01-12",
    author: "Antony Addy",
    category: "Grammaire - Prépositions",
    readTime: "5 min",
    description: "Maîtrisez les prépositions de temps in, on, at avec des règles claires et des exemples pratiques.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "prepositions-time"
  },
  {
    id: "comparatifs-en-anglais",
    title: "Les comparatifs en anglais : more, -er, as...as",
    excerpt: "Comment comparer deux éléments en anglais ? Découvrez les règles des comparatifs avec des exemples clairs.",
    content: `
      <p>Les <strong>comparatifs</strong> permettent de comparer deux éléments. La formation dépend de la longueur de l'adjectif.</p>

      <h2>Adjectifs courts (1 syllabe) : -er + than</h2>
      <ul>
        <li>tall → <strong>taller</strong> than : "He is taller than me."</li>
        <li>old → <strong>older</strong> than : "This car is older than that one."</li>
        <li>fast → <strong>faster</strong> than</li>
      </ul>

      <h2>Adjectifs longs (2+ syllabes) : more + adj + than</h2>
      <ul>
        <li>expensive → <strong>more expensive</strong> than</li>
        <li>interesting → <strong>more interesting</strong> than</li>
        <li>beautiful → <strong>more beautiful</strong> than</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li>Adjectifs en -y : happy → happ<strong>ier</strong>, easy → eas<strong>ier</strong></li>
        <li>Doublement de la consonne : big → bi<strong>gger</strong>, hot → ho<strong>tter</strong></li>
      </ul>

      <h2>Comparatifs irréguliers</h2>
      <ul>
        <li>good → <strong>better</strong> than</li>
        <li>bad → <strong>worse</strong> than</li>
        <li>far → <strong>farther/further</strong> than</li>
      </ul>

      <h2>Égalité : as...as</h2>
      <p>"She is <strong>as tall as</strong> her brother." (aussi grand que)</p>
      <p>"It's not <strong>as expensive as</strong> I thought." (pas aussi cher que)</p>
    `,
    date: "2025-01-11",
    author: "Antony Addy",
    category: "Grammaire - Adjectifs",
    readTime: "5 min",
    description: "Guide complet des comparatifs en anglais : formation, exceptions et exemples pratiques.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "comparatives"
  },
  {
    id: "superlatifs-en-anglais",
    title: "Les superlatifs en anglais : the most, the -est",
    excerpt: "Comment exprimer le plus haut degré en anglais ? Maîtrisez les superlatifs avec des règles simples.",
    content: `
      <p>Les <strong>superlatifs</strong> expriment le degré le plus élevé d'une qualité parmi trois éléments ou plus.</p>

      <h2>Adjectifs courts : the + -est</h2>
      <ul>
        <li>tall → <strong>the tallest</strong> : "He is the tallest in the class."</li>
        <li>old → <strong>the oldest</strong> : "This is the oldest building in town."</li>
        <li>fast → <strong>the fastest</strong></li>
      </ul>

      <h2>Adjectifs longs : the most + adj</h2>
      <ul>
        <li>expensive → <strong>the most expensive</strong></li>
        <li>interesting → <strong>the most interesting</strong></li>
        <li>beautiful → <strong>the most beautiful</strong></li>
      </ul>

      <h2>Superlatifs irréguliers</h2>
      <ul>
        <li>good → <strong>the best</strong></li>
        <li>bad → <strong>the worst</strong></li>
        <li>far → <strong>the farthest/furthest</strong></li>
      </ul>

      <h2>Structures courantes</h2>
      <ul>
        <li>"It's <strong>the best</strong> film I've ever seen."</li>
        <li>"She's <strong>one of the most talented</strong> singers in the world."</li>
        <li>"This is <strong>by far the most difficult</strong> exam."</li>
      </ul>
    `,
    date: "2025-01-10",
    author: "Antony Addy",
    category: "Grammaire - Adjectifs",
    readTime: "4 min",
    description: "Maîtrisez les superlatifs en anglais : formation, irréguliers et expressions courantes.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "superlatives"
  },
  {
    id: "countable-uncountable-nouns",
    title: "Noms dénombrables et indénombrables en anglais",
    excerpt: "Some ou any ? Much ou many ? Comprenez la différence entre noms dénombrables et indénombrables.",
    content: `
      <p>En anglais, les noms sont soit <strong>dénombrables</strong> (countable) soit <strong>indénombrables</strong> (uncountable). Cette distinction affecte le vocabulaire utilisé.</p>

      <h2>Noms dénombrables</h2>
      <p>On peut les compter : a book, two books, three books</p>
      <ul>
        <li>Singulier + pluriel : apple/apples, car/cars, idea/ideas</li>
        <li>Quantificateurs : many, few, a few, several, a number of</li>
      </ul>

      <h2>Noms indénombrables</h2>
      <p>On ne peut pas les compter directement : water, music, information</p>
      <ul>
        <li>Pas de pluriel : ❌ waters, musics, informations</li>
        <li>Quantificateurs : much, little, a little, a great deal of</li>
        <li>Pour quantifier : a piece of advice, a glass of water, a slice of bread</li>
      </ul>

      <h2>Catégories d'indénombrables</h2>
      <ul>
        <li><strong>Liquides</strong> : water, milk, coffee, wine</li>
        <li><strong>Matières</strong> : wood, gold, paper, glass</li>
        <li><strong>Concepts abstraits</strong> : advice, information, news, knowledge</li>
        <li><strong>Activités</strong> : homework, work, research</li>
      </ul>

      <h2>Some/Any - How much/How many</h2>
      <ul>
        <li>"<strong>How much</strong> water?" vs "<strong>How many</strong> bottles?"</li>
        <li>"There isn't <strong>much</strong> time." vs "There aren't <strong>many</strong> people."</li>
      </ul>
    `,
    date: "2025-01-09",
    author: "Antony Addy",
    category: "Grammaire - Noms",
    readTime: "6 min",
    description: "Comprenez la différence entre noms dénombrables et indénombrables pour utiliser les bons quantificateurs.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "countable-uncountable"
  },
  {
    id: "demonstratives-this-that-these-those",
    title: "This, That, These, Those : Les démonstratifs expliqués",
    excerpt: "Quand utiliser this, that, these ou those ? Maîtrisez les démonstratifs anglais avec des règles simples.",
    content: `
      <p>Les <strong>démonstratifs</strong> permettent de désigner des personnes ou des objets selon leur distance (proche ou éloigné) et leur nombre (singulier ou pluriel).</p>

      <h2>Tableau récapitulatif</h2>
      <table>
        <tr><th></th><th>Proche</th><th>Éloigné</th></tr>
        <tr><td><strong>Singulier</strong></td><td>this</td><td>that</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>these</td><td>those</td></tr>
      </table>

      <h2>THIS / THESE - Proche</h2>
      <ul>
        <li>"<strong>This</strong> book is interesting." (ce livre-ci)</li>
        <li>"<strong>These</strong> shoes are comfortable." (ces chaussures-ci)</li>
        <li>Aussi pour : le présent, ce qui vient d'être mentionné, les présentations téléphoniques</li>
      </ul>

      <h2>THAT / THOSE - Éloigné</h2>
      <ul>
        <li>"<strong>That</strong> building is very old." (ce bâtiment là-bas)</li>
        <li>"<strong>Those</strong> people are waiting for the bus." (ces gens là-bas)</li>
        <li>Aussi pour : le passé, ce qui a été mentionné plus tôt</li>
      </ul>

      <h2>Usages particuliers</h2>
      <ul>
        <li><strong>Au téléphone</strong> : "Hello, <strong>this</strong> is John." (pas "I am")</li>
        <li><strong>Présentations</strong> : "<strong>This</strong> is my colleague, Sarah."</li>
        <li><strong>Référence au temps</strong> : "<strong>This</strong> morning" (aujourd'hui) vs "<strong>That</strong> morning" (ce jour-là, passé)</li>
      </ul>
    `,
    date: "2025-01-08",
    author: "Antony Addy",
    category: "Grammaire - Déterminants",
    readTime: "4 min",
    description: "Guide complet des démonstratifs anglais : this, that, these, those avec exemples et règles.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "demonstratives"
  },
  {
    id: "conditionals-zero-first-second-third",
    title: "Les conditionnels en anglais : Zero, First, Second, Third",
    excerpt: "Maîtrisez les quatre types de conditionnels anglais avec des explications claires et des exemples pratiques.",
    content: `
      <p>L'anglais possède plusieurs types de <strong>conditionnels</strong> selon le degré de probabilité ou de réalité de la situation.</p>

      <h2>Zero Conditional - Vérités générales</h2>
      <p><strong>If + present simple, present simple</strong></p>
      <p>"If you heat water to 100°C, it boils." (toujours vrai)</p>

      <h2>First Conditional - Situations réelles/probables</h2>
      <p><strong>If + present simple, will + infinitif</strong></p>
      <p>"If it rains tomorrow, I will stay home." (possible)</p>

      <h2>Second Conditional - Situations hypothétiques</h2>
      <p><strong>If + past simple, would + infinitif</strong></p>
      <p>"If I won the lottery, I would travel the world." (peu probable/imaginaire)</p>
      <p>Note : "If I <strong>were</strong> you..." (formel, pour les conseils)</p>

      <h2>Third Conditional - Passé irréel (regrets)</h2>
      <p><strong>If + past perfect, would have + participe passé</strong></p>
      <p>"If I had studied harder, I would have passed the exam." (mais je n'ai pas étudié)</p>

      <h2>Résumé visuel</h2>
      <ul>
        <li><strong>Zero</strong> : fait scientifique → présent + présent</li>
        <li><strong>First</strong> : futur probable → présent + will</li>
        <li><strong>Second</strong> : hypothèse présente → passé + would</li>
        <li><strong>Third</strong> : passé irréel → past perfect + would have</li>
      </ul>
    `,
    date: "2025-01-07",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "7 min",
    description: "Guide complet des conditionnels anglais : Zero, First, Second et Third conditional expliqués.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "conditionals"
  },
  {
    id: "passive-voice",
    title: "La voix passive en anglais : Formation et usages",
    excerpt: "Quand et comment utiliser la voix passive en anglais ? Découvrez les règles et transformez vos phrases actives.",
    content: `
      <p>La <strong>voix passive</strong> met l'accent sur l'action ou l'objet plutôt que sur l'auteur de l'action.</p>

      <h2>Formation</h2>
      <p><strong>Sujet + BE (conjugué) + participe passé (+ by + agent)</strong></p>
      <ul>
        <li>Active : "Someone stole my car."</li>
        <li>Passive : "My car <strong>was stolen</strong>."</li>
      </ul>

      <h2>À tous les temps</h2>
      <ul>
        <li>Present Simple : "The office <strong>is cleaned</strong> every day."</li>
        <li>Past Simple : "The letter <strong>was sent</strong> yesterday."</li>
        <li>Present Perfect : "The work <strong>has been completed</strong>."</li>
        <li>Future : "The results <strong>will be announced</strong> tomorrow."</li>
        <li>Modal : "This <strong>can be done</strong> easily."</li>
      </ul>

      <h2>Quand utiliser le passif ?</h2>
      <ul>
        <li><strong>L'auteur est inconnu</strong> : "My bike was stolen."</li>
        <li><strong>L'auteur n'est pas important</strong> : "English is spoken worldwide."</li>
        <li><strong>Contexte formel/scientifique</strong> : "The experiment was conducted..."</li>
        <li><strong>Pour éviter de blâmer</strong> : "Mistakes were made."</li>
      </ul>

      <h2>By + agent</h2>
      <p>On mentionne l'agent seulement s'il apporte une information importante :</p>
      <p>"The Mona Lisa was painted <strong>by Leonardo da Vinci</strong>."</p>
    `,
    date: "2025-01-06",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "6 min",
    description: "Maîtrisez la voix passive anglaise : formation, usages et transformation de phrases actives.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "passive-voice"
  },
  {
    id: "phrasal-verbs",
    title: "Les Phrasal Verbs : Guide essentiel pour les maîtriser",
    excerpt: "Les phrasal verbs sont incontournables en anglais. Découvrez comment ils fonctionnent et apprenez les plus courants.",
    content: `
      <p>Les <strong>phrasal verbs</strong> sont des verbes composés d'un verbe + une particule (préposition ou adverbe) qui change le sens du verbe.</p>

      <h2>Pourquoi sont-ils difficiles ?</h2>
      <p>Le sens n'est souvent pas déductible des éléments séparés :</p>
      <ul>
        <li>"give up" ≠ "donner vers le haut" → signifie "abandonner"</li>
        <li>"look after" ≠ "regarder après" → signifie "s'occuper de"</li>
      </ul>

      <h2>Séparables vs Inséparables</h2>
      <p><strong>Séparables</strong> - l'objet peut aller au milieu ou après :</p>
      <ul>
        <li>"Turn off the light" = "Turn the light off" ✓</li>
        <li>Avec pronom : "Turn <strong>it</strong> off" (obligatoire au milieu)</li>
      </ul>
      <p><strong>Inséparables</strong> - l'objet va toujours après :</p>
      <ul>
        <li>"Look after the children" ✓</li>
        <li>❌ "Look the children after"</li>
      </ul>

      <h2>Phrasal verbs courants</h2>
      <ul>
        <li><strong>get up</strong> : se lever</li>
        <li><strong>wake up</strong> : se réveiller</li>
        <li><strong>turn on/off</strong> : allumer/éteindre</li>
        <li><strong>look for</strong> : chercher</li>
        <li><strong>find out</strong> : découvrir</li>
        <li><strong>give up</strong> : abandonner</li>
        <li><strong>put off</strong> : reporter</li>
        <li><strong>carry on</strong> : continuer</li>
      </ul>
    `,
    date: "2025-01-05",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "6 min",
    description: "Guide complet des phrasal verbs anglais : séparables, inséparables et les plus courants à connaître.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "phrasal-verbs"
  },
  {
    id: "articles-a-an-the",
    title: "Les articles en anglais : A, An, The ou rien ?",
    excerpt: "Quand utiliser a, an, the ou pas d'article ? Les règles essentielles pour ne plus hésiter.",
    content: `
      <p>Les <strong>articles</strong> sont l'une des difficultés majeures pour les francophones. Voici les règles essentielles.</p>

      <h2>A / AN - Articles indéfinis</h2>
      <p>Pour quelque chose de <strong>non spécifique</strong>, mentionné pour la première fois :</p>
      <ul>
        <li><strong>A</strong> devant consonne : a book, a house, a university (son "yu")</li>
        <li><strong>AN</strong> devant voyelle (son) : an apple, an hour (h muet), an MBA</li>
      </ul>

      <h2>THE - Article défini</h2>
      <p>Pour quelque chose de <strong>spécifique</strong>, déjà connu ou unique :</p>
      <ul>
        <li>"I saw <strong>a</strong> dog. <strong>The</strong> dog was brown." (déjà mentionné)</li>
        <li>"<strong>The</strong> sun, <strong>the</strong> moon, <strong>the</strong> president" (unique)</li>
        <li>"<strong>The</strong> book you lent me" (spécifié par contexte)</li>
      </ul>

      <h2>Pas d'article (Ø)</h2>
      <ul>
        <li><strong>Généralisations</strong> : "Ø Dogs are loyal." (les chiens en général)</li>
        <li><strong>Noms propres</strong> : Ø France, Ø London, Ø Mount Everest</li>
        <li><strong>Repas, sports, langues</strong> : Ø breakfast, Ø tennis, Ø English</li>
        <li><strong>Certaines expressions</strong> : at Ø work, at Ø home, go to Ø bed</li>
      </ul>

      <h2>Exceptions avec THE</h2>
      <p>the United States, the Netherlands, the Alps, the Pacific Ocean</p>
    `,
    date: "2025-01-04",
    author: "Antony Addy",
    category: "Grammaire - Déterminants",
    readTime: "6 min",
    description: "Maîtrisez les articles anglais a, an, the et l'article zéro avec des règles claires.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "articles"
  },
  {
    id: "modal-verbs",
    title: "Les verbes modaux : Can, Could, Must, Should...",
    excerpt: "Les modaux expriment la capacité, l'obligation, la probabilité et plus. Guide complet avec exemples.",
    content: `
      <p>Les <strong>verbes modaux</strong> sont des auxiliaires qui expriment la capacité, la permission, l'obligation, la probabilité, etc.</p>

      <h2>Caractéristiques des modaux</h2>
      <ul>
        <li>Pas de -s à la 3e personne : "He <strong>can</strong> swim" (pas "cans")</li>
        <li>Suivis de l'infinitif sans TO : "You <strong>must go</strong>" (pas "must to go")</li>
        <li>Questions par inversion : "<strong>Can</strong> you help me?"</li>
      </ul>

      <h2>CAN / COULD - Capacité et permission</h2>
      <ul>
        <li><strong>Can</strong> : capacité présente, permission → "I can swim."</li>
        <li><strong>Could</strong> : capacité passée, demande polie → "Could you help me?"</li>
      </ul>

      <h2>MUST / HAVE TO - Obligation</h2>
      <ul>
        <li><strong>Must</strong> : obligation forte/personnelle → "I must study tonight."</li>
        <li><strong>Have to</strong> : obligation externe → "I have to wear a uniform."</li>
        <li><strong>Mustn't</strong> : interdiction ≠ <strong>Don't have to</strong> : pas nécessaire</li>
      </ul>

      <h2>SHOULD / OUGHT TO - Conseil</h2>
      <p>"You <strong>should</strong> see a doctor." (conseil)</p>

      <h2>MAY / MIGHT - Probabilité</h2>
      <ul>
        <li><strong>May</strong> : possibilité (~50%) → "It may rain."</li>
        <li><strong>Might</strong> : possibilité plus faible → "It might rain."</li>
      </ul>

      <h2>WILL / WOULD</h2>
      <ul>
        <li><strong>Will</strong> : futur, volonté → "I will help you."</li>
        <li><strong>Would</strong> : conditionnel, demande polie → "Would you like some tea?"</li>
      </ul>
    `,
    date: "2025-01-03",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "7 min",
    description: "Guide complet des verbes modaux anglais : can, could, must, should, may, might, will, would.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "modal-verbs"
  },
  {
    id: "reported-speech",
    title: "Le discours indirect (Reported Speech) en anglais",
    excerpt: "Comment rapporter les paroles de quelqu'un en anglais ? Les règles du discours indirect expliquées.",
    content: `
      <p>Le <strong>discours indirect</strong> (reported speech) permet de rapporter ce que quelqu'un a dit sans citer ses paroles exactes.</p>

      <h2>Changement de temps (backshift)</h2>
      <p>Quand le verbe introducteur est au passé, les temps reculent :</p>
      <ul>
        <li>Present Simple → Past Simple : "I <strong>am</strong> tired" → He said he <strong>was</strong> tired.</li>
        <li>Present Continuous → Past Continuous : "I <strong>am working</strong>" → She said she <strong>was working</strong>.</li>
        <li>Past Simple → Past Perfect : "I <strong>saw</strong> him" → He said he <strong>had seen</strong> him.</li>
        <li>Will → Would : "I <strong>will</strong> call" → She said she <strong>would</strong> call.</li>
      </ul>

      <h2>Changement de pronoms et références</h2>
      <ul>
        <li>I → he/she : "I am happy" → He said <strong>he</strong> was happy.</li>
        <li>today → that day</li>
        <li>tomorrow → the next day / the following day</li>
        <li>yesterday → the day before / the previous day</li>
        <li>here → there</li>
        <li>this → that</li>
      </ul>

      <h2>Verbes introducteurs</h2>
      <ul>
        <li><strong>say</strong> (sans objet) : He <strong>said</strong> (that) he was tired.</li>
        <li><strong>tell</strong> (+ objet) : He <strong>told me</strong> (that) he was tired.</li>
        <li><strong>ask</strong> (questions) : She <strong>asked</strong> if I was coming.</li>
      </ul>

      <h2>Questions indirectes</h2>
      <ul>
        <li>Yes/No : "Are you coming?" → She asked <strong>if/whether</strong> I was coming.</li>
        <li>Wh- : "Where do you live?" → He asked <strong>where</strong> I lived.</li>
      </ul>
    `,
    date: "2025-01-02",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "7 min",
    description: "Maîtrisez le discours indirect en anglais : backshift, pronoms et verbes introducteurs.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "reported-speech"
  },
  {
    id: "relative-clauses",
    title: "Les propositions relatives : Who, Which, That, Whose",
    excerpt: "Comment utiliser who, which, that, whose et where pour relier des phrases ? Guide complet des relatives.",
    content: `
      <p>Les <strong>propositions relatives</strong> donnent des informations supplémentaires sur un nom en utilisant un pronom relatif.</p>

      <h2>Les pronoms relatifs</h2>
      <ul>
        <li><strong>WHO</strong> : pour les personnes → "The man <strong>who</strong> called you..."</li>
        <li><strong>WHICH</strong> : pour les choses/animaux → "The book <strong>which</strong> I bought..."</li>
        <li><strong>THAT</strong> : pour les deux (informel) → "The woman <strong>that</strong> works here..."</li>
        <li><strong>WHOSE</strong> : possession → "The girl <strong>whose</strong> father is a doctor..."</li>
        <li><strong>WHERE</strong> : lieu → "The restaurant <strong>where</strong> we met..."</li>
        <li><strong>WHEN</strong> : temps → "The day <strong>when</strong> I arrived..."</li>
      </ul>

      <h2>Relatives définissantes vs non-définissantes</h2>
      <p><strong>Définissantes</strong> (essentielles, pas de virgules) :</p>
      <p>"The woman <strong>who lives next door</strong> is a doctor." (quelle femme ? celle qui habite à côté)</p>
      
      <p><strong>Non-définissantes</strong> (info supplémentaire, avec virgules) :</p>
      <p>"My mother<strong>, who is 65,</strong> still works." (info en plus, pas essentielle)</p>

      <h2>Omission du pronom relatif</h2>
      <p>On peut omettre who/which/that quand c'est l'<strong>objet</strong> de la relative :</p>
      <ul>
        <li>"The book (which/that) I read was great." ✓</li>
        <li>"The man (who/that) I met was nice." ✓</li>
      </ul>
      <p>Mais PAS quand c'est le sujet :</p>
      <p>"The man <strong>who</strong> called is here." (obligatoire)</p>
    `,
    date: "2025-01-01",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "6 min",
    description: "Guide complet des propositions relatives en anglais : who, which, that, whose et quand les omettre.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "relative-clauses"
  },
  {
    id: "gerunds-vs-infinitives",
    title: "Gérondif ou Infinitif ? Le guide pour ne plus hésiter",
    excerpt: "Quand utiliser -ing et quand utiliser to + verbe ? Les règles et listes de verbes à connaître.",
    content: `
      <p>Certains verbes sont suivis du <strong>gérondif</strong> (-ing), d'autres de l'<strong>infinitif</strong> (to + verbe). Comment s'y retrouver ?</p>

      <h2>Verbes + GÉRONDIF (-ing)</h2>
      <p>enjoy, finish, avoid, consider, deny, imagine, mind, practise, suggest, risk, keep, miss</p>
      <ul>
        <li>"I <strong>enjoy reading</strong>."</li>
        <li>"She <strong>finished working</strong> at 6 PM."</li>
        <li>"He <strong>avoids eating</strong> sugar."</li>
      </ul>

      <h2>Verbes + INFINITIF (to + verbe)</h2>
      <p>want, need, decide, hope, expect, plan, promise, refuse, seem, learn, agree, offer</p>
      <ul>
        <li>"I <strong>want to learn</strong> English."</li>
        <li>"She <strong>decided to leave</strong>."</li>
        <li>"He <strong>promised to help</strong>."</li>
      </ul>

      <h2>Verbes + les deux (avec changement de sens)</h2>
      <ul>
        <li><strong>STOP</strong> : "Stop smoking" (arrêter de fumer) vs "Stop to smoke" (s'arrêter pour fumer)</li>
        <li><strong>REMEMBER</strong> : "Remember locking" (se souvenir d'avoir fermé) vs "Remember to lock" (ne pas oublier de fermer)</li>
        <li><strong>TRY</strong> : "Try opening" (essayer comme solution) vs "Try to open" (faire un effort pour)</li>
      </ul>

      <h2>Après les prépositions : toujours -ING</h2>
      <ul>
        <li>"I'm interested <strong>in learning</strong>."</li>
        <li>"She's good <strong>at cooking</strong>."</li>
        <li>"I'm tired <strong>of waiting</strong>."</li>
      </ul>
    `,
    date: "2024-12-31",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "6 min",
    description: "Maîtrisez le choix entre gérondif (-ing) et infinitif (to) après les verbes anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "gerunds-infinitives"
  },
  {
    id: "question-tags",
    title: "Les Question Tags : Comment les former correctement",
    excerpt: "You speak English, don't you? Apprenez à former ces petites questions de confirmation en anglais.",
    content: `
      <p>Les <strong>question tags</strong> sont des mini-questions ajoutées en fin de phrase pour demander confirmation ou encourager une réponse.</p>

      <h2>Règle de base</h2>
      <p><strong>Phrase positive → tag négatif</strong> : "You speak English, <strong>don't you</strong>?"</p>
      <p><strong>Phrase négative → tag positif</strong> : "You don't speak French, <strong>do you</strong>?"</p>

      <h2>Formation</h2>
      <p>Reprendre l'auxiliaire de la phrase principale :</p>
      <ul>
        <li>BE : "She is French, <strong>isn't she</strong>?"</li>
        <li>HAVE (auxiliaire) : "You have finished, <strong>haven't you</strong>?"</li>
        <li>Modaux : "He can swim, <strong>can't he</strong>?"</li>
        <li>DO (si pas d'auxiliaire) : "You like coffee, <strong>don't you</strong>?"</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>I am</strong> → <strong>aren't I</strong> : "I'm late, aren't I?"</li>
        <li><strong>Let's</strong> → <strong>shall we</strong> : "Let's go, shall we?"</li>
        <li><strong>Impératif</strong> → <strong>will you / won't you</strong> : "Open the door, will you?"</li>
        <li><strong>There is</strong> → <strong>isn't there</strong> : "There's a problem, isn't there?"</li>
      </ul>

      <h2>Intonation</h2>
      <ul>
        <li><strong>Intonation descendante</strong> : on attend confirmation (on est sûr)</li>
        <li><strong>Intonation montante</strong> : vraie question (on n'est pas sûr)</li>
      </ul>
    `,
    date: "2024-12-30",
    author: "Antony Addy",
    category: "Grammaire - Questions",
    readTime: "5 min",
    description: "Apprenez à former les question tags en anglais : règles, exceptions et intonation.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "question-tags"
  },
  {
    id: "so-and-such",
    title: "So vs Such : Quelle différence et comment les utiliser",
    excerpt: 'So ou such pour intensifier ? Découvrez les règles pour exprimer "tellement" en anglais.',
    content: `
      <p><strong>SO</strong> et <strong>SUCH</strong> servent tous deux à intensifier, mais avec des structures différentes.</p>

      <h2>SO + adjectif/adverbe</h2>
      <ul>
        <li>"It was <strong>so hot</strong>!" (tellement chaud)</li>
        <li>"She speaks <strong>so quickly</strong>!" (tellement vite)</li>
        <li>"I'm <strong>so tired</strong>!" (tellement fatigué)</li>
      </ul>

      <h2>SUCH + (a/an) + (adjectif) + nom</h2>
      <ul>
        <li>"It was <strong>such a hot day</strong>!" (une journée tellement chaude)</li>
        <li>"She is <strong>such a nice person</strong>!" (une personne tellement gentille)</li>
        <li>"They are <strong>such good friends</strong>!" (de tellement bons amis)</li>
      </ul>

      <h2>Structures de conséquence</h2>
      <ul>
        <li><strong>SO...THAT</strong> : "It was <strong>so</strong> hot <strong>that</strong> we stayed inside."</li>
        <li><strong>SUCH...THAT</strong> : "It was <strong>such</strong> a hot day <strong>that</strong> we stayed inside."</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>SO + much/many/little/few</strong> : "There were <strong>so many</strong> people!"</li>
        <li><strong>SUCH + a lot of</strong> : "There was <strong>such a lot of</strong> noise!"</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>SO</strong> = seul avec adjectif/adverbe</p>
      <p><strong>SUCH</strong> = avec un nom (même modifié par un adjectif)</p>
    `,
    date: "2024-12-29",
    author: "Antony Addy",
    category: "Grammaire - Intensifieurs",
    readTime: "4 min",
    description: "Maîtrisez la différence entre so et such pour exprimer l'intensité en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "so-such"
  },
  {
    id: "too-and-enough",
    title: "Too et Enough : Exprimer l'excès et la suffisance",
    excerpt: "Too much ou enough ? Apprenez à exprimer ce qui est excessif ou suffisant en anglais.",
    content: `
      <p><strong>TOO</strong> exprime l'excès (trop), <strong>ENOUGH</strong> exprime la suffisance (assez).</p>

      <h2>TOO - Excès (négatif)</h2>
      <p><strong>TOO + adjectif/adverbe</strong> (avant) :</p>
      <ul>
        <li>"It's <strong>too hot</strong>." (trop chaud)</li>
        <li>"You're driving <strong>too fast</strong>." (trop vite)</li>
      </ul>
      <p><strong>TOO MUCH + nom indénombrable</strong> :</p>
      <ul><li>"There's <strong>too much</strong> sugar." (trop de sucre)</li></ul>
      <p><strong>TOO MANY + nom dénombrable pluriel</strong> :</p>
      <ul><li>"There are <strong>too many</strong> people." (trop de gens)</li></ul>

      <h2>ENOUGH - Suffisance</h2>
      <p><strong>Adjectif/adverbe + ENOUGH</strong> (après) :</p>
      <ul>
        <li>"It's warm <strong>enough</strong>." (assez chaud)</li>
        <li>"She speaks clearly <strong>enough</strong>." (assez clairement)</li>
      </ul>
      <p><strong>ENOUGH + nom</strong> (avant) :</p>
      <ul>
        <li>"We have <strong>enough</strong> time." (assez de temps)</li>
        <li>"There aren't <strong>enough</strong> chairs." (pas assez de chaises)</li>
      </ul>

      <h2>Structures avec TO + infinitif</h2>
      <ul>
        <li>"It's <strong>too cold to swim</strong>." (trop froid pour nager)</li>
        <li>"She's <strong>old enough to drive</strong>." (assez âgée pour conduire)</li>
        <li>"I don't have <strong>enough money to buy</strong> it." (pas assez d'argent pour acheter)</li>
      </ul>
    `,
    date: "2024-12-28",
    author: "Antony Addy",
    category: "Grammaire - Intensifieurs",
    readTime: "5 min",
    description: "Apprenez à utiliser too et enough pour exprimer l'excès et la suffisance en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "too-enough"
  },
  {
    id: "some-and-any",
    title: "Some ou Any ? Les règles pour ne plus se tromper",
    excerpt: "Quand utiliser some et quand utiliser any ? Les règles essentielles avec exemples.",
    content: `
      <p><strong>SOME</strong> et <strong>ANY</strong> expriment une quantité indéfinie, mais s'utilisent dans des contextes différents.</p>

      <h2>SOME - Phrases affirmatives</h2>
      <ul>
        <li>"I have <strong>some</strong> money."</li>
        <li>"There are <strong>some</strong> apples in the fridge."</li>
        <li>"I need <strong>some</strong> help."</li>
      </ul>

      <h2>ANY - Questions et négations</h2>
      <ul>
        <li>"Do you have <strong>any</strong> money?"</li>
        <li>"I don't have <strong>any</strong> money."</li>
        <li>"Is there <strong>any</strong> milk left?"</li>
      </ul>

      <h2>Exceptions importantes</h2>
      <p><strong>SOME dans les questions</strong> quand on attend/espère OUI :</p>
      <ul>
        <li>Offres : "Would you like <strong>some</strong> coffee?" (offre polie)</li>
        <li>Demandes : "Can I have <strong>some</strong> water?" (demande polie)</li>
        <li>Suggestions : "Shall we buy <strong>some</strong> flowers?"</li>
      </ul>

      <p><strong>ANY dans les affirmatives</strong> = "n'importe quel" :</p>
      <ul>
        <li>"You can call me <strong>any</strong> time." (à n'importe quel moment)</li>
        <li>"<strong>Any</strong> doctor will tell you the same thing."</li>
      </ul>

      <h2>Composés</h2>
      <ul>
        <li>something/anything, someone/anyone, somewhere/anywhere</li>
        <li>Mêmes règles : "I saw <strong>something</strong>." / "Did you see <strong>anything</strong>?"</li>
      </ul>
    `,
    date: "2024-12-27",
    author: "Antony Addy",
    category: "Grammaire - Quantifieurs",
    readTime: "5 min",
    description: "Maîtrisez l'utilisation de some et any avec les règles et exceptions essentielles.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "some-any"
  },
  {
    id: "wish-and-if-only",
    title: "Wish et If Only : Exprimer les regrets et souhaits",
    excerpt: "Comment exprimer des souhaits présents et des regrets passés avec wish et if only.",
    content: `
      <p><strong>WISH</strong> et <strong>IF ONLY</strong> expriment le regret ou le désir que quelque chose soit différent. "If only" est plus emphatique.</p>

      <h2>Souhaits présents (le présent serait différent)</h2>
      <p><strong>WISH/IF ONLY + prétérit</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had</strong> more money." (mais je n'en ai pas)</li>
        <li>"<strong>If only</strong> I <strong>were</strong> taller!" (mais je ne le suis pas)</li>
        <li>"I <strong>wish</strong> I <strong>could</strong> speak French." (mais je ne peux pas)</li>
      </ul>

      <h2>Regrets passés (le passé aurait été différent)</h2>
      <p><strong>WISH/IF ONLY + past perfect</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had studied</strong> harder." (mais je n'ai pas étudié)</li>
        <li>"<strong>If only</strong> I <strong>hadn't said</strong> that!" (mais je l'ai dit)</li>
      </ul>

      <h2>Habitudes agaçantes (pour les autres)</h2>
      <p><strong>WISH + would + infinitif</strong></p>
      <ul>
        <li>"I <strong>wish</strong> you <strong>would</strong> stop smoking."</li>
        <li>"I <strong>wish</strong> it <strong>would</strong> stop raining."</li>
      </ul>
      <p>⚠️ PAS : "I wish I would..." → utiliser "I wish I could"</p>

      <h2>Were vs Was</h2>
      <ul>
        <li>Formel : "I wish I <strong>were</strong>..."</li>
        <li>Informel : "I wish I <strong>was</strong>..."</li>
      </ul>
    `,
    date: "2024-12-26",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "5 min",
    description: "Apprenez à exprimer les souhaits et regrets avec wish et if only en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "wish-if-only"
  },
  {
    id: "make-vs-do",
    title: "Make vs Do : Les règles pour ne plus confondre",
    excerpt: "Make a decision ou do a decision ? Apprenez à distinguer make et do avec des listes pratiques.",
    content: `
      <p><strong>MAKE</strong> et <strong>DO</strong> signifient tous deux "faire" mais s'utilisent dans des contextes différents.</p>

      <h2>DO - Tâches et activités générales</h2>
      <ul>
        <li><strong>Tâches domestiques</strong> : do the housework, do the dishes, do the laundry</li>
        <li><strong>Travail/études</strong> : do homework, do a job, do research</li>
        <li><strong>Activités en -ing</strong> : do the shopping, do the cooking, do the cleaning</li>
        <li><strong>Soins personnels</strong> : do your hair, do your nails, do exercise</li>
        <li><strong>Expressions</strong> : do your best, do a favor, do business, do well/badly</li>
      </ul>

      <h2>MAKE - Création et résultats</h2>
      <ul>
        <li><strong>Créer/produire</strong> : make a cake, make coffee, make dinner</li>
        <li><strong>Causer</strong> : make a mistake, make noise, make someone happy</li>
        <li><strong>Plans/décisions</strong> : make a decision, make plans, make an appointment</li>
        <li><strong>Communication</strong> : make a phone call, make a speech, make a comment</li>
        <li><strong>Argent</strong> : make money, make a profit, make a fortune</li>
        <li><strong>Expressions</strong> : make friends, make progress, make an effort, make sense</li>
      </ul>

      <h2>Astuce</h2>
      <p><strong>DO</strong> = activité sans objet concret créé</p>
      <p><strong>MAKE</strong> = quelque chose est créé ou produit</p>
    `,
    date: "2024-12-25",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "5 min",
    description: "Maîtrisez la différence entre make et do avec des listes d'expressions courantes.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "make-vs-do"
  },
  {
    id: "say-vs-tell",
    title: "Say vs Tell : Comment choisir le bon verbe",
    excerpt: "He said ou he told me ? Découvrez les règles pour utiliser say et tell correctement.",
    content: `
      <p><strong>SAY</strong> et <strong>TELL</strong> impliquent tous deux de communiquer avec des mots, mais avec des structures différentes.</p>

      <h2>SAY - Focus sur les mots</h2>
      <p>Say + ce qui est dit (pas de complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>said</strong> (that) he was tired."</li>
        <li>"She <strong>said</strong> hello."</li>
        <li>"He <strong>said</strong> to me that..." (avec "to")</li>
      </ul>
      <p><strong>Expressions avec SAY</strong> : say hello/goodbye, say please/thank you, say sorry, say a prayer, say yes/no</p>

      <h2>TELL - Focus sur la personne</h2>
      <p>Tell + personne + ce qui est dit (complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>told me</strong> (that) he was tired."</li>
        <li>"She <strong>told them</strong> to wait."</li>
        <li>"<strong>Tell me</strong> the truth."</li>
      </ul>
      <p><strong>Expressions avec TELL</strong> : tell the truth, tell a lie, tell a story, tell a joke, tell the time, tell the difference</p>

      <h2>Résumé</h2>
      <ul>
        <li><strong>SAY</strong> something (to someone)</li>
        <li><strong>TELL</strong> someone something</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "He said me..." → ✅ "He <strong>told</strong> me..." ou "He <strong>said to</strong> me..."</li>
        <li>❌ "He told that..." → ✅ "He <strong>said</strong> that..."</li>
      </ul>
    `,
    date: "2024-12-24",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "4 min",
    description: "Apprenez à distinguer say et tell avec les règles et expressions essentielles.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "say-vs-tell"
  },
  {
    id: "reflexive-pronouns",
    title: "Les pronoms réfléchis : myself, yourself, himself...",
    excerpt: "Quand utiliser myself, yourself, himself ? Guide complet des pronoms réfléchis anglais.",
    content: `
      <p>Les <strong>pronoms réfléchis</strong> se terminent en -self (singulier) ou -selves (pluriel) et renvoient au sujet.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>myself</strong></li>
        <li>you (singulier) → <strong>yourself</strong></li>
        <li>he → <strong>himself</strong></li>
        <li>she → <strong>herself</strong></li>
        <li>it → <strong>itself</strong></li>
        <li>we → <strong>ourselves</strong></li>
        <li>you (pluriel) → <strong>yourselves</strong></li>
        <li>they → <strong>themselves</strong></li>
      </ul>

      <h2>Utilisations</h2>
      <p><strong>1. Sujet et objet identiques</strong></p>
      <ul>
        <li>"I hurt <strong>myself</strong>." (je me suis blessé)</li>
        <li>"She taught <strong>herself</strong> to play piano."</li>
      </ul>

      <p><strong>2. Emphase (pronoms emphatiques)</strong></p>
      <ul>
        <li>"I'll do it <strong>myself</strong>!" (moi-même, pas quelqu'un d'autre)</li>
        <li>"The president <strong>himself</strong> came."</li>
      </ul>

      <p><strong>3. Avec "by" = seul</strong></p>
      <ul>
        <li>"He lives by <strong>himself</strong>." (seul)</li>
        <li>"Did you make this by <strong>yourself</strong>?" (tout seul)</li>
      </ul>

      <h2>Expressions courantes</h2>
      <p>enjoy yourself, behave yourself, help yourself, make yourself at home, introduce yourself</p>
    `,
    date: "2024-12-23",
    author: "Antony Addy",
    category: "Grammaire - Pronoms",
    readTime: "5 min",
    description: "Guide complet des pronoms réfléchis en anglais : formes, utilisations et expressions.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "reflexive-pronouns"
  },
  {
    id: "subject-object-pronouns",
    title: "Pronoms sujets et compléments : I/me, he/him, she/her...",
    excerpt: "Quand utiliser I ou me ? He ou him ? Maîtrisez les pronoms sujets et compléments.",
    content: `
      <p>Les <strong>pronoms sujets</strong> font l'action, les <strong>pronoms compléments</strong> reçoivent l'action.</p>

      <h2>Les formes</h2>
      <table>
        <tr><th>Sujet</th><th>Complément</th></tr>
        <tr><td>I</td><td>me</td></tr>
        <tr><td>you</td><td>you</td></tr>
        <tr><td>he</td><td>him</td></tr>
        <tr><td>she</td><td>her</td></tr>
        <tr><td>it</td><td>it</td></tr>
        <tr><td>we</td><td>us</td></tr>
        <tr><td>they</td><td>them</td></tr>
      </table>

      <h2>Pronoms sujets - AVANT le verbe</h2>
      <ul>
        <li>"<strong>I</strong> love chocolate."</li>
        <li>"<strong>She</strong> is my sister."</li>
        <li>"<strong>They</strong> work here."</li>
      </ul>

      <h2>Pronoms compléments - APRÈS le verbe ou préposition</h2>
      <ul>
        <li>"Call <strong>me</strong> later."</li>
        <li>"I saw <strong>him</strong> yesterday."</li>
        <li>"This is for <strong>you</strong>."</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "Me and John went..." → ✅ "<strong>John and I</strong> went..."</li>
        <li>❌ "Between you and I" → ✅ "Between you and <strong>me</strong>"</li>
      </ul>

      <h2>Astuce</h2>
      <p>Pour "X and I" vs "X and me", enlevez "X and" et testez :</p>
      <p>"John and I/me went..." → "I went" ✓ / "Me went" ✗ → <strong>"John and I"</strong></p>
    `,
    date: "2024-12-22",
    author: "Antony Addy",
    category: "Grammaire - Pronoms",
    readTime: "5 min",
    description: "Maîtrisez les pronoms sujets et compléments en anglais avec des règles claires.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "subject-object-pronouns"
  },
  {
    id: "possessive-adjectives",
    title: "Les adjectifs possessifs : my, your, his, her...",
    excerpt: "My, your, his, her, its, our, their : maîtrisez les adjectifs possessifs anglais.",
    content: `
      <p>Les <strong>adjectifs possessifs</strong> indiquent la possession et viennent AVANT un nom.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>my</strong></li>
        <li>you → <strong>your</strong></li>
        <li>he → <strong>his</strong></li>
        <li>she → <strong>her</strong></li>
        <li>it → <strong>its</strong></li>
        <li>we → <strong>our</strong></li>
        <li>they → <strong>their</strong></li>
      </ul>

      <h2>Règles importantes</h2>
      <p><strong>1. Toujours suivis d'un nom</strong></p>
      <ul>
        <li>"This is <strong>my</strong> book." ✓</li>
        <li>"This is <strong>my</strong>." ✗ (utiliser "mine")</li>
      </ul>

      <p><strong>2. Invariables</strong></p>
      <p><strong>my</strong> book / <strong>my</strong> books (pas de changement singulier/pluriel)</p>

      <h2>Pièges courants</h2>
      <p><strong>ITS vs IT'S</strong></p>
      <ul>
        <li><strong>its</strong> = possessif : "The dog wagged <strong>its</strong> tail."</li>
        <li><strong>it's</strong> = it is/has : "<strong>It's</strong> raining."</li>
      </ul>

      <p><strong>THEIR vs THERE vs THEY'RE</strong></p>
      <ul>
        <li><strong>their</strong> = possessif : "<strong>Their</strong> house is big."</li>
        <li><strong>there</strong> = lieu : "over <strong>there</strong>"</li>
        <li><strong>they're</strong> = they are : "<strong>They're</strong> happy."</li>
      </ul>
    `,
    date: "2024-12-21",
    author: "Antony Addy",
    category: "Grammaire - Pronoms",
    readTime: "4 min",
    description: "Guide complet des adjectifs possessifs en anglais : formes et pièges à éviter.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "possessive-adjectives"
  },
  {
    id: "possessive-pronouns",
    title: "Les pronoms possessifs : mine, yours, his, hers...",
    excerpt: "Mine, yours, his, hers, ours, theirs : utilisez les pronoms possessifs sans nom.",
    content: `
      <p>Les <strong>pronoms possessifs</strong> remplacent "adjectif possessif + nom" et s'utilisent SEULS.</p>

      <h2>Les formes</h2>
      <ul>
        <li>my → <strong>mine</strong></li>
        <li>your → <strong>yours</strong></li>
        <li>his → <strong>his</strong> (même forme)</li>
        <li>her → <strong>hers</strong></li>
        <li>our → <strong>ours</strong></li>
        <li>their → <strong>theirs</strong></li>
      </ul>
      <p>Note : pas de pronom possessif pour "it".</p>

      <h2>Différence clé</h2>
      <ul>
        <li><strong>Adjectif + nom</strong> : "This is <strong>my</strong> book."</li>
        <li><strong>Pronom seul</strong> : "This book is <strong>mine</strong>."</li>
      </ul>

      <h2>Exemples</h2>
      <ul>
        <li>"Is this phone <strong>yours</strong>?" (= your phone)</li>
        <li>"Her car is red. <strong>Mine</strong> is blue." (= my car)</li>
        <li>"Their house is big, but <strong>ours</strong> is bigger." (= our house)</li>
      </ul>

      <h2>Structure "a friend of mine"</h2>
      <ul>
        <li>"A friend of <strong>mine</strong>" = un de mes amis</li>
        <li>"A colleague of <strong>his</strong>" = un de ses collègues</li>
      </ul>

      <h2>Questions courantes</h2>
      <ul>
        <li>"Whose is this?" - "It's <strong>mine</strong>."</li>
        <li>"Is this yours or hers?" - "It's <strong>hers</strong>."</li>
      </ul>
    `,
    date: "2024-12-20",
    author: "Antony Addy",
    category: "Grammaire - Pronoms",
    readTime: "4 min",
    description: "Maîtrisez les pronoms possessifs anglais pour remplacer les groupes nominaux.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "possessive-pronouns"
  },
  {
    id: "either-neither",
    title: "Either et Neither : Exprimer le choix et la négation",
    excerpt: "Either...or, neither...nor, me neither : maîtrisez ces structures de choix et d'accord.",
    content: `
      <p><strong>EITHER</strong> et <strong>NEITHER</strong> s'utilisent pour parler de deux choses ou personnes.</p>

      <h2>EITHER - L'un ou l'autre</h2>
      <ul>
        <li>"<strong>Either</strong> answer is acceptable." (l'une ou l'autre)</li>
        <li>"Would you like tea or coffee?" - "<strong>Either</strong> is fine." (les deux me vont)</li>
      </ul>

      <h2>NEITHER - Ni l'un ni l'autre</h2>
      <ul>
        <li>"<strong>Neither</strong> of them speaks French." (aucun des deux)</li>
        <li>"Do you want tea or coffee?" - "<strong>Neither</strong>, thanks." (aucun)</li>
      </ul>

      <h2>Either...or / Neither...nor</h2>
      <ul>
        <li>"You can choose <strong>either</strong> the red one <strong>or</strong> the blue one."</li>
        <li>"<strong>Neither</strong> John <strong>nor</strong> Mary came to the party."</li>
      </ul>

      <h2>Expressions d'accord</h2>
      <p><strong>Pour les phrases positives :</strong></p>
      <ul>
        <li>"I love pizza." - "<strong>Me too</strong>!" / "<strong>So do I</strong>!"</li>
      </ul>
      <p><strong>Pour les phrases négatives :</strong></p>
      <ul>
        <li>"I don't like spiders." - "<strong>Me neither</strong>!" / "<strong>Neither do I</strong>!"</li>
        <li>"I can't swim." - "<strong>Neither can</strong> my brother."</li>
      </ul>

      <h2>Accord du verbe</h2>
      <p>Formellement, either/neither + of prend un verbe singulier :</p>
      <p>"<strong>Neither</strong> of them <strong>has</strong> arrived." (formel)</p>
    `,
    date: "2024-12-19",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "5 min",
    description: "Maîtrisez either et neither pour exprimer le choix et l'accord en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "either-neither"
  },
  // HIGH PRIORITY LESSONS
  {
    id: "will-vs-going-to",
    title: "Will vs Going To : Quelle différence pour le futur ?",
    excerpt: "Will et Going to expriment tous deux le futur mais dans des contextes différents. Découvrez quand utiliser chacun.",
    content: `
      <p>Les deux formes <strong>Will</strong> et <strong>Going to</strong> parlent du futur, mais avec des nuances importantes que tout apprenant doit maîtriser.</p>

      <h2>WILL - Décisions spontanées et prédictions</h2>
      <p>Utilisez <strong>will</strong> pour :</p>
      <ul>
        <li><strong>Décisions prises sur le moment</strong> : "The phone is ringing. I'll answer it."</li>
        <li><strong>Prédictions basées sur une opinion</strong> : "I think it will rain tomorrow."</li>
        <li><strong>Promesses et offres</strong> : "I'll help you with that."</li>
        <li><strong>Faits futurs certains</strong> : "She will be 30 next year."</li>
      </ul>

      <h2>GOING TO - Plans et intentions</h2>
      <p>Utilisez <strong>going to</strong> pour :</p>
      <ul>
        <li><strong>Plans déjà décidés</strong> : "I'm going to visit my parents this weekend." (décidé avant)</li>
        <li><strong>Prédictions basées sur des preuves visibles</strong> : "Look at those clouds! It's going to rain."</li>
        <li><strong>Intentions fermes</strong> : "I'm going to learn Japanese this year."</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"I <strong>will</strong> have a coffee." (je viens de décider)</li>
        <li>"I <strong>am going to</strong> have a coffee." (j'avais prévu)</li>
        <li>"It <strong>will</strong> probably snow." (opinion/supposition)</li>
        <li>"Look at the sky! It <strong>is going to</strong> snow." (preuve visible)</li>
      </ul>

      <h2>Astuce mémo</h2>
      <p><strong>Going to</strong> = vous y "allez" déjà mentalement (plan préexistant)<br/>
      <strong>Will</strong> = décision ou prédiction faite maintenant</p>
    `,
    date: "2025-01-25",
    author: "Antony Addy",
    category: "Grammaire - Temps",
    readTime: "5 min",
    description: "Comprenez la différence entre Will et Going To pour exprimer le futur en anglais avec des exemples clairs.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "will-going-to"
  },
  {
    id: "much-many-a-lot-of",
    title: "Much, Many, A lot of : Les quantités en anglais",
    excerpt: "Much, many et a lot of expriment tous la quantité mais ne s'utilisent pas avec les mêmes noms. Voici les règles.",
    content: `
      <p>Exprimer la quantité en anglais nécessite de distinguer les noms <strong>dénombrables</strong> (countable) des noms <strong>indénombrables</strong> (uncountable).</p>

      <h2>MANY - Noms dénombrables (pluriel)</h2>
      <p>Utilisez <strong>many</strong> avec les noms qu'on peut compter :</p>
      <ul>
        <li>"How <strong>many</strong> books do you have?"</li>
        <li>"There aren't <strong>many</strong> students today."</li>
        <li>"She has <strong>many</strong> friends."</li>
      </ul>

      <h2>MUCH - Noms indénombrables (singulier)</h2>
      <p>Utilisez <strong>much</strong> avec les noms qu'on ne peut pas compter :</p>
      <ul>
        <li>"How <strong>much</strong> water do you drink?"</li>
        <li>"I don't have <strong>much</strong> time."</li>
        <li>"There isn't <strong>much</strong> traffic today."</li>
      </ul>

      <h2>A LOT OF - Les deux types</h2>
      <p><strong>A lot of</strong> fonctionne avec les deux types, surtout dans les phrases affirmatives :</p>
      <ul>
        <li>"I have <strong>a lot of</strong> books." (dénombrable)</li>
        <li>"I have <strong>a lot of</strong> work." (indénombrable)</li>
        <li>"She drinks <strong>a lot of</strong> coffee."</li>
      </ul>

      <h2>Règle d'usage</h2>
      <ul>
        <li><strong>Questions et négations</strong> : préférez much/many</li>
        <li><strong>Phrases affirmatives</strong> : préférez a lot of</li>
        <li>❌ "I have much money." → ✅ "I have a lot of money."</li>
      </ul>

      <h2>Noms indénombrables courants</h2>
      <p>water, money, information, advice, news, furniture, luggage, traffic, work, homework, research</p>
    `,
    date: "2025-01-24",
    author: "Antony Addy",
    category: "Grammaire - Quantifieurs",
    readTime: "5 min",
    description: "Maîtrisez much, many et a lot of pour exprimer les quantités correctement en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "much-many-lot"
  },
  {
    id: "since-vs-for",
    title: "Since vs For : Exprimer la durée en anglais",
    excerpt: "Since et For indiquent tous deux la durée mais s'utilisent différemment. Apprenez à ne plus les confondre.",
    content: `
      <p>La confusion entre <strong>since</strong> et <strong>for</strong> est très courante. Ces deux mots expriment la durée mais de manière différente.</p>

      <h2>FOR - Une durée (combien de temps)</h2>
      <p>Utilisez <strong>for</strong> suivi d'une <strong>période de temps</strong> :</p>
      <ul>
        <li>"I have lived here <strong>for</strong> 5 years."</li>
        <li>"She has been waiting <strong>for</strong> 30 minutes."</li>
        <li>"They worked together <strong>for</strong> a long time."</li>
      </ul>
      <p><strong>Expressions avec for :</strong> for 2 hours, for a week, for months, for ages, for a long time</p>

      <h2>SINCE - Un point de départ (depuis quand)</h2>
      <p>Utilisez <strong>since</strong> suivi d'un <strong>moment précis</strong> :</p>
      <ul>
        <li>"I have lived here <strong>since</strong> 2019."</li>
        <li>"She has been waiting <strong>since</strong> 3 o'clock."</li>
        <li>"I haven't seen him <strong>since</strong> Monday."</li>
      </ul>
      <p><strong>Expressions avec since :</strong> since January, since 2020, since last week, since I was a child, since then</p>

      <h2>Astuce mémo</h2>
      <ul>
        <li><strong>FOR</strong> = "pendant" (durée) → répond à "combien de temps ?"</li>
        <li><strong>SINCE</strong> = "depuis" (point de départ) → répond à "depuis quand ?"</li>
      </ul>

      <h2>Exemples comparés</h2>
      <ul>
        <li>"I've known her <strong>for</strong> 10 years." (10 ans = durée)</li>
        <li>"I've known her <strong>since</strong> 2014." (2014 = moment précis)</li>
      </ul>
    `,
    date: "2025-01-23",
    author: "Antony Addy",
    category: "Grammaire - Prépositions",
    readTime: "4 min",
    description: "Apprenez à distinguer since et for pour exprimer correctement la durée en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "since-for"
  },
  {
    id: "been-vs-gone",
    title: "Been vs Gone : Une nuance essentielle",
    excerpt: 'Been et Gone sont les participes passés de "go" mais avec des sens très différents. Voici comment les distinguer.',
    content: `
      <p>La différence entre <strong>been</strong> et <strong>gone</strong> est subtile mais importante. Elle concerne la <strong>localisation actuelle</strong> de la personne.</p>

      <h2>BEEN - Aller et revenir (expérience)</h2>
      <p>Utilisez <strong>has/have been</strong> quand la personne est <strong>revenue</strong> :</p>
      <ul>
        <li>"She <strong>has been</strong> to Paris." (elle y est allée et elle est revenue)</li>
        <li>"I <strong>have been</strong> to the supermarket." (j'en suis revenu)</li>
        <li>"Have you ever <strong>been</strong> to Japan?" (expérience de vie)</li>
      </ul>

      <h2>GONE - Parti (pas encore revenu)</h2>
      <p>Utilisez <strong>has/have gone</strong> quand la personne est <strong>encore là-bas</strong> :</p>
      <ul>
        <li>"She <strong>has gone</strong> to Paris." (elle y est encore)</li>
        <li>"Where is John? He <strong>has gone</strong> to the shops." (il n'est pas là)</li>
        <li>"They <strong>have gone</strong> on holiday." (ils sont partis en vacances)</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"Tom <strong>has been</strong> to the bank." → Tom est revenu (il est ici)</li>
        <li>"Tom <strong>has gone</strong> to the bank." → Tom est à la banque (il n'est pas ici)</li>
      </ul>

      <h2>Astuce mémo</h2>
      <p><strong>Been</strong> = aller-retour (B comme "Back")<br/>
      <strong>Gone</strong> = parti (G comme "Got away")</p>

      <h2>Attention</h2>
      <p>On ne peut pas dire "I have gone to Paris" pour parler de soi-même au présent (car si on parle, on est forcément revenu !). On dit "I have been to Paris".</p>
    `,
    date: "2025-01-22",
    author: "Antony Addy",
    category: "Grammaire - Verbes",
    readTime: "4 min",
    description: "Comprenez la différence essentielle entre been et gone pour ne plus jamais les confondre.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "been-gone"
  },
  {
    id: "few-a-few-little-a-little",
    title: "Few/A few vs Little/A little : Nuances de quantité",
    excerpt: 'Few et little expriment une petite quantité, mais avec ou sans "a", le sens change complètement. Découvrez ces nuances.',
    content: `
      <p>La présence ou l'absence de <strong>"a"</strong> devant few et little change le <strong>ton</strong> du message : positif ou négatif.</p>

      <h2>FEW vs A FEW (noms dénombrables)</h2>
      <ul>
        <li><strong>Few</strong> = pas beaucoup, presque pas (négatif)
          <br/>"<strong>Few</strong> people came to the party." (presque personne - décevant)</li>
        <li><strong>A few</strong> = quelques, un petit nombre (positif)
          <br/>"<strong>A few</strong> people came to the party." (quelques personnes - c'est bien)</li>
      </ul>

      <h2>LITTLE vs A LITTLE (noms indénombrables)</h2>
      <ul>
        <li><strong>Little</strong> = pas beaucoup, presque pas (négatif)
          <br/>"I have <strong>little</strong> time." (presque pas de temps - problématique)</li>
        <li><strong>A little</strong> = un peu (positif)
          <br/>"I have <strong>a little</strong> time." (un peu de temps - ça va)</li>
      </ul>

      <h2>Résumé visuel</h2>
      <table>
        <tr><td></td><td><strong>Dénombrable</strong></td><td><strong>Indénombrable</strong></td></tr>
        <tr><td>Positif (+)</td><td>a few</td><td>a little</td></tr>
        <tr><td>Négatif (-)</td><td>few</td><td>little</td></tr>
      </table>

      <h2>Exemples comparés</h2>
      <ul>
        <li>"There is <strong>little</strong> hope." (presque pas d'espoir)</li>
        <li>"There is <strong>a little</strong> hope." (un peu d'espoir)</li>
        <li>"<strong>Few</strong> students passed." (très peu - mauvais résultat)</li>
        <li>"<strong>A few</strong> students passed." (quelques-uns - acceptable)</li>
      </ul>

      <h2>Astuce</h2>
      <p>"A" = une attitude positive (suffisant)<br/>
      Sans "a" = une attitude négative (insuffisant)</p>
    `,
    date: "2025-01-21",
    author: "Antony Addy",
    category: "Grammaire - Quantifieurs",
    readTime: "5 min",
    description: "Maîtrisez les nuances entre few/a few et little/a little pour exprimer la quantité avec précision.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "few-little"
  },
  // MEDIUM PRIORITY LESSONS
  {
    id: "possessive-adjectives-pronouns",
    title: "Adjectifs possessifs vs Pronoms possessifs en anglais",
    excerpt: "My/mine, your/yours, his/his... Apprenez à distinguer les adjectifs possessifs des pronoms possessifs.",
    content: `
      <p>Les <strong>adjectifs possessifs</strong> et les <strong>pronoms possessifs</strong> expriment tous deux la possession, mais ils s'utilisent différemment dans la phrase.</p>

      <h2>Adjectifs possessifs (+ nom)</h2>
      <p>Les adjectifs possessifs sont <strong>toujours suivis d'un nom</strong> :</p>
      <ul>
        <li><strong>my</strong> book, <strong>your</strong> car, <strong>his</strong> phone</li>
        <li><strong>her</strong> bag, <strong>its</strong> tail, <strong>our</strong> house</li>
        <li><strong>their</strong> children</li>
      </ul>
      <p>"This is <strong>my</strong> pen." (adjectif + nom)</p>

      <h2>Pronoms possessifs (remplacent nom)</h2>
      <p>Les pronoms possessifs <strong>remplacent le nom</strong> (pas de nom après) :</p>
      <ul>
        <li><strong>mine</strong>, <strong>yours</strong>, <strong>his</strong></li>
        <li><strong>hers</strong>, <strong>its</strong> (rare), <strong>ours</strong></li>
        <li><strong>theirs</strong></li>
      </ul>
      <p>"This pen is <strong>mine</strong>." (pronom seul)</p>

      <h2>Tableau récapitulatif</h2>
      <table>
        <tr><td>Sujet</td><td>Adj. possessif</td><td>Pronom possessif</td></tr>
        <tr><td>I</td><td>my</td><td>mine</td></tr>
        <tr><td>you</td><td>your</td><td>yours</td></tr>
        <tr><td>he</td><td>his</td><td>his</td></tr>
        <tr><td>she</td><td>her</td><td>hers</td></tr>
        <tr><td>it</td><td>its</td><td>its</td></tr>
        <tr><td>we</td><td>our</td><td>ours</td></tr>
        <tr><td>they</td><td>their</td><td>theirs</td></tr>
      </table>

      <h2>Exemples d'usage</h2>
      <ul>
        <li>"Is this <strong>your</strong> bag?" / "Yes, it's <strong>mine</strong>."</li>
        <li>"<strong>Her</strong> car is red. <strong>Mine</strong> is blue."</li>
        <li>"<strong>Their</strong> house is bigger than <strong>ours</strong>."</li>
      </ul>
    `,
    date: "2025-01-20",
    author: "Antony Addy",
    category: "Grammaire - Pronoms",
    readTime: "4 min",
    description: "Apprenez à distinguer les adjectifs possessifs des pronoms possessifs en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "possessive-adjectives-pronouns"
  },
  {
    id: "adverbs-of-frequency",
    title: "Les adverbes de fréquence : always, usually, often, sometimes, never",
    excerpt: "Où placer les adverbes de fréquence dans la phrase anglaise ? Découvrez les règles et exceptions.",
    content: `
      <p>Les <strong>adverbes de fréquence</strong> indiquent à quelle fréquence une action se produit. Leur <strong>position</strong> dans la phrase suit des règles précises.</p>

      <h2>Les principaux adverbes de fréquence</h2>
      <p>Du plus fréquent au moins fréquent :</p>
      <ul>
        <li><strong>always</strong> (100%) - toujours</li>
        <li><strong>usually</strong> (80%) - d'habitude</li>
        <li><strong>often</strong> (70%) - souvent</li>
        <li><strong>sometimes</strong> (50%) - parfois</li>
        <li><strong>rarely/seldom</strong> (10%) - rarement</li>
        <li><strong>never</strong> (0%) - jamais</li>
      </ul>

      <h2>Position dans la phrase</h2>
      <p><strong>Règle générale :</strong> AVANT le verbe principal</p>
      <ul>
        <li>"I <strong>always</strong> drink coffee in the morning."</li>
        <li>"She <strong>usually</strong> arrives on time."</li>
        <li>"They <strong>never</strong> eat meat."</li>
      </ul>

      <h2>Exception avec BE</h2>
      <p>Avec le verbe <strong>BE</strong> : APRÈS le verbe</p>
      <ul>
        <li>"He <strong>is always</strong> late."</li>
        <li>"I <strong>am usually</strong> tired on Mondays."</li>
        <li>"They <strong>are never</strong> home."</li>
      </ul>

      <h2>Sometimes : plus flexible</h2>
      <p><strong>Sometimes</strong> peut aller en début ou fin de phrase :</p>
      <ul>
        <li>"<strong>Sometimes</strong> I go to the gym."</li>
        <li>"I go to the gym <strong>sometimes</strong>."</li>
        <li>"I <strong>sometimes</strong> go to the gym."</li>
      </ul>

      <h2>Avec les auxiliaires</h2>
      <p>L'adverbe se place entre l'auxiliaire et le verbe principal :</p>
      <ul>
        <li>"I have <strong>never</strong> been to Japan."</li>
        <li>"She can <strong>always</strong> help you."</li>
      </ul>
    `,
    date: "2025-01-19",
    author: "Antony Addy",
    category: "Grammaire - Adverbes",
    readTime: "5 min",
    description: "Maîtrisez la position des adverbes de fréquence en anglais avec des règles claires.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "adverbs-frequency"
  },
  {
    id: "causative-have-get",
    title: "Le causatif avec Have et Get : Faire faire quelque chose",
    excerpt: 'Comment dire "faire faire" en anglais ? Découvrez les structures causatives avec have et get.',
    content: `
      <p>Les structures <strong>causatives</strong> permettent d'exprimer qu'on fait faire une action par quelqu'un d'autre.</p>

      <h2>HAVE something done</h2>
      <p>Structure : <strong>have + objet + participe passé</strong></p>
      <ul>
        <li>"I <strong>had</strong> my car <strong>repaired</strong>." (J'ai fait réparer ma voiture)</li>
        <li>"She <strong>has</strong> her hair <strong>cut</strong> every month." (Elle se fait couper les cheveux)</li>
        <li>"We <strong>had</strong> our house <strong>painted</strong>." (Nous avons fait peindre notre maison)</li>
      </ul>

      <h2>GET something done</h2>
      <p>Structure : <strong>get + objet + participe passé</strong></p>
      <ul>
        <li>"I need to <strong>get</strong> my phone <strong>fixed</strong>."</li>
        <li>"Where can I <strong>get</strong> this document <strong>translated</strong>?"</li>
        <li>"You should <strong>get</strong> your eyes <strong>tested</strong>."</li>
      </ul>

      <h2>Différence have vs get</h2>
      <ul>
        <li><strong>Have</strong> : plus formel, neutre</li>
        <li><strong>Get</strong> : plus informel, implique parfois plus d'effort</li>
      </ul>

      <h2>Faire faire PAR quelqu'un</h2>
      <p>Pour préciser qui fait l'action :</p>
      <ul>
        <li><strong>Have someone do</strong> : "I'll <strong>have</strong> the mechanic <strong>check</strong> the brakes."</li>
        <li><strong>Get someone to do</strong> : "I'll <strong>get</strong> him <strong>to help</strong> us."</li>
      </ul>

      <h2>Expériences négatives</h2>
      <p>Le causatif peut aussi exprimer une expérience subie :</p>
      <ul>
        <li>"I <strong>had</strong> my wallet <strong>stolen</strong>." (On m'a volé mon portefeuille)</li>
        <li>"She <strong>got</strong> her phone <strong>broken</strong>." (Son téléphone a été cassé)</li>
      </ul>
    `,
    date: "2025-01-18",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "5 min",
    description: 'Apprenez à utiliser les structures causatives have et get pour exprimer "faire faire" en anglais.',
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "causative-have-get"
  },
  {
    id: "order-of-adjectives",
    title: "L'ordre des adjectifs en anglais",
    excerpt: "En anglais, les adjectifs suivent un ordre précis. Découvrez la règle OSASCOMP pour ne plus vous tromper.",
    content: `
      <p>Quand plusieurs adjectifs décrivent un nom, ils suivent un <strong>ordre spécifique</strong> en anglais. Cet ordre est naturel pour les natifs mais doit être appris.</p>

      <h2>La règle OSASCOMP</h2>
      <ul>
        <li><strong>O</strong>pinion (beautiful, lovely, awful)</li>
        <li><strong>S</strong>ize (big, small, tiny)</li>
        <li><strong>A</strong>ge (old, new, young)</li>
        <li><strong>S</strong>hape (round, square, long)</li>
        <li><strong>C</strong>olor (red, blue, green)</li>
        <li><strong>O</strong>rigin (French, Japanese, Italian)</li>
        <li><strong>M</strong>aterial (wooden, metal, cotton)</li>
        <li><strong>P</strong>urpose (sleeping [bag], running [shoes])</li>
      </ul>

      <h2>Exemples</h2>
      <ul>
        <li>"A <strong>beautiful</strong> <strong>big</strong> <strong>old</strong> house" (opinion + size + age)</li>
        <li>"A <strong>small</strong> <strong>round</strong> <strong>wooden</strong> table" (size + shape + material)</li>
        <li>"An <strong>expensive</strong> <strong>new</strong> <strong>Italian</strong> car" (opinion + age + origin)</li>
        <li>"<strong>Lovely</strong> <strong>long</strong> <strong>black</strong> hair" (opinion + shape + color)</li>
      </ul>

      <h2>En pratique</h2>
      <p>On utilise rarement plus de 3 adjectifs. Voici les combinaisons courantes :</p>
      <ul>
        <li>Opinion + autre : "a <strong>nice</strong> <strong>big</strong> garden"</li>
        <li>Size + age : "a <strong>small</strong> <strong>old</strong> cottage"</li>
        <li>Color + origin : "<strong>red</strong> <strong>Italian</strong> wine"</li>
      </ul>

      <h2>Ce qui sonne faux</h2>
      <ul>
        <li>❌ "A wooden big table"</li>
        <li>✅ "A big wooden table"</li>
        <li>❌ "A French old lovely cheese"</li>
        <li>✅ "A lovely old French cheese"</li>
      </ul>
    `,
    date: "2025-01-17",
    author: "Antony Addy",
    category: "Grammaire - Adjectifs",
    readTime: "5 min",
    description: "Maîtrisez l'ordre des adjectifs en anglais avec la règle OSASCOMP.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "order-adjectives"
  },
  {
    id: "determiners",
    title: "Les déterminants : all, both, each, every, no",
    excerpt: "All, both, each, every, no : ces déterminants ont des usages précis. Apprenez à les utiliser correctement.",
    content: `
      <p>Les <strong>déterminants</strong> précisent de quels éléments on parle. Voici les règles pour les plus courants.</p>

      <h2>ALL - Tous (3+)</h2>
      <ul>
        <li><strong>All</strong> + nom pluriel : "<strong>All</strong> students must attend."</li>
        <li><strong>All</strong> + the/my/etc. + nom : "<strong>All</strong> the books are here."</li>
        <li><strong>All of</strong> + pronom : "<strong>All of</strong> them passed."</li>
      </ul>

      <h2>BOTH - Les deux (exactement 2)</h2>
      <ul>
        <li>"<strong>Both</strong> options are good." (2 options)</li>
        <li>"<strong>Both of</strong> my parents work."</li>
        <li>"They <strong>both</strong> speak French." (position après le sujet)</li>
      </ul>

      <h2>EACH - Chacun (individuellement)</h2>
      <ul>
        <li>"<strong>Each</strong> student has a book." (chaque élève, un par un)</li>
        <li>"<strong>Each of</strong> the rooms is different."</li>
        <li>Verbe au <strong>singulier</strong> : "<strong>Each</strong> person <strong>is</strong> responsible."</li>
      </ul>

      <h2>EVERY - Chaque (ensemble)</h2>
      <ul>
        <li>"<strong>Every</strong> student passed." (tous les étudiants comme groupe)</li>
        <li>"I go there <strong>every</strong> day."</li>
        <li>Verbe au <strong>singulier</strong> : "<strong>Every</strong> child <strong>needs</strong> love."</li>
        <li>❌ "<strong>Every of</strong>" n'existe pas</li>
      </ul>

      <h2>NO - Aucun</h2>
      <ul>
        <li>"<strong>No</strong> students came." = "Not any students came."</li>
        <li>"There is <strong>no</strong> time."</li>
        <li>"<strong>No one</strong> knows." / "<strong>Nobody</strong> knows."</li>
      </ul>

      <h2>Each vs Every</h2>
      <ul>
        <li><strong>Each</strong> : focus sur l'individu (peut être 2+)</li>
        <li><strong>Every</strong> : focus sur le groupe (3+)</li>
        <li>"<strong>Each</strong> twin has their own room." (2 jumeaux, individuellement)</li>
        <li>"<strong>Every</strong> employee received a bonus." (tous ensemble)</li>
      </ul>
    `,
    date: "2025-01-16",
    author: "Antony Addy",
    category: "Grammaire - Déterminants",
    readTime: "5 min",
    description: "Maîtrisez les déterminants all, both, each, every et no en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "determiners"
  },
  // LOWER PRIORITY LESSONS
  {
    id: "had-better-would-rather",
    title: "Had Better vs Would Rather : Conseils et préférences",
    excerpt: "Had better exprime un conseil fort, would rather une préférence. Découvrez comment les utiliser.",
    content: `
      <p><strong>Had better</strong> et <strong>would rather</strong> sont deux expressions utiles pour donner des conseils et exprimer des préférences.</p>

      <h2>HAD BETTER - Conseil fort / Avertissement</h2>
      <p>Structure : <strong>had better + verbe base</strong> (sans "to")</p>
      <ul>
        <li>"You <strong>had better</strong> hurry or you'll miss the train."</li>
        <li>"We <strong>had better</strong> leave now."</li>
        <li>"You <strong>had better not</strong> be late." (forme négative)</li>
      </ul>
      <p><strong>Sens :</strong> conseil avec conséquence négative implicite si non suivi.</p>
      <p><strong>Contraction :</strong> "You'd better go."</p>

      <h2>WOULD RATHER - Préférence</h2>
      <p>Structure : <strong>would rather + verbe base</strong> (sans "to")</p>
      <ul>
        <li>"I <strong>would rather</strong> stay home tonight."</li>
        <li>"She <strong>would rather not</strong> talk about it."</li>
        <li>"<strong>Would</strong> you <strong>rather</strong> have tea or coffee?"</li>
      </ul>
      <p><strong>Contraction :</strong> "I'd rather go."</p>

      <h2>Would rather + proposition</h2>
      <p>Quand on préfère que quelqu'un d'autre fasse quelque chose :</p>
      <p>Structure : <strong>would rather + sujet + past simple</strong></p>
      <ul>
        <li>"I'd rather <strong>you didn't</strong> smoke here."</li>
        <li>"She'd rather <strong>he came</strong> tomorrow."</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li><strong>Had better</strong> = conseil/avertissement (tu ferais mieux)</li>
        <li><strong>Would rather</strong> = préférence personnelle (je préférerais)</li>
      </ul>
    `,
    date: "2025-01-15",
    author: "Antony Addy",
    category: "Grammaire - Expressions",
    readTime: "5 min",
    description: "Apprenez à utiliser had better et would rather pour donner des conseils et exprimer des préférences.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "had-better-would-rather"
  },
  {
    id: "although-despite-however",
    title: "Although, Despite, However : Exprimer la concession",
    excerpt: "Ces trois mots expriment tous un contraste, mais avec des structures différentes. Voici comment les utiliser.",
    content: `
      <p><strong>Although</strong>, <strong>despite</strong> et <strong>however</strong> expriment tous un <strong>contraste</strong> ou une concession, mais leur utilisation grammaticale diffère.</p>

      <h2>ALTHOUGH - Bien que (+ proposition)</h2>
      <p>Structure : <strong>although + sujet + verbe</strong></p>
      <ul>
        <li>"<strong>Although</strong> it was raining, we went out."</li>
        <li>"I enjoyed the film <strong>although</strong> it was long."</li>
        <li>"<strong>Although</strong> she's young, she's very mature."</li>
      </ul>
      <p>Synonymes : <strong>though</strong>, <strong>even though</strong></p>

      <h2>DESPITE / IN SPITE OF - Malgré (+ nom/gérondif)</h2>
      <p>Structure : <strong>despite + nom / -ing</strong></p>
      <ul>
        <li>"<strong>Despite</strong> the rain, we went out."</li>
        <li>"<strong>Despite</strong> being tired, she kept working."</li>
        <li>"He passed <strong>in spite of</strong> the difficulties."</li>
      </ul>
      <p>⚠️ Jamais suivi directement d'un verbe conjugué</p>

      <h2>HOWEVER - Cependant (connecteur)</h2>
      <p>Relie deux phrases indépendantes :</p>
      <ul>
        <li>"It was raining. <strong>However</strong>, we went out."</li>
        <li>"The test was hard. <strong>However</strong>, most students passed."</li>
      </ul>
      <p><strong>Ponctuation :</strong> virgule après however</p>

      <h2>Récapitulatif</h2>
      <ul>
        <li><strong>Although</strong> it rained... (+ phrase complète)</li>
        <li><strong>Despite</strong> the rain... (+ nom)</li>
        <li><strong>Despite</strong> raining... (+ -ing)</li>
        <li>It rained. <strong>However</strong>, we... (nouvelle phrase)</li>
      </ul>

      <h2>Conversions</h2>
      <p>"<strong>Although</strong> he was sick, he came to work."<br/>
      = "<strong>Despite</strong> being sick, he came to work."<br/>
      = "He was sick. <strong>However</strong>, he came to work."</p>
    `,
    date: "2025-01-14",
    author: "Antony Addy",
    category: "Grammaire - Connecteurs",
    readTime: "5 min",
    description: "Maîtrisez although, despite et however pour exprimer le contraste en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "although-despite-however"
  },
  {
    id: "still-yet-already",
    title: "Still, Yet, Already : Le timing des actions",
    excerpt: "Still, yet et already parlent tous du temps, mais dans des contextes différents. Apprenez à les distinguer.",
    content: `
      <p><strong>Still</strong>, <strong>yet</strong> et <strong>already</strong> sont souvent confondus. Ils parlent tous du <strong>timing</strong> d'une action mais avec des nuances importantes.</p>

      <h2>STILL - Toujours / Encore (action continue)</h2>
      <p>L'action <strong>continue</strong> alors qu'on pourrait s'attendre à ce qu'elle soit terminée :</p>
      <ul>
        <li>"He's <strong>still</strong> sleeping." (il dort encore)</li>
        <li>"I <strong>still</strong> live with my parents." (toujours)</li>
        <li>"Do you <strong>still</strong> work there?"</li>
      </ul>
      <p><strong>Position :</strong> avant le verbe principal / après BE</p>

      <h2>YET - Déjà / Encore (questions et négations)</h2>
      <p>Pour demander si quelque chose s'est passé ou dire que non :</p>
      <ul>
        <li>"Have you finished <strong>yet</strong>?" (déjà terminé ?)</li>
        <li>"I haven't eaten <strong>yet</strong>." (pas encore)</li>
        <li>"She hasn't called <strong>yet</strong>."</li>
      </ul>
      <p><strong>Position :</strong> en fin de phrase</p>

      <h2>ALREADY - Déjà (plus tôt que prévu)</h2>
      <p>L'action s'est produite <strong>plus tôt qu'attendu</strong> :</p>
      <ul>
        <li>"I've <strong>already</strong> finished." (c'est fait)</li>
        <li>"She's <strong>already</strong> here!" (déjà là, surprise)</li>
        <li>"Have you <strong>already</strong> seen this film?" (si vite ?)</li>
      </ul>
      <p><strong>Position :</strong> avant le participe passé / en fin de phrase</p>

      <h2>Comparaison</h2>
      <ul>
        <li>"He's <strong>still</strong> working." (il travaille toujours)</li>
        <li>"He hasn't finished <strong>yet</strong>." (il n'a pas encore fini)</li>
        <li>"He's <strong>already</strong> finished!" (il a déjà fini !)</li>
      </ul>

      <h2>Still + négatif (surprise/irritation)</h2>
      <p>"He <strong>still</strong> hasn't called me." (toujours pas - frustration)</p>
    `,
    date: "2025-01-13",
    author: "Antony Addy",
    category: "Grammaire - Adverbes",
    readTime: "5 min",
    description: "Comprenez la différence entre still, yet et already pour parler du timing en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "still-yet-already"
  },
  {
    id: "unless-as-long-as-provided",
    title: "Unless, As long as, Provided : Les conditions",
    excerpt: "Ces expressions introduisent des conditions de différentes manières. Découvrez leurs nuances.",
    content: `
      <p><strong>Unless</strong>, <strong>as long as</strong> et <strong>provided</strong> introduisent tous des <strong>conditions</strong>, mais avec des nuances différentes.</p>

      <h2>UNLESS - Sauf si / À moins que</h2>
      <p>Condition <strong>négative</strong> : = "if... not"</p>
      <ul>
        <li>"I'll go <strong>unless</strong> it rains." (= if it doesn't rain)</li>
        <li>"<strong>Unless</strong> you hurry, you'll be late."</li>
        <li>"Don't call me <strong>unless</strong> it's urgent."</li>
      </ul>
      <p>⚠️ Ne pas utiliser "not" après unless (double négation)</p>

      <h2>AS LONG AS - Tant que / À condition que</h2>
      <p>Condition <strong>nécessaire</strong> pour que quelque chose se produise :</p>
      <ul>
        <li>"You can go <strong>as long as</strong> you finish your homework."</li>
        <li>"I'll help you <strong>as long as</strong> you listen."</li>
        <li>"<strong>As long as</strong> you're happy, I'm happy."</li>
      </ul>
      <p>Synonyme : <strong>so long as</strong></p>

      <h2>PROVIDED (THAT) - À condition que (formel)</h2>
      <p>Condition <strong>formelle</strong>, souvent écrite :</p>
      <ul>
        <li>"You can leave early <strong>provided</strong> you finish your work."</li>
        <li>"<strong>Provided that</strong> everyone agrees, we'll proceed."</li>
        <li>"The event will happen <strong>providing</strong> the weather is good."</li>
      </ul>
      <p>Variantes : <strong>provided that</strong>, <strong>providing</strong></p>

      <h2>Comparaison</h2>
      <ul>
        <li><strong>Unless</strong> = condition négative (sauf si)</li>
        <li><strong>As long as</strong> = condition positive (tant que)</li>
        <li><strong>Provided</strong> = condition formelle (à condition que)</li>
      </ul>

      <h2>Exemples équivalents</h2>
      <p>"I'll come <strong>unless</strong> I'm busy." (sauf si je suis occupé)<br/>
      "I'll come <strong>as long as</strong> I'm free." (tant que je suis libre)<br/>
      "I'll come <strong>provided</strong> I have time." (à condition d'avoir le temps)</p>
    `,
    date: "2025-01-12",
    author: "Antony Addy",
    category: "Grammaire - Connecteurs",
    readTime: "5 min",
    description: "Maîtrisez unless, as long as et provided pour exprimer des conditions en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "unless-as-long-as-provided"
  },
  // ============== NEW VOCABULARY & ADVANCED ARTICLES 2026 ==============
  {
    id: "make-vs-do",
    title: "Make vs Do : Quelle différence en anglais ?",
    excerpt: "Make et Do sont souvent confondus par les francophones. Découvrez les règles simples pour ne plus jamais les confondre.",
    content: `
      <p>Les verbes <strong>MAKE</strong> et <strong>DO</strong> se traduisent tous deux par "faire" en français, ce qui crée beaucoup de confusion. Voici comment les différencier.</p>

      <h2>DO : activités et tâches</h2>
      <p>Utilisez <strong>DO</strong> pour :</p>
      <ul>
        <li><strong>Les tâches ménagères</strong> : do the dishes, do the laundry, do the housework</li>
        <li><strong>Le travail</strong> : do homework, do a job, do business</li>
        <li><strong>Les activités générales</strong> : do exercise, do sport, do yoga</li>
        <li><strong>Les expressions avec nothing/something/anything</strong> : do nothing, do something</li>
      </ul>

      <h2>MAKE : création et production</h2>
      <p>Utilisez <strong>MAKE</strong> pour :</p>
      <ul>
        <li><strong>Créer quelque chose</strong> : make a cake, make dinner, make a dress</li>
        <li><strong>Sons et paroles</strong> : make a noise, make a speech, make a comment</li>
        <li><strong>Argent</strong> : make money, make a profit, make a living</li>
        <li><strong>Décisions et plans</strong> : make a decision, make plans, make a choice</li>
      </ul>

      <h2>Expressions idiomatiques courantes</h2>
      <ul>
        <li><strong>DO</strong> : do your best, do a favor, do harm, do good</li>
        <li><strong>MAKE</strong> : make a mistake, make friends, make progress, make sense</li>
      </ul>

      <h2>Astuce mémorisation</h2>
      <p><strong>MAKE</strong> = vous créez un résultat tangible ou visible<br/>
      <strong>DO</strong> = vous accomplissez une action ou une tâche</p>
    `,
    date: "2026-01-04",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "5 min",
    description: "Apprenez à différencier Make et Do en anglais avec des règles claires et des exemples pratiques.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "make-vs-do"
  },
  {
    id: "say-vs-tell",
    title: "Say vs Tell : Comment les utiliser correctement",
    excerpt: "Say et Tell posent souvent problème. Découvrez la règle simple qui vous aidera à choisir le bon verbe à chaque fois.",
    content: `
      <p>La différence entre <strong>SAY</strong> et <strong>TELL</strong> est simple une fois que vous connaissez la règle de base.</p>

      <h2>La règle fondamentale</h2>
      <ul>
        <li><strong>SAY</strong> : ne nécessite PAS de complément de personne</li>
        <li><strong>TELL</strong> : nécessite TOUJOURS un complément de personne</li>
      </ul>

      <h2>Exemples avec SAY</h2>
      <ul>
        <li>He <strong>said</strong> (that) he was tired.</li>
        <li>She <strong>said</strong> hello.</li>
        <li>"I'm leaving," he <strong>said</strong>.</li>
        <li>He <strong>said to me</strong> that... (avec "to" si on ajoute la personne)</li>
      </ul>

      <h2>Exemples avec TELL</h2>
      <ul>
        <li>He <strong>told me</strong> (that) he was tired.</li>
        <li>She <strong>told him</strong> to wait.</li>
        <li>They <strong>told us</strong> a story.</li>
        <li>❌ He told that he was tired. (INCORRECT - il manque "me/him/her")</li>
      </ul>

      <h2>Expressions figées</h2>
      <ul>
        <li><strong>TELL</strong> : tell a story, tell a lie, tell the truth, tell a joke, tell the time</li>
        <li><strong>SAY</strong> : say sorry, say goodbye, say a prayer, say a word</li>
      </ul>

      <h2>Astuce</h2>
      <p>Si vous pouvez placer "somebody" après le verbe → utilisez TELL<br/>
      Sinon → utilisez SAY</p>
    `,
    date: "2026-01-03",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Maîtrisez la différence entre Say et Tell avec cette règle simple et des exemples concrets.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "say-vs-tell"
  },
  {
    id: "bring-vs-take",
    title: "Bring vs Take : Une question de direction",
    excerpt: "Bring et Take dépendent de la direction du mouvement. Apprenez à choisir le bon verbe selon le contexte.",
    content: `
      <p>La distinction entre <strong>BRING</strong> et <strong>TAKE</strong> repose sur la direction du mouvement par rapport au locuteur.</p>

      <h2>La règle de base</h2>
      <ul>
        <li><strong>BRING</strong> : mouvement VERS le locuteur ou le lieu de référence</li>
        <li><strong>TAKE</strong> : mouvement LOIN du locuteur ou du lieu de référence</li>
      </ul>

      <h2>Exemples avec BRING (vers moi)</h2>
      <ul>
        <li>"<strong>Bring</strong> me a glass of water, please." (apporte vers moi)</li>
        <li>"Can you <strong>bring</strong> your notes to the meeting?" (vers le lieu de la réunion)</li>
        <li>"Don't forget to <strong>bring</strong> your passport." (ici, où je suis)</li>
      </ul>

      <h2>Exemples avec TAKE (loin de moi)</h2>
      <ul>
        <li>"<strong>Take</strong> this book to the library." (emmène loin d'ici)</li>
        <li>"I'll <strong>take</strong> you to the airport." (emmener vers un autre lieu)</li>
        <li>"Don't forget to <strong>take</strong> your umbrella." (emporter en partant)</li>
      </ul>

      <h2>Astuce visuelle</h2>
      <p>Imaginez une flèche :</p>
      <ul>
        <li>→ vers vous = BRING</li>
        <li>← loin de vous = TAKE</li>
      </ul>

      <h2>Attention au contexte</h2>
      <p>"Can I <strong>bring</strong> a friend to the party?" (le locuteur sera à la fête)<br/>
      "Can I <strong>take</strong> a friend to the party?" (le locuteur parle depuis un autre lieu)</p>
    `,
    date: "2026-01-02",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Comprenez la différence entre Bring et Take selon la direction du mouvement.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "bring-vs-take"
  },
  {
    id: "lend-vs-borrow",
    title: "Lend vs Borrow : Qui donne et qui reçoit ?",
    excerpt: "Lend et Borrow sont souvent inversés. Découvrez la différence simple entre ces deux verbes.",
    content: `
      <p>La confusion entre <strong>LEND</strong> et <strong>BORROW</strong> vient du fait qu'ils décrivent la même action mais de perspectives opposées.</p>

      <h2>La différence fondamentale</h2>
      <ul>
        <li><strong>LEND</strong> = prêter (je donne temporairement)</li>
        <li><strong>BORROW</strong> = emprunter (je reçois temporairement)</li>
      </ul>

      <h2>Exemples avec LEND</h2>
      <ul>
        <li>"Can you <strong>lend</strong> me £20?" (peux-tu me prêter)</li>
        <li>"I <strong>lent</strong> him my car." (je lui ai prêté)</li>
        <li>"The bank <strong>lends</strong> money." (la banque prête)</li>
      </ul>

      <h2>Exemples avec BORROW</h2>
      <ul>
        <li>"Can I <strong>borrow</strong> your pen?" (puis-je emprunter)</li>
        <li>"She <strong>borrowed</strong> a book from the library." (elle a emprunté)</li>
        <li>"He always <strong>borrows</strong> money from his friends." (il emprunte toujours)</li>
      </ul>

      <h2>Structure importante</h2>
      <ul>
        <li><strong>LEND</strong> something <strong>TO</strong> someone</li>
        <li><strong>BORROW</strong> something <strong>FROM</strong> someone</li>
      </ul>

      <h2>Astuce mémorisation</h2>
      <p>Pensez à la direction de l'objet :<br/>
      <strong>LEND</strong> → l'objet part de moi<br/>
      <strong>BORROW</strong> → l'objet vient vers moi</p>
    `,
    date: "2026-01-01",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Ne confondez plus Lend et Borrow grâce à cette explication claire.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "lend-vs-borrow"
  },
  {
    id: "learn-vs-teach",
    title: "Learn vs Teach : Apprendre ou enseigner ?",
    excerpt: "Learn et Teach sont parfois confondus. Découvrez comment les utiliser correctement.",
    content: `
      <p>En français, "apprendre" peut signifier à la fois "learn" et "teach". En anglais, ces deux verbes sont bien distincts.</p>

      <h2>La différence</h2>
      <ul>
        <li><strong>LEARN</strong> = apprendre (acquérir des connaissances)</li>
        <li><strong>TEACH</strong> = enseigner/apprendre à quelqu'un (transmettre des connaissances)</li>
      </ul>

      <h2>Exemples avec LEARN</h2>
      <ul>
        <li>"I'm <strong>learning</strong> English." (J'apprends l'anglais)</li>
        <li>"She <strong>learned</strong> to drive last year." (Elle a appris à conduire)</li>
        <li>"We <strong>learn</strong> from our mistakes." (On apprend de nos erreurs)</li>
      </ul>

      <h2>Exemples avec TEACH</h2>
      <ul>
        <li>"She <strong>teaches</strong> English." (Elle enseigne l'anglais)</li>
        <li>"My father <strong>taught</strong> me to swim." (Mon père m'a appris à nager)</li>
        <li>"Can you <strong>teach</strong> me how to do this?" (Peux-tu m'apprendre ?)</li>
      </ul>

      <h2>Erreur fréquente</h2>
      <p>❌ "He learned me English." → ✅ "He taught me English."<br/>
      ❌ "I will teach to drive." → ✅ "I will learn to drive."</p>

      <h2>Astuce</h2>
      <p>Si vous êtes l'élève → LEARN<br/>
      Si vous êtes le professeur → TEACH</p>
    `,
    date: "2025-12-31",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Maîtrisez la différence entre Learn et Teach pour ne plus les confondre.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "learn-vs-teach"
  },
  {
    id: "look-see-watch",
    title: "Look, See, Watch : Trois façons de regarder",
    excerpt: `Ces trois verbes signifient "regarder" mais s'utilisent dans des contextes différents. Découvrez leurs nuances.`,
    content: `
      <p>En anglais, <strong>LOOK</strong>, <strong>SEE</strong> et <strong>WATCH</strong> expriment l'action de voir mais avec des nuances importantes.</p>

      <h2>SEE : perception passive</h2>
      <p><strong>SEE</strong> = voir (sans effort particulier, involontairement)</p>
      <ul>
        <li>"I can <strong>see</strong> the mountains from here." (Je vois)</li>
        <li>"Did you <strong>see</strong> that car?" (As-tu vu)</li>
        <li>"I <strong>saw</strong> him at the supermarket." (Je l'ai vu par hasard)</li>
      </ul>

      <h2>LOOK : regarder activement</h2>
      <p><strong>LOOK</strong> = regarder (effort volontaire, attention dirigée)</p>
      <ul>
        <li>"<strong>Look</strong> at this photo!" (Regarde cette photo !)</li>
        <li>"She <strong>looked</strong> out of the window." (Elle a regardé par la fenêtre)</li>
        <li>"I'm <strong>looking</strong> for my keys." (Je cherche)</li>
      </ul>

      <h2>WATCH : observer avec attention</h2>
      <p><strong>WATCH</strong> = regarder quelque chose qui bouge ou change</p>
      <ul>
        <li>"We <strong>watched</strong> a film last night." (Nous avons regardé un film)</li>
        <li>"I love <strong>watching</strong> football." (J'aime regarder le foot)</li>
        <li>"<strong>Watch</strong> the children while I'm out." (Surveille les enfants)</li>
      </ul>

      <h2>Résumé</h2>
      <ul>
        <li><strong>SEE</strong> = perception involontaire</li>
        <li><strong>LOOK</strong> = diriger son regard (moment bref)</li>
        <li><strong>WATCH</strong> = observer avec attention (durée)</li>
      </ul>
    `,
    date: "2025-12-30",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "5 min",
    description: "Apprenez à différencier Look, See et Watch selon le contexte et l'intention.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "look-see-watch"
  },
  {
    id: "hear-vs-listen",
    title: "Hear vs Listen : Entendre ou écouter ?",
    excerpt: "La différence entre Hear et Listen est simple mais essentielle. Découvrez comment les utiliser.",
    content: `
      <p>Comme pour Look/See/Watch, la différence entre <strong>HEAR</strong> et <strong>LISTEN</strong> repose sur l'intention et l'attention.</p>

      <h2>HEAR : perception passive</h2>
      <p><strong>HEAR</strong> = entendre (perception automatique, sans effort)</p>
      <ul>
        <li>"I can <strong>hear</strong> music." (J'entends de la musique)</li>
        <li>"Did you <strong>hear</strong> that noise?" (As-tu entendu ce bruit ?)</li>
        <li>"I <strong>heard</strong> someone calling my name." (J'ai entendu quelqu'un)</li>
      </ul>

      <h2>LISTEN : attention active</h2>
      <p><strong>LISTEN (TO)</strong> = écouter (effort conscient, attention dirigée)</p>
      <ul>
        <li>"I'm <strong>listening to</strong> music." (J'écoute de la musique)</li>
        <li>"<strong>Listen</strong> carefully!" (Écoute bien !)</li>
        <li>"She never <strong>listens to</strong> my advice." (Elle n'écoute jamais mes conseils)</li>
      </ul>

      <h2>Structure importante</h2>
      <ul>
        <li>HEAR + objet direct : "I hear music."</li>
        <li>LISTEN + TO + objet : "I listen to music."</li>
      </ul>

      <h2>Exemples comparatifs</h2>
      <ul>
        <li>"I <strong>heard</strong> the doorbell ring." (perception involontaire)</li>
        <li>"Were you <strong>listening</strong>?" (Est-ce que tu écoutais attentivement ?)</li>
        <li>"I <strong>heard</strong> what you said, but I wasn't really <strong>listening</strong>." (J'ai entendu, mais je n'écoutais pas vraiment)</li>
      </ul>
    `,
    date: "2025-12-29",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Comprenez la différence entre Hear et Listen selon l'intention et l'attention.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "hear-vs-listen"
  },
  {
    id: "speak-vs-talk",
    title: "Speak vs Talk : Quand les utiliser ?",
    excerpt: "Speak et Talk sont proches mais pas interchangeables. Découvrez leurs différences subtiles.",
    content: `
      <p><strong>SPEAK</strong> et <strong>TALK</strong> signifient tous deux "parler" mais ont des nuances d'usage importantes.</p>

      <h2>SPEAK : plus formel</h2>
      <p><strong>SPEAK</strong> est souvent plus formel et utilisé pour :</p>
      <ul>
        <li><strong>Les langues</strong> : "I speak French and English."</li>
        <li><strong>Discours officiels</strong> : "The CEO spoke at the conference."</li>
        <li><strong>Au téléphone</strong> : "May I speak to Mr. Smith?"</li>
        <li><strong>Capacité générale</strong> : "She can speak three languages."</li>
      </ul>

      <h2>TALK : plus informel</h2>
      <p><strong>TALK</strong> implique généralement une conversation :</p>
      <ul>
        <li><strong>Conversations</strong> : "We talked for hours."</li>
        <li><strong>Sujets spécifiques</strong> : "Let's talk about the project."</li>
        <li><strong>Discussions</strong> : "I need to talk to you."</li>
        <li><strong>Bavardage</strong> : "They were talking during the film."</li>
      </ul>

      <h2>Expressions figées</h2>
      <ul>
        <li><strong>SPEAK</strong> : speak your mind, speak up, speak volumes</li>
        <li><strong>TALK</strong> : talk nonsense, talk sense, talk shop, small talk</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>SPEAK</strong> = acte de parler (unilatéral ou formel)<br/>
      <strong>TALK</strong> = échanger (bilatéral, conversation)</p>
    `,
    date: "2025-12-28",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Maîtrisez les nuances entre Speak et Talk pour parler anglais naturellement.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "speak-vs-talk"
  },
  {
    id: "rise-vs-raise",
    title: "Rise vs Raise : Transitif ou intransitif ?",
    excerpt: "Rise et Raise sont souvent confondus. La clé est de comprendre si le verbe a un objet direct ou non.",
    content: `
      <p>La différence entre <strong>RISE</strong> et <strong>RAISE</strong> repose sur une règle grammaticale simple.</p>

      <h2>La règle fondamentale</h2>
      <ul>
        <li><strong>RISE</strong> (intransitif) = monter/s'élever (PAS d'objet direct)</li>
        <li><strong>RAISE</strong> (transitif) = lever/augmenter (AVEC objet direct)</li>
      </ul>

      <h2>RISE : le sujet monte lui-même</h2>
      <ul>
        <li>"The sun <strong>rises</strong> in the east." (Le soleil se lève)</li>
        <li>"Prices are <strong>rising</strong>." (Les prix augmentent)</li>
        <li>"She <strong>rose</strong> from her chair." (Elle s'est levée)</li>
        <li>Conjugaison : rise - rose - risen</li>
      </ul>

      <h2>RAISE : le sujet fait monter quelque chose</h2>
      <ul>
        <li>"<strong>Raise</strong> your hand." (Lève ta main)</li>
        <li>"They <strong>raised</strong> prices." (Ils ont augmenté les prix)</li>
        <li>"He <strong>raised</strong> the flag." (Il a hissé le drapeau)</li>
        <li>Conjugaison : raise - raised - raised</li>
      </ul>

      <h2>Autres sens de RAISE</h2>
      <ul>
        <li>Élever des enfants : "She raised three children."</li>
        <li>Collecter des fonds : "We raised £5000 for charity."</li>
        <li>Soulever une question : "He raised an important issue."</li>
      </ul>
    `,
    date: "2025-12-27",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Apprenez à distinguer Rise (intransitif) et Raise (transitif) facilement.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "rise-vs-raise"
  },
  {
    id: "lie-vs-lay",
    title: "Lie vs Lay : Le piège grammatical classique",
    excerpt: "Même les anglophones natifs confondent Lie et Lay. Voici comment ne plus faire cette erreur.",
    content: `
      <p>La confusion entre <strong>LIE</strong> et <strong>LAY</strong> est si courante qu'elle pose problème même aux anglophones natifs.</p>

      <h2>La règle</h2>
      <ul>
        <li><strong>LIE</strong> (intransitif) = être allongé (PAS d'objet)</li>
        <li><strong>LAY</strong> (transitif) = poser/déposer (AVEC objet)</li>
      </ul>

      <h2>LIE : s'allonger, être couché</h2>
      <ul>
        <li>"I need to <strong>lie</strong> down." (Je dois m'allonger)</li>
        <li>"The book <strong>lies</strong> on the table." (Le livre est posé sur)</li>
        <li>"She was <strong>lying</strong> on the sofa." (Elle était allongée)</li>
        <li>Conjugaison : lie - lay - lain (attention au passé !)</li>
      </ul>

      <h2>LAY : poser quelque chose</h2>
      <ul>
        <li>"<strong>Lay</strong> the book on the table." (Pose le livre)</li>
        <li>"She <strong>laid</strong> the baby in the crib." (Elle a posé le bébé)</li>
        <li>"Hens <strong>lay</strong> eggs." (Les poules pondent des œufs)</li>
        <li>Conjugaison : lay - laid - laid</li>
      </ul>

      <h2>La source de confusion</h2>
      <p>Le passé de LIE (lay) est identique au présent de LAY !</p>
      <ul>
        <li>"I <strong>lay</strong> on the beach yesterday." (passé de lie = j'étais allongé)</li>
        <li>"I <strong>lay</strong> the towel on the sand." (présent de lay = je pose)</li>
      </ul>
    `,
    date: "2025-12-26",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "5 min",
    description: "Maîtrisez enfin la différence entre Lie et Lay avec cette explication détaillée.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "lie-vs-lay"
  },
  {
    id: "fun-vs-funny",
    title: "Fun vs Funny : Amusant ou drôle ?",
    excerpt: "Fun et Funny sont souvent confondus. Découvrez leurs différences de sens et d'usage.",
    content: `
      <p>Bien que <strong>FUN</strong> et <strong>FUNNY</strong> se traduisent souvent par "amusant", ils ont des sens distincts.</p>

      <h2>FUN : agréable, divertissant</h2>
      <p><strong>FUN</strong> décrit quelque chose d'agréable et plaisant :</p>
      <ul>
        <li>"The party was <strong>fun</strong>." (La fête était amusante)</li>
        <li>"We had <strong>fun</strong> at the beach." (On s'est bien amusés)</li>
        <li>"It's <strong>fun</strong> to play video games." (C'est amusant de jouer)</li>
        <li>FUN est souvent un nom : "Have fun!" (Amuse-toi !)</li>
      </ul>

      <h2>FUNNY : qui fait rire / étrange</h2>
      <p><strong>FUNNY</strong> a deux sens :</p>
      <ul>
        <li><strong>Drôle, comique</strong> : "He told a <strong>funny</strong> joke." (une blague drôle)</li>
        <li><strong>Bizarre, étrange</strong> : "There's something <strong>funny</strong> about him." (quelque chose de bizarre)</li>
        <li>"That's <strong>funny</strong>!" peut signifier "C'est drôle !" ou "C'est bizarre !"</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li>"The film was <strong>fun</strong>." (agréable à regarder, divertissant)</li>
        <li>"The film was <strong>funny</strong>." (il m'a fait rire)</li>
        <li>"It was <strong>fun</strong> to be with him." (agréable)</li>
        <li>"He's very <strong>funny</strong>." (il me fait rire / il est bizarre)</li>
      </ul>
    `,
    date: "2025-12-25",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Comprenez la différence entre Fun (agréable) et Funny (drôle/bizarre).",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "fun-vs-funny"
  },
  {
    id: "still-yet-already",
    title: "Still, Yet, Already : Maîtriser ces adverbes de temps",
    excerpt: "Ces trois adverbes expriment des nuances temporelles importantes. Découvrez comment les utiliser.",
    content: `
      <p><strong>STILL</strong>, <strong>YET</strong> et <strong>ALREADY</strong> sont essentiels pour exprimer des nuances temporelles.</p>

      <h2>STILL : toujours, encore (continuation)</h2>
      <p>Exprime qu'une situation continue :</p>
      <ul>
        <li>"He's <strong>still</strong> sleeping." (Il dort encore)</li>
        <li>"I <strong>still</strong> love you." (Je t'aime toujours)</li>
        <li>"Do you <strong>still</strong> work there?" (Tu travailles toujours là-bas ?)</li>
        <li>Position : avant le verbe principal</li>
      </ul>

      <h2>YET : déjà / encore (questions et négations)</h2>
      <p>Utilisé principalement en questions et négations :</p>
      <ul>
        <li>"Have you finished <strong>yet</strong>?" (Tu as déjà fini ?)</li>
        <li>"I haven't eaten <strong>yet</strong>." (Je n'ai pas encore mangé)</li>
        <li>"Is she here <strong>yet</strong>?" (Elle est déjà là ?)</li>
        <li>Position : en fin de phrase</li>
      </ul>

      <h2>ALREADY : déjà (affirmation)</h2>
      <p>Exprime que quelque chose s'est produit plus tôt que prévu :</p>
      <ul>
        <li>"I've <strong>already</strong> finished." (J'ai déjà fini)</li>
        <li>"She's <strong>already</strong> here!" (Elle est déjà là !)</li>
        <li>"I <strong>already</strong> know." (Je sais déjà)</li>
        <li>Position : avant le verbe principal</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>STILL</strong> = ça continue<br/>
      <strong>YET</strong> = pas encore / déjà ? (négations/questions)<br/>
      <strong>ALREADY</strong> = c'est fait (plus tôt que prévu)</p>
    `,
    date: "2025-12-24",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "5 min",
    description: "Maîtrisez Still, Yet et Already pour exprimer les nuances temporelles en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "still-yet-already"
  },
  {
    id: "actually-currently",
    title: "Actually vs Currently : Les faux amis à éviter",
    excerpt: `Actually ne signifie pas "actuellement" ! Découvrez ce faux ami classique et comment l'éviter.`,
    content: `
      <p><strong>ACTUALLY</strong> est l'un des faux amis les plus courants entre le français et l'anglais.</p>

      <h2>ACTUALLY ≠ Actuellement</h2>
      <p><strong>ACTUALLY</strong> = en fait, vraiment, à vrai dire</p>
      <ul>
        <li>"<strong>Actually</strong>, I don't agree." (En fait, je ne suis pas d'accord)</li>
        <li>"It was <strong>actually</strong> quite good." (C'était vraiment assez bien)</li>
        <li>"What <strong>actually</strong> happened?" (Que s'est-il vraiment passé ?)</li>
      </ul>

      <h2>CURRENTLY = Actuellement</h2>
      <p><strong>CURRENTLY</strong> = en ce moment, actuellement</p>
      <ul>
        <li>"I'm <strong>currently</strong> working on a project." (Je travaille actuellement sur un projet)</li>
        <li>"She's <strong>currently</strong> in London." (Elle est actuellement à Londres)</li>
        <li>"We <strong>currently</strong> have 50 employees." (Nous avons actuellement 50 employés)</li>
      </ul>

      <h2>Autres équivalents de "actuellement"</h2>
      <ul>
        <li><strong>At the moment</strong> : "I'm busy at the moment."</li>
        <li><strong>Right now</strong> : "I can't talk right now."</li>
        <li><strong>Presently</strong> (formel) : "The CEO is presently unavailable."</li>
      </ul>

      <h2>Erreur classique</h2>
      <p>❌ "I'm actually living in Paris." (ça veut dire "en fait, je vis à Paris")<br/>
      ✅ "I'm currently living in Paris." (actuellement)</p>
    `,
    date: "2025-12-23",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Évitez le faux ami Actually vs Currently et parlez anglais plus naturellement.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "actually-currently"
  },
  {
    id: "fairly-quite-rather",
    title: "Fairly, Quite, Rather : Nuances d'intensité",
    excerpt: "Ces trois adverbes modifient l'intensité des adjectifs. Découvrez leurs différences subtiles.",
    content: `
      <p><strong>FAIRLY</strong>, <strong>QUITE</strong> et <strong>RATHER</strong> sont des modificateurs d'intensité souvent mal utilisés.</p>

      <h2>FAIRLY : assez (modéré)</h2>
      <p><strong>FAIRLY</strong> exprime une intensité modérée, neutre :</p>
      <ul>
        <li>"The film was <strong>fairly</strong> good." (Le film était assez bien)</li>
        <li>"It's <strong>fairly</strong> easy." (C'est assez facile)</li>
        <li>"She's <strong>fairly</strong> tall." (Elle est assez grande)</li>
        <li>Intensité : environ 60-70%</li>
      </ul>

      <h2>QUITE : plutôt / assez (peut être fort)</h2>
      <p><strong>QUITE</strong> peut avoir deux sens selon le contexte :</p>
      <ul>
        <li>Avec adjectifs gradables : "It's <strong>quite</strong> good." (assez bien)</li>
        <li>Avec adjectifs absolus : "It's <strong>quite</strong> amazing!" (vraiment incroyable)</li>
        <li>Intensité variable : 70-90%</li>
      </ul>

      <h2>RATHER : plutôt (plus fort, parfois négatif)</h2>
      <p><strong>RATHER</strong> est plus fort et peut exprimer une surprise ou une nuance négative :</p>
      <ul>
        <li>"It was <strong>rather</strong> expensive." (C'était plutôt cher - un peu trop)</li>
        <li>"I'm <strong>rather</strong> tired." (Je suis plutôt fatigué)</li>
        <li>"The book was <strong>rather</strong> boring." (Le livre était plutôt ennuyeux)</li>
        <li>Intensité : 75-85%</li>
      </ul>

      <h2>Échelle d'intensité</h2>
      <p>FAIRLY < QUITE < RATHER < VERY</p>
    `,
    date: "2025-12-22",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "5 min",
    description: "Maîtrisez Fairly, Quite et Rather pour nuancer vos descriptions en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "fairly-quite-rather"
  },
  {
    id: "classic-vs-classical",
    title: "Classic vs Classical : Une différence importante",
    excerpt: "Classic et Classical ne sont pas interchangeables. Découvrez quand utiliser chacun.",
    content: `
      <p><strong>CLASSIC</strong> et <strong>CLASSICAL</strong> ont des sens distincts malgré leur apparence similaire.</p>

      <h2>CLASSIC : typique, emblématique, intemporel</h2>
      <p>Quelque chose de reconnu comme excellent ou typique :</p>
      <ul>
        <li>"It's a <strong>classic</strong> mistake." (une erreur typique/classique)</li>
        <li>"Casablanca is a <strong>classic</strong> film." (un film emblématique)</li>
        <li>"That's <strong>classic</strong> John!" (C'est bien John !)</li>
        <li>"<strong>Classic</strong> car" (voiture de collection, emblématique)</li>
      </ul>

      <h2>CLASSICAL : lié à l'Antiquité ou à la tradition formelle</h2>
      <p>Se réfère à une tradition formelle ou à l'Antiquité :</p>
      <ul>
        <li>"<strong>Classical</strong> music" (musique classique - Mozart, Beethoven)</li>
        <li>"<strong>Classical</strong> architecture" (architecture gréco-romaine)</li>
        <li>"<strong>Classical</strong> languages" (grec et latin)</li>
        <li>"<strong>Classical</strong> ballet" (ballet classique traditionnel)</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"<strong>Classic</strong> rock" (rock emblématique des années 70-80)</li>
        <li>"<strong>Classical</strong> music" (musique savante occidentale)</li>
        <li>"A <strong>classic</strong> example" (un exemple typique)</li>
        <li>"<strong>Classical</strong> studies" (études des civilisations antiques)</li>
      </ul>
    `,
    date: "2025-12-21",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Comprenez la différence entre Classic (typique) et Classical (traditionnel/antique).",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "classic-vs-classical"
  },
  {
    id: "economic-vs-economical",
    title: "Economic vs Economical : Ne les confondez plus",
    excerpt: "Ces deux adjectifs ont des sens très différents. Découvrez comment les distinguer.",
    content: `
      <p><strong>ECONOMIC</strong> et <strong>ECONOMICAL</strong> sont souvent confondus mais ont des sens bien distincts.</p>

      <h2>ECONOMIC : lié à l'économie</h2>
      <p>Relatif à l'économie, aux finances, au système économique :</p>
      <ul>
        <li>"The <strong>economic</strong> crisis" (la crise économique)</li>
        <li>"<strong>Economic</strong> growth" (la croissance économique)</li>
        <li>"<strong>Economic</strong> policy" (la politique économique)</li>
        <li>"<strong>Economic</strong> forecast" (prévisions économiques)</li>
      </ul>

      <h2>ECONOMICAL : rentable, qui fait des économies</h2>
      <p>Qui permet d'économiser de l'argent ou des ressources :</p>
      <ul>
        <li>"This car is very <strong>economical</strong>." (cette voiture est économique/consomme peu)</li>
        <li>"An <strong>economical</strong> solution" (une solution rentable)</li>
        <li>"It's more <strong>economical</strong> to buy in bulk." (plus économique d'acheter en gros)</li>
        <li>"She's very <strong>economical</strong> with her money." (elle est économe)</li>
      </ul>

      <h2>Astuce mémorisation</h2>
      <p><strong>ECONOMIC</strong> = "of the economy" (de l'économie)<br/>
      <strong>ECONOMICAL</strong> = "saves money" (qui économise)</p>

      <h2>Expressions courantes</h2>
      <ul>
        <li>"<strong>Economic</strong> development" (développement économique)</li>
        <li>"<strong>Economical</strong> with the truth" (qui enjolive la vérité)</li>
      </ul>
    `,
    date: "2025-12-20",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Maîtrisez la différence entre Economic (économie) et Economical (économique/rentable).",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "economic-vs-economical"
  },
  {
    id: "historic-vs-historical",
    title: "Historic vs Historical : Quelle différence ?",
    excerpt: "Historic et Historical ne sont pas synonymes. Apprenez à les utiliser correctement.",
    content: `
      <p><strong>HISTORIC</strong> et <strong>HISTORICAL</strong> sont souvent interchangés à tort.</p>

      <h2>HISTORIC : important dans l'histoire</h2>
      <p>Quelque chose qui a marqué l'histoire, qui est mémorable :</p>
      <ul>
        <li>"A <strong>historic</strong> moment" (un moment historique, mémorable)</li>
        <li>"The <strong>historic</strong> moon landing" (l'alunissage historique)</li>
        <li>"A <strong>historic</strong> victory" (une victoire historique)</li>
        <li>"This is a <strong>historic</strong> occasion." (une occasion mémorable)</li>
      </ul>

      <h2>HISTORICAL : relatif à l'histoire</h2>
      <p>Qui concerne l'histoire comme discipline ou le passé :</p>
      <ul>
        <li>"<strong>Historical</strong> documents" (documents historiques)</li>
        <li>"A <strong>historical</strong> novel" (un roman historique)</li>
        <li>"<strong>Historical</strong> accuracy" (exactitude historique)</li>
        <li>"<strong>Historical</strong> research" (recherche historique)</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li>"A <strong>historic</strong> building" (bâtiment qui a marqué l'histoire)</li>
        <li>"A <strong>historical</strong> building" (bâtiment ancien, du passé)</li>
        <li>"<strong>Historic</strong> speech" (discours mémorable)</li>
        <li>"<strong>Historical</strong> speech" (discours du passé, dans un contexte historique)</li>
      </ul>

      <h2>Astuce</h2>
      <p><strong>HISTORIC</strong> = "made history" (a fait l'histoire)<br/>
      <strong>HISTORICAL</strong> = "about history" (à propos de l'histoire)</p>
    `,
    date: "2025-12-19",
    author: "Antony Addy",
    category: "Vocabulaire",
    readTime: "4 min",
    description: "Distinguez Historic (mémorable) et Historical (relatif à l'histoire).",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "historic-vs-historical"
  },
  {
    id: "used-to-be-used-to",
    title: "Used to vs Be used to : Habitudes passées et présentes",
    excerpt: "Ces deux expressions sont souvent confondues. Découvrez leurs différences de sens et de structure.",
    content: `
      <p><strong>USED TO</strong> et <strong>BE USED TO</strong> expriment des concepts différents liés aux habitudes.</p>

      <h2>USED TO : habitude passée (qui n'existe plus)</h2>
      <p>Structure : <strong>used to + infinitif</strong></p>
      <ul>
        <li>"I <strong>used to</strong> smoke." (Je fumais - je ne fume plus)</li>
        <li>"She <strong>used to</strong> live in Paris." (Elle vivait à Paris)</li>
        <li>"We <strong>used to</strong> play together." (On jouait ensemble)</li>
        <li>Négation : "I didn't use to like coffee."</li>
        <li>Question : "Did you use to work here?"</li>
      </ul>

      <h2>BE USED TO : être habitué à</h2>
      <p>Structure : <strong>be used to + nom/gérondif (-ing)</strong></p>
      <ul>
        <li>"I <strong>am used to</strong> the noise." (Je suis habitué au bruit)</li>
        <li>"She <strong>is used to</strong> working late." (Elle est habituée à travailler tard)</li>
        <li>"I'm not <strong>used to</strong> driving on the left." (Je ne suis pas habitué à...)</li>
      </ul>

      <h2>GET USED TO : s'habituer à</h2>
      <p>Pour exprimer le processus d'habituation :</p>
      <ul>
        <li>"I'm <strong>getting used to</strong> my new job." (Je m'habitue à...)</li>
        <li>"You'll <strong>get used to</strong> it." (Tu t'y habitueras)</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>USED TO</strong> + infinitif = habitude passée<br/>
      <strong>BE USED TO</strong> + -ing/nom = être habitué<br/>
      <strong>GET USED TO</strong> + -ing/nom = s'habituer</p>
    `,
    date: "2025-12-18",
    author: "Antony Addy",
    category: "Grammaire - Structures",
    readTime: "5 min",
    description: "Maîtrisez Used to et Be used to pour parler des habitudes en anglais.",
    ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
    relatedExerciseId: "used-to-be-used-to"
  }
];
grammarBlogPosts.map((post) => post.id);
const grammarArticles = grammarBlogPosts.map((post) => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  author: post.author,
  category: post.category,
  readTime: post.readTime
}));
const ADD = "https://anglaisadistance.fr";
const DEST = {
  conversation: `${ADD}/conversation-trainer`,
  grammar: `${ADD}/grammaire-essentielle`,
  grammarCorrector: `${ADD}/ai-grammar-corrector`,
  emailCoach: `${ADD}/ai-email-coach`,
  reading: `${ADD}/ai-reading-comprehension`,
  dialogues: `${ADD}/dialogues`,
  interview: `${ADD}/dialogues/job-interview`,
  exercises: `${ADD}/grammaire-essentielle/contrastes`,
  home: `${ADD}/`
};
const page = (loader) => () => loader().then((m2) => ({ Component: m2.default }));
const routes = [
  {
    element: /* @__PURE__ */ jsx(AppShell, {}),
    children: [
      // Standalone — no global <Layout> chrome
      {
        path: "/questionnaire",
        lazy: page(() => import("./assets/Questionnaire-BXkgyJ-E.js")),
        entry: "src/pages/Questionnaire.tsx"
      },
      // All marketing routes wrapped in <Layout>
      {
        element: /* @__PURE__ */ jsx(LayoutShell, {}),
        children: [
          // Core marketing pages
          { path: "/", lazy: page(() => import("./assets/Home-qX2aL-XK.js")), entry: "src/pages/Home.tsx" },
          { path: "/qui-je-suis", lazy: page(() => import("./assets/About-BeOAaHB-.js")), entry: "src/pages/About.tsx" },
          { path: "/offres-de-formation", lazy: page(() => import("./assets/Training-BiwVeHTZ.js")), entry: "src/pages/Training.tsx" },
          { path: "/temoignages", lazy: page(() => import("./assets/Testimonials-Vdlu1t-x.js")), entry: "src/pages/Testimonials.tsx" },
          { path: "/contact", lazy: page(() => import("./assets/Contact-Cxil0mmo.js")), entry: "src/pages/Contact.tsx" },
          { path: "/thank-you", lazy: page(() => import("./assets/ThankYou-DriDOOMc.js")), entry: "src/pages/ThankYou.tsx" },
          { path: "/blog", lazy: page(() => import("./assets/Blog-BKqGeudb.js")), entry: "src/pages/Blog.tsx" },
          {
            path: "/blog/:id",
            lazy: page(() => import("./assets/BlogArticle-oAuIN1ok.js")),
            entry: "src/pages/BlogArticle.tsx",
            // Prerender one static HTML file per article.
            getStaticPaths: () => grammarBlogPosts.map((p2) => `/blog/${p2.id}`)
          },
          { path: "/mentions-legales", lazy: page(() => import("./assets/LegalNotices-CO8BnnMm.js")), entry: "src/pages/LegalNotices.tsx" },
          { path: "/politique-confidentialite", lazy: page(() => import("./assets/PrivacyPolicy-827n-cva.js")), entry: "src/pages/PrivacyPolicy.tsx" },
          { path: "/politique-de-confidentialite", element: /* @__PURE__ */ jsx(Navigate, { to: "/politique-confidentialite", replace: true }) },
          { path: "/cgv", lazy: page(() => import("./assets/CGV-BE3xoKpj.js")), entry: "src/pages/CGV.tsx" },
          // Per-audience landing pages
          { path: "/anglais-entreprise", lazy: page(() => import("./assets/AnglaisEntreprise-30Emr60a.js")), entry: "src/pages/AnglaisEntreprise.tsx" },
          { path: "/anglais-cadres", lazy: page(() => import("./assets/AnglaisCadres-BMFlCB90.js")), entry: "src/pages/AnglaisCadres.tsx" },
          { path: "/anglais-particuliers", lazy: page(() => import("./assets/AnglaisParticuliers-BwxCod2B.js")), entry: "src/pages/AnglaisParticuliers.tsx" },
          { path: "/anglais-etudiants", lazy: page(() => import("./assets/AnglaisEtudiants-C-rvITZQ.js")), entry: "src/pages/AnglaisEtudiants.tsx" },
          // Per-city landing pages
          { path: "/cours-anglais-frejus", lazy: page(() => import("./assets/CoursAnglaisFrejus-BdmZ1DxQ.js")), entry: "src/pages/CoursAnglaisFrejus.tsx" },
          { path: "/cours-anglais-nice", lazy: page(() => import("./assets/CoursAnglaisNice-BTBkOjKR.js")), entry: "src/pages/CoursAnglaisNice.tsx" },
          { path: "/cours-anglais-cannes", lazy: page(() => import("./assets/CoursAnglaisCannes-BShHHyIU.js")), entry: "src/pages/CoursAnglaisCannes.tsx" },
          { path: "/cours-anglais-antibes", lazy: page(() => import("./assets/CoursAnglaisAntibes-BsMk0pmH.js")), entry: "src/pages/CoursAnglaisAntibes.tsx" },
          { path: "/cours-anglais-sophia-antipolis", lazy: page(() => import("./assets/CoursAnglaisSophiaAntipolis-CGLjbxmv.js")), entry: "src/pages/CoursAnglaisSophiaAntipolis.tsx" },
          // Internal: legacy sitemap bookmark → home
          { path: "/sitemap-page", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) },
          // CLOE — intentionally 404 (no redirect)
          { path: "/exercices/cloe-preparation/*", element: /* @__PURE__ */ jsx(NotFound, {}) },
          { path: "/exercices/cloe/*", element: /* @__PURE__ */ jsx(NotFound, {}) },
          // External redirects — exercises
          { path: "/exercices/grammar/*", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.grammar }) },
          { path: "/exercices/comprehension-ecrite", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.reading }) },
          { path: "/exercices/*", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.exercises }) },
          { path: "/exercices", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.exercises }) },
          // External redirects — reading & stories
          { path: "/reading", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.reading }) },
          { path: "/reading/*", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.reading }) },
          { path: "/lecture", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.reading }) },
          { path: "/story/*", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.dialogues }) },
          { path: "/story-trainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.dialogues }) },
          // External redirects — listening
          { path: "/listening", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.exercises }) },
          // External redirects — AI trainers
          { path: "/conversation-trainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.conversation }) },
          { path: "/speaking-practice", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.conversation }) },
          { path: "/grammar-explainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.grammar }) },
          { path: "/writing-coach", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.grammarCorrector }) },
          { path: "/email-trainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.emailCoach }) },
          { path: "/interview-simulator", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.interview }) },
          { path: "/presentation-trainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.home }) },
          { path: "/negotiation-trainer", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.home }) },
          // External redirects — free resources hub
          { path: "/ressources-gratuites", element: /* @__PURE__ */ jsx(ExternalRedirect, { to: DEST.home }) },
          // Catch-all
          { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
        ]
      }
    ]
  }
];
const createRoot = ViteReactSSG(
  { routes },
  async ({ isClient }) => {
    if (!isClient) return;
    const { installTTSLifecycleGuards } = await import("./assets/ttsLifecycle-Bj5dcyfE.js");
    installTTSLifecycleGuards();
    await import("./assets/vitals-ChI3Fopj.js");
    if ("serviceWorker" in navigator) {
      let refreshed = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshed) return;
        refreshed = true;
        window.location.reload();
      });
      window.addEventListener("load", () => {
        navigator.serviceWorker.getRegistration().then((reg) => {
          if (!reg) return;
          reg.update().catch(() => void 0);
          const requestSkipWaiting = (worker) => {
            if (!worker) return;
            worker.postMessage("SKIP_WAITING");
          };
          requestSkipWaiting(reg.waiting);
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                requestSkipWaiting(newWorker);
              }
            });
          });
        });
      });
    }
    setTimeout(() => {
      console.log(
        `
SEOHead wired: ${document.querySelectorAll("[data-react-helmet]").length}
PWA registered: ${"serviceWorker" in navigator ? "true" : "false"}
Core Web Vitals reporting: enabled
`
      );
    }, 1e3);
  }
);
export {
  Accordion as A,
  Button as B,
  Card as C,
  FadeInSection as F,
  SiteLogo as S,
  TestimonialSkeleton as T,
  W,
  CardContent as a,
  WHATSAPP_PREFILLED_URL as b,
  cn as c,
  createRoot,
  SEOHead as d,
  jsonLdOrganization as e,
  jsonLdPerson as f,
  CardHeader as g,
  trackWhatsAppClick as h,
  trackEmailClick as i,
  jsonLdWebsite as j,
  trackFormError as k,
  trackFormSubmission as l,
  grammarArticles as m,
  trackSocialShare as n,
  grammarBlogPosts as o,
  trackEvent as t
};

// Temporary mock for react-router-dom
import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';

interface RouterContextType {
  location: { pathname: string };
  navigate: (to: string) => void;
  outlet: React.ReactNode;
  setOutlet: (node: React.ReactNode) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState({ pathname: window.location.pathname || '/' });
  const [outlet, setOutlet] = useState<React.ReactNode>(null);

  useEffect(() => {
    const handlePopState = () => {
      setLocation({ pathname: window.location.pathname });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState(null, '', to);
    setLocation({ pathname: to });
  }, []);

  const value = useMemo(() => ({ location, navigate, outlet, setOutlet }), [location, navigate, outlet]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

// Store routes for matching
let routes: Array<{ path: string; element: React.ReactNode }> = [];

export function Routes({ children }: { children: React.ReactNode }) {
  // Reset routes when Routes component mounts
  routes = [];

  // Render all Route children - they will register themselves
  return <>{children}</>;
}

export function Route({ path, element }: { path: string; element: React.ReactNode }) {
  const ctx = useContext(RouterContext);

  // Register this route
  useMemo(() => {
    routes.push({ path, element });
  }, []);

  if (!ctx) return null;

  const currentPath = ctx.location.pathname || '/';

  // Check for exact match first
  const exactMatch = routes.find(r => currentPath === r.path);
  if (exactMatch && exactMatch.path === path) {
    return <>{element}</>;
  }

  // Check for nested/parent match
  if (path !== '/') {
    const isMatch = currentPath === path || currentPath.startsWith(path + '/');
    if (isMatch) {
      // Find child route
      const childPath = currentPath.slice(path.length) || '/';
      const childRoute = routes.find(r => r.path === childPath || r.path === currentPath);

      if (childRoute && childRoute.path !== path) {
        // This is a parent route, render it with outlet
        ctx.setOutlet(childRoute.element);
        return <>{element}</>;
      }

      // Check for index route or exact match
      if (currentPath === path) {
        return <>{element}</>;
      }
    }
  }

  // Handle index route "/"
  if (path === '/' && currentPath === '/') {
    return <>{element}</>;
  }

  return null;
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ to, children, className }: LinkProps) {
  const ctx = useContext(RouterContext);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    ctx?.navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

interface NavLinkProps extends LinkProps {
  className?: string | ((props: { isActive: boolean }) => string);
}

export function NavLink({ to, children, className }: NavLinkProps) {
  const ctx = useContext(RouterContext);
  const isActive = ctx?.location.pathname === to;

  const finalClassName = typeof className === 'function'
    ? className({ isActive })
    : className;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    ctx?.navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={finalClassName}>
      {children}
    </a>
  );
}

export function useLocation() {
  return useContext(RouterContext)?.location || { pathname: '/' };
}

export function Outlet() {
  const ctx = useContext(RouterContext);
  return <>{ctx?.outlet}</>;
}

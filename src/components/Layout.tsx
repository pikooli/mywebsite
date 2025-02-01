'use client';
import { AppProvider } from '@/context/AppContext';

export function Layout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
    children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

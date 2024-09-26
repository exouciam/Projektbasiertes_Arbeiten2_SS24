import {createMenuItems, useViewConfig} from '@vaadin/hilla-file-router/runtime.js';
import {effect, signal} from '@vaadin/hilla-react-signals';
import {AppLayout, DrawerToggle, Icon, SideNav, SideNavItem} from '@vaadin/react-components';
import {Button} from '@vaadin/react-components/Button.js';
import {useAuth} from 'Frontend/util/auth.js';
import {Suspense, useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

const defaultTitle = document.title;
const documentTitleSignal = signal('');
effect(() => {
    document.title = documentTitleSignal.value;
});

// Publish for Vaadin to use
(window as any).Vaadin.documentTitleSignal = documentTitleSignal;

/**
 * Defines layout and navigation of the application
 */
export default function MainLayout() {
    const currentTitle = useViewConfig()?.title ?? defaultTitle;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        documentTitleSignal.value = currentTitle;
    }, [currentTitle]);

    const {state, logout} = useAuth();

    return (
        <AppLayout primarySection="drawer">
            {state.user ? (
                <>
            <div slot="drawer" className="flex flex-col justify-between h-full p-m">
                <header className="flex flex-col gap-m">
                    <span className="font-semibold text-l">My App</span>
                    <SideNav onNavigate={({path}) => navigate(path!)} location={location}>
                        {createMenuItems().map(({to, title, icon}) => (
                            <SideNavItem path={to} key={to}>
                                {icon ? <Icon src={icon} slot="prefix"></Icon> : <></>}
                                {title}
                            </SideNavItem>
                        ))}
                    </SideNav>
                </header>
                <footer className="flex flex-col gap-s">
                    {state.user ? (
                        <>
                            <Button
                                onClick={async () => {
                                    await logout();
                                    document.location.reload();
                                }}
                            >
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <Link to="/login">Sign in</Link>
                    )}
                </footer>
            </div>

            <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
                </>

            ) : null}

            <Suspense>
                <Outlet/>
            </Suspense>
        </AppLayout>
    );
}

/*eslint-disable*/
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import SignUpContainer from '../signUp/SignUpContainer';
import SignInContainer from '../signIn/SignInContainer';
import About from '../about/About';
import Home from '../home/Home';
import Content from '../content/Content';
import { getLocale, setLocale } from '../shared/localization/localization';
import { LocalizationProvider } from '../shared/localization/LocalizationContext';
import {
    SIGN_IN,
    SIGN_UP,
    ABOUT,
    HOME,
    CONTENT,
    HOME_CONTENT,
} from '../shared/routes';
import { AuthRoute } from '../shared/routesComponent/AuthRoute';
import { NonAuthRoute } from '../shared/routesComponent/NonAuthRoute';
import configureStore from '../shared/store/configureStore';
import Overlay from '../shared/overlay/Overlay';

import styles from './Main.scss';
import { RedirectedRoute } from '../shared/routesComponent/RedirectedRoute';

const store = configureStore();

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: {
                localeStrings: getLocale(),
                onLanguageSelect: this.onLanguageSelect,
            },
        };
    }

    onLanguageSelect = languageCode => {
        setLocale(languageCode);

        const { context } = this.state;

        context.localeStrings = getLocale(languageCode);

        this.setState({ context });
    };

    render() {
        const { context } = this.state;

        return (
            <Provider store={store}>
                <Overlay>
                    <div className={styles.page}>
                        <BrowserRouter>
                            <LocalizationProvider value={context}>
                                <Header />
                                <main className={styles.main}>
                                    <Switch>
                                        <AuthRoute
                                            path={CONTENT.path}
                                            component={Content}
                                        />
                                        <NonAuthRoute
                                            path={SIGN_IN.path}
                                            component={SignInContainer}
                                        />
                                        <NonAuthRoute
                                            path={SIGN_UP.path}
                                            component={SignUpContainer}
                                        />
                                        <Route
                                            path={ABOUT.path}
                                            component={About}
                                        />
                                        <RedirectedRoute
                                            redirectedPath={HOME_CONTENT.path}
                                            path={HOME.path}
                                            component={Home}
                                        />
                                    </Switch>
                                </main>
                                <Footer />
                            </LocalizationProvider>
                        </BrowserRouter>
                    </div>
                </Overlay>
            </Provider>
        );
    }
}

export default Main;

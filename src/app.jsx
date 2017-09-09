import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './components/home';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <div>
                <Component />
            </div>
        </AppContainer>,
        document.getElementById('react')
    )
};

render(Home);

if (module.hot) {
    module.hot.accept('./components/home', () => render(Home));
}

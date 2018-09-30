import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './app/layout/App';
import ScrollToTop from './app/common/util/ScrollToTop'
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from './app/store/configureStore'

const store = configureStore();


const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr 
                        position= 'bottom-right'
                        transitionIn = 'fadeIn'
                        transitionOut = 'fadeOut'
                    />
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>, 
        rootEl);
}

if (module.hot){
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    })
}
store.firebaseAuthIsReady.then(() => {
    render();
})

registerServiceWorker();

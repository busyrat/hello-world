import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import singleSpaReact, { SingleSpaContext } from 'single-spa-react'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>
  },
})
export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount

// 判断当前页面使用singleSpa应用,不是就渲染
if (!window.singleSpaNavigate) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

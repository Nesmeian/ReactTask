import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import taskReducer from './store/taskReducer'
const store = createStore(taskReducer)
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>,
)

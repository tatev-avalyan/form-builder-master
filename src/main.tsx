import ReactDOM from 'react-dom/client'
import { store } from '@store/store'
import { DndProvider } from 'react-dnd'
import { Provider } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
)

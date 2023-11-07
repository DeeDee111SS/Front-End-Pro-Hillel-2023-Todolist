import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import TodoBox from './components/TodoBox';

function App() {
  return (
    <div className="App mt-5 mx-5">
      <BrowserRouter>
        <Provider store={store}>
          <TodoBox/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

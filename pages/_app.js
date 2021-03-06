// antd
import '../styles/main.scss'
import "tailwindcss/tailwind.css";
import '../node_modules/antd/dist/antd.css';

import { ConfigProvider } from 'antd';

// redux
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)

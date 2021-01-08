// antd
import '../node_modules/antd/dist/antd.css';

import { ConfigProvider } from 'antd';


function MyApp({ Component, pageProps }) {
  return (
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
  )
}

export default MyApp

import './App.css'
import Header from './Components/Header/Header'
import FooterComponent from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import { FloatButton } from 'antd'
import { UpOutlined } from '@ant-design/icons'
function App() {
   return (
      <div className="app">
         <FloatButton.BackTop visibilityHeight={50} icon={<UpOutlined style={{ color: '#000' }} />} />
         <Header />
         <Main />
         <FooterComponent />
      </div>
   )
}

export default App

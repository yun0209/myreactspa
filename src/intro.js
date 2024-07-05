import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'
//png ,gif,jpg
//svg 는 xml 태그<모듈>이니까 import로 한다.


const App = () => {
  return (
    <header id='hd' className='border-bottom'>
      <div className='container d-flex justify-content-between align-items-center'>
        <h1 className='col-4 col-md-2'>
          <a href="" className='d-block'>
            <img src={logo} className='w-100' alt="" />
          </a>
          </h1>
        <ul id='gnb' className='d-flex'>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
        </ul>

      </div>

    </header>
    
  );
}

export default App;

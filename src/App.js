import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="canvas">
      <div className="container">
        <div className='img'>
          {/* Head */}
          <img src="images/logo.png" alt="logo" width="10%" height="10%" />
          {/* Head-end */}
        </div>
        <div className='text-welcome'>
          {/* body */}
          <p>Selamat Datang Dashboard Admin Manajemen</p>
          <p>Data Kemenag.AI</p>
        </div>
        <div>
          <p className='text-silahkan'>Silahkan Isi Akun dan Password yang telah terdaftar</p>
          {/* body-end */}
        </div>
        <div className='border'>
          {/* footer */}
          <div className='akun'>
          <a href='akun.html' className='word1'>Akun</a>
          </div>
          <div className='password'>
          <a href='password.html' className='word2'>Password</a>
          </div>
        </div>
        <div className='nav-masuk'>
          <p className='masuk'>Masuk</p>
        </div>
      </div>
      <div>
        <div className='footer'>
          <a href="password.html" className='lupa'>Lupa kata sandi?</a>
          <a href="reset,html" className='reset'>Reset kata sandi</a>
          {/* footer-end */}
        </div>

      </div>
    </div>
  )
}

export default App;

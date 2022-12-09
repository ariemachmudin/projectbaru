import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="sheet">
      <div>
        <div className='container'>
          <div className='img'>
          <img src='images/logo.png' alt='logo' width="10%" height="10%" />
          </div>
          <div className='sel'>Selamat Datang Dashboard Admin Manajemen</div>
          <div className='das'>Data Kemenag.AI</div>
          <div className='sil'>Silahkan Isi Akun dan Password yang telah terdaftar</div>
          <div className='body-li'>
            <li className='ak'>Akun</li>
            <li className='pass'>Password</li>
            <div className='mas-li'>
              <li className='mas'>Masuk</li>
            </div>
          </div>
        </div>
        <div className='footer'>
          <li className='lup'>Lupa Password?</li>
          <li className='res'>Reset kata sandi</li>
        </div>

      </div>
    </div>
  )
}

export default App;

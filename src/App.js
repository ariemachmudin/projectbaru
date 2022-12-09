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
          <div className='ak'>Akun</div>
          <div className='pass'>Password</div>
          <div className='mas'>MASUK</div>
        </div>
        <div className='footer'>
          <div className='lup'>Lupa Password?</div>
          <div className='res'>Reset kata sandi</div>
        </div>

      </div>
    </div>
  )
}

export default App;

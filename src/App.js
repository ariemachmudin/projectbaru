import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container1'>
      <div className='container-in'>
        <a>
          <img src="Kementerian_Agama_new_logo.jpg"/>
          <div className='welcome'>
            <p className='text'>Selamat Datang Dashboard Admin Manajemen</p>
            <p className='text'>Data Kemenag.AI</p>
            <p className='text2'>Silahkan isi Akun dan Password yang telah terdaftar</p>

          </div>
          <div className='kotak-navbar'>
            <p className='li-navbar'>Akun</p>
            <p className='li-navbar'>Kata Sandi</p>
          </div>
          <div className='in-navbar'>
            <p className='li-navbar2'>Masuk</p>
          </div>
          
        </a>
      </div>
    </div>
  );
}

export default App;

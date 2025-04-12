import { Outlet } from "react-router-dom";

 import style from './layout.module.css';
import { Header } from "../component/header/Header";
import { Footer } from "../component/footer/Footer";
import { Aside } from "../component/aside/Aside";

const Layout = () => {
  return (
    <div className={style.layout}>
      <Header/>
    

      <main className={style.main}>
      <div className={style.container}>

        <Outlet /> {/* Тут відображатимуться дочірні сторінки */}
      </div>
      </main>
     <Aside/>
      <Footer/>
    </div>
  );
};

export default Layout;
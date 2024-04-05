import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';

import Footer from '../Footer/Footer';
import css from '../Layout/Layout.module.css';
export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Toaster position="top-right" reverseOrder={true} />
      {children}
      <Footer />
    </div>
  );
}

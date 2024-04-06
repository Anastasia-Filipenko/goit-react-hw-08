import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import css from '../Footer/Footer.module.css';
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.linkList}>
        <a href="https://www.linkedin.com/in/anastasiia-filipenko-10a872183/">
          <CiLinkedin className={css.icon} />
        </a>
        <a href="https://github.com/Anastasia-Filipenko">
          <FaGithub className={css.icon} />
        </a>
      </div>
    </footer>
  );
}

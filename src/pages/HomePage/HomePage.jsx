import css from '../HomePage/HomePage.module.css';
import image from '../../img/image.png';
export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Create your Phonebook</h1>

      <img className={css.img} src={image} alt="Image Contact Page" />
    </div>
  );
}

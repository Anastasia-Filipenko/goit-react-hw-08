import css from '../HomePage/HomePage.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Create your Phonebook</h1>

      <img
        className={css.img}
        src="src/img/image.png"
        alt="Image Contact Page"
      />
    </div>
  );
}

import css from '../ErrorMessage/ErrorMessage.module.css';
export default function ErrorMessage() {
  return (
    <>
      <h2 className={css.error}>
        Oops, there was an error. Please reload the page
      </h2>
    </>
  );
}

import css from './msg.module.css';

export const Msg = () => {
  return (
    <div className={css.msg}>
      <h2>There are no contacts to display. Add contacts to see the list.</h2>
    </div>
  );
};

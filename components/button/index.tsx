import { ButtonType } from './style';

export default function Button({ type, title, onClick }) {
  const classNames = ButtonType[type];
  return (
    <button className={classNames} onClick={onClick}>
      {title}
    </button>
  );
}

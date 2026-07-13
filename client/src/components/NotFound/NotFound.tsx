import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">Страница не найдена</h1>
      <p className="not-found__text">
        Похоже, такой страницы не существует или она была перемещена.
      </p>
      <Link to="/" className="not-found__link">
        Вернуться на главную
      </Link>
    </div>
  );
}
import { ShoppingCart } from 'react-feather';

export default function CartButton() {
  return (
    <button className="btn btn-ghost btn-circle" type="button">
      <div className="indicator">
        <ShoppingCart className="place-items-center" size={20} />
        <span className="badge badge-sm indicator-item">8</span>
      </div>
    </button>
  );
}

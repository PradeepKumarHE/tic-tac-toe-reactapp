export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="palyer">
        <span className="palyer-name">{name}</span>
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}

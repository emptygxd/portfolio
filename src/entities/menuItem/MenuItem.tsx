import "./menuItem.css";

type Props = {
  id: string;
  placeholder: string;
};

export const MenuItem = ({ id, placeholder }: Props) => {
  return (
    <li className="text-color menu-text sm:text-sm">
      <a href={id}>{placeholder}</a>
    </li>
  );
};

import { MenuItem } from "entities";

import { MENU_ROUTES } from "shared";

export const Menu = () => {
  return (
    <header className="flex justify-end items-center w-full px-10 py-5">
      <nav>
        <ul className="flex justify-center items-center gap-5">
          {MENU_ROUTES.map((element, index) => (
            <MenuItem
              key={`${element.placeholder}_${index}`}
              id={element.id}
              placeholder={element.placeholder}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

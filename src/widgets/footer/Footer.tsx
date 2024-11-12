import { FooterItem } from "entities";

import { FOOTER } from "shared";

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="flex justify-center items-center gap-10 p-7">
        {FOOTER.map((element, index) => (
          <FooterItem
            key={`${element.name}_${index}`}
            name={element.name}
            href={element.href}
            image={element.image}
          />
        ))}
      </div>
    </footer>
  );
};

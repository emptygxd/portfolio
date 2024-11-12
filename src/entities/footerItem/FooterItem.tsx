type Props = {
  name: string;
  href: string;
  image: string;
};

export const FooterItem = ({ name, href, image }: Props) => {
  return (
    <a href={href} className="flex flex-col items-center gap-2 group">
      <img className="w-7 h-7 sm:w-5 sm:h-5" src={image} alt={name} />
      <p className="text-link-color group-hover:text-complementary-color sm:text-sm">
        {name}
      </p>
    </a>
  );
};

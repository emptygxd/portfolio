export const Resume = () => {
  return (
    <section className="text-center py-28 md:py-16 sm:py-12">
      <h1 className="text-6xl font-bold text-primary-color mb-4 animate-fade-in sm:text-3xl">
        Frontend разработчик
      </h1>

      <p className="text-2xl text-secondary-color mb-6 max-w-lg mx-auto animate-fade-in-delay sm:text-lg">
        Создаю современные и удобные интерфейсы для веб-приложений. Фокус на
        пользовательский опыт и чистый код.
      </p>

      <a href="#contact">
        <button className="border-link-color border-2 rounded-lg text-xl text-color p-2 transform -rotate-3 hover:rotate-0  transition-all ease-linear duration-150 hover:bg-complementary-color hover:border-complementary-color sm:text-base">
          Связаться со мной
        </button>
      </a>
    </section>
  );
};

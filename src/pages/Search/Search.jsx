import { Backdrop, Hero, Footer } from "../../components";

export const Search = () => {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm />
      <Footer />
    </>
  );
};

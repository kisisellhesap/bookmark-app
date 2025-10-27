import RightContent from "./right-content";
import SearchContent from "./search-content";

const Header = () => {
  return (
    <header className="px-8 py-4  bg-Neutral-0 dark:bg-Neutral-800-d flex items-center">
      <SearchContent />
      <RightContent />
    </header>
  );
};

export default Header;

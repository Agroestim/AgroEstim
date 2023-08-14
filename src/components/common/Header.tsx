import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="HeaderWrapper">
      <div className="HeaderLayout">
        <div className="HeroWrapper">
          <div className="HeroLayout">
            <div className="HeroProductBranding">
              {/* Product branding assets provider */}
            </div>
            <div className="HeroProductAbout"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

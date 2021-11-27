import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints, useTooltip } from "../../hooks";
import VvsPrice from "../../components/VvsPrice/VvsPrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { Text, TooltipText } from "../..";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.nav.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);

  padding-left: 30px;
  padding-right: 30px;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 77px;
  background: ${({ theme }) => theme.colors.extraBackground};
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  globalMenu,
  isDark,
  isBlindMode,
  toggleTheme,
  currentLang,
  setLang,
  vvsPriceUsd,
  showVvsPrice,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyVvsLabel,
  iconCallback,
  vvsAddress,
  children,
  t
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset < MENU_HEIGHT;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  // Tooltip
  const TooltipComponent = () => (
    <>
      <Text fontWeight="bold" mb="16px">
        {t("Pioneer Farming Mode")}
      </Text>
      <Text mb="16px">{t("Welcome! You are a pioneer in the VVS mines! In this mode, APR calculation, analytics, and USD values will not be shown during the initial launch week as prices and historical data points are still forming.")}</Text>
      <Text>
        {t("Rest assured, the bounty will be worthwhile!")}
      </Text>
    </>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(<TooltipComponent />, { placement: 'bottom-start' })

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
          {!isMobile && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="24px" />}
        </Flex>
        <Flex alignItems="center">
          {isBlindMode && <Box mt="4px" mr="32px">
            {tooltipVisible && tooltip}
            <TooltipText color="textSubtle" small ref={targetRef}>
              <img style={{ width: 28 }} src="/images/bell.gif"></img>
            </TooltipText>
          </Box>}
          {!isMobile && !!showVvsPrice && !isBlindMode && (
            <Box mr="12px">
              <VvsPrice vvsPriceUsd={vvsPriceUsd} vvsAddress={vvsAddress} iconCallback={iconCallback} />
            </Box>
          )}
          {/* <Box mt="4px">
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              buttonScale="xs"
              color="textSubtle"
              hideLanguage
            />
          </Box> */}
          {globalMenu} {userMenu}
        </Flex>
      </StyledNav>
      {/* {subLinks && subLinks.length > 1 && <SubMenuItems items={subLinks} mt={`${MENU_HEIGHT + 1}px`} activeItem={activeSubItem} />} */}
      <BodyWrapper>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
          {/* <Footer
            items={footerLinks}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            vvsPriceUsd={vvsPriceUsd}
            buyVvsLabel={buyVvsLabel}
            mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
          /> */}
        </Inner>
      </BodyWrapper>
      {isMobile && links.length > 0 && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
    </Wrapper>
  );
};

export default Menu;

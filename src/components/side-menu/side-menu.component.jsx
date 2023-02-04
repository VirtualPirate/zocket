import styles from "./side-menu.module.css";

import { ReactComponent as ZocketLogo } from "../../assets/zocket.svg";

import SideMenuItem from "../side_menu_item/side-menu-item.component";

import CampaignFill from "../../assets/menu_icons/campaign_fill.svg";
import CustomersFill from "../../assets/menu_icons/customers_fill.svg";
import HomeFill from "../../assets/menu_icons/home_fill.svg";
import ProductsFill from "../../assets/menu_icons/products_fill.svg";

import CampaignStroked from "../../assets/menu_icons/campaign_stroked.svg";
import CustomersStroked from "../../assets/menu_icons/customers_stroked.svg";
import HomeStroked from "../../assets/menu_icons/home_stroked.svg";
import ProductsStroked from "../../assets/menu_icons/products_stroked.svg";

import { useRef } from "react";

export default function SideMenu() {
  return (
    <nav className={styles.side_menu}>
      <ZocketLogo className={styles.zocket_logo} />
      <div className={styles.nav_items}>
        <SideMenuItem imageSrc={HomeFill} name="Home" />
        <SideMenuItem imageSrc={CampaignFill} name="Campaign" active={true} />
        <SideMenuItem imageSrc={ProductsFill} name="Products" />
        <SideMenuItem imageSrc={CustomersFill} name="Customers" />
      </div>
    </nav>
  );
}

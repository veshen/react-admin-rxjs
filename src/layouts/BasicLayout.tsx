import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

import GlobalNavigation from '@atlaskit/global-navigation';
import AtlassianIcon from '@atlaskit/logo/dist/esm/AtlassianLogo/Icon';
// import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import { LayoutManager, NavigationProvider } from '@atlaskit/navigation-next';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import GearIcon from '@atlaskit/icon/glyph/settings';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';

import Drawer from '@atlaskit/drawer';

// import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';



// import CreateDrawer from '../../components/CreateDrawer';
// import SearchDrawer from '../../components/SearchDrawer';
// import HelpDropdownMenu from '../../components/HelpDropdownMenu';
// import AccountDropdownMenu from '../../components/AccountDropdownMenu';
import atlaskitLogo from '../../images/atlaskit.png';

interface IProps extends RouteComponentProps{
  navOpenState : {
    isOpen : boolean
    width : number
  }
  activeMenuIsOpen : (isOpen:boolean) => any
  children : any
}

interface TypeOfStarterNavigation extends IProps {

}

const StarterNavigation:React.SFC<TypeOfStarterNavigation> = ({match,location,history,navOpenState, activeMenuIsOpen, children}:IProps) => {
  const navLinks = [
    ['/', 'Home', DashboardIcon],
    ['/settings', 'Settings', GearIcon],
  ]
  const [ openDrawer, setOpenDrawer ] = useState<boolean>(false)
  // const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
  // const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="xlarge" />;
    console.log(GlobalNavigation)
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={
            () => <GlobalNavigation
                    productIcon={AtlassianIcon}
                    // onProductClick={() => {}}
                    // productIcon={EmojiAtlassianIcon}
                    productHref="/"
                    onInviteClick={()=>console.log('onInviteClick')}
                    onProductClick={() => console.log('product clicked')}
                    onRecentClick={()=>{}}
                    onCreateClick={() => setOpenDrawer(true)}
                    onSearchClick={() => console.log('search clicked')}
                    onStarredClick={() => console.log('starred clicked')}
                    onHelpClick={() => console.log('help clicked')}
                    helpItems={() => <div>helpItems</div>}
                    onNotificationClick={() => console.log('notification clicked')}
                    appSwitcherComponent={()=><Drawer
                      onClose={()=>setOpenDrawer(false)}
                      onCloseComplete={()=>{}}
                      isOpen={openDrawer}
                      width="wide"
                    />}
                    appSwitcherTooltip="Switch to ..."
                    onSettingsClick={() => console.log('settings clicked')}
                    loginHref="/login"
          />}
          productNavigation={() => <div>456456456</div>}
          containerNavigation={() =>
            <div>
              {navLinks.map((link:any) => {
                const [url, title, Icon] = link;
                return (
                  <Link key={url} to={url}>
                    <div>123123</div>
                  </Link>
                );
              })}
            </div>

          }
        >
          {children}
        </LayoutManager>
      </NavigationProvider>
    );
}
export default withRouter(StarterNavigation)

// <AkNavigationItem
//   icon={<Icon label={title} size="medium" />}
//   text={title}
//   isSelected={location.pathname===url}
// />

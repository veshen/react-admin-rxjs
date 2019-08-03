import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

import GlobalNavigation from '@atlaskit/global-navigation';
// import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import { LayoutManager, ContainerHeader, ItemAvatar,  HeaderSection, MenuSection, Wordmark, Item, Separator, GroupHeading, NavigationProvider, GlobalNavigationSkeleton, GlobalItem } from '@atlaskit/navigation-next';
import { AtlassianIcon, AtlassianWordmark } from '@atlaskit/logo';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import GearIcon from '@atlaskit/icon/glyph/settings';

import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';

// import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';

import GlobalNav from './GlobalNav'



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
const MyProductNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ className }:any) => (
        <div className={className}>
          <Wordmark wordmark={AtlassianWordmark} />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }:any) => (
        <div className={className}>
          <Item text="Dashboard" />
          <Item text="Things" />
          <Item text="Settings" />
          <Separator />
          <GroupHeading>Add-ons</GroupHeading>
          <Item text="My plugin" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);
const MyContainerNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ css }:any) => (
        <div css={{ ...css, paddingBottom: 20 }}>
          <ContainerHeader
            before={(itemState:any) => (
              <ItemAvatar
                itemState={itemState}
                appearance="square"
                size="large"
              />
            )}
            text="Container name"
            subText="Container description"
          />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }:any) => (
        <div className={className}>
          <Item text="Things in this container" />
          <Item text="Reports" />
          <Item text="Some other thing selected" isSelected />
          <Separator />
          <GroupHeading>Shortcuts</GroupHeading>
          <Item before={ShortcutIcon} text="Team space" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);
const StarterNavigation:React.SFC<TypeOfStarterNavigation> = ({match,location,history,navOpenState, activeMenuIsOpen, children}:IProps) => {
  const navLinks = [
    ['/', 'Home', DashboardIcon],
    ['/settings', 'Settings', GearIcon],
  ]
  const [ openDrawer, setOpenDrawer ] = useState<boolean>(false)
  // const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
  // const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="xlarge" />;
    console.log(GlobalNavigationSkeleton)
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={
            () => <GlobalNav/>}
          productNavigation={() => null}
          containerNavigation={() =><MyContainerNavigation/>}
        >
          {children}
        </LayoutManager>
      </NavigationProvider>
    );
}
export default withRouter(StarterNavigation)

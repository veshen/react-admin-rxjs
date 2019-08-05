import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

import {  LayoutManager, NavigationProvider, GlobalNavigationSkeleton } from '@atlaskit/navigation-next';

// import { AtlassianIcon, AtlassianWordmark } from '@atlaskit/logo';

import GlobalNav from './GlobalNav'
import ContainerNavigation from './ContainerNavigation'


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
  // const navLinks = [
  //   ['/', 'Home', DashboardIcon],
  //   ['/settings', 'Settings', GearIcon],
  // ]
  const [ openDrawer, setOpenDrawer ] = useState<boolean>(false)
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={
            () => <GlobalNav/>}
          productNavigation={() => null}
          containerNavigation={() =><ContainerNavigation/>}
        >
          {children}
        </LayoutManager>
      </NavigationProvider>
    );
}

export default withRouter(StarterNavigation)

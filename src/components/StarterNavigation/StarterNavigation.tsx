import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem,
  AkSearchDrawer,
} from '@atlaskit/navigation';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import GearIcon from '@atlaskit/icon/glyph/settings';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';

import CreateDrawer from '../../components/CreateDrawer';
import SearchDrawer from '../../components/SearchDrawer';
import HelpDropdownMenu from '../../components/HelpDropdownMenu';
import AccountDropdownMenu from '../../components/AccountDropdownMenu';
import atlaskitLogo from '../../images/atlaskit.png';

interface IProps extends RouteComponentProps{
  navOpenState : {
    isOpen : boolean
    width : number
  }
}

interface TypeOfStarterNavigation extends IProps {

}

const StarterNavigation:React.SFC<TypeOfStarterNavigation> = ({match,location,history,navOpenState}:IProps) => {
  const navLinks = [
    ['/', 'Home', DashboardIcon],
    ['/settings', 'Settings', GearIcon],
  ]
  const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
  const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="xlarge" />;
    return (
      <Nav
        isOpen={navOpenState.isOpen}
        width={navOpenState.width}
        onResize={()=>{}}
        containerHeaderComponent={() => (
          <AkContainerTitle
            href="https://atlaskit.atlassian.com/"
            icon={
              <img alt="atlaskit logo" src={atlaskitLogo} />
            }
            text="Atlaskit"
          />
        )}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        globalSearchIcon={<SearchIcon label="Search icon" />}
        hasBlanket
        // drawers={[
        //   <AkSearchDrawer
        //     backIcon={backIcon}
        //     isOpen={this.state.openDrawer === 'search'}
        //     key="search"
        //     onBackButton={() => {}}
        //     primaryIcon={globalPrimaryIcon}
        //   >
        //     <SearchDrawer
        //       onResultClicked={() => {}}
        //       onSearchInputRef={(ref:any) => {
        //         // this.searchInputRef = ref;
        //       }}
        //     />
        //   </AkSearchDrawer>,
        //   <AkCreateDrawer
        //     backIcon={backIcon}
        //     isOpen={this.state.openDrawer === 'create'}
        //     key="create"
        //     onBackButton={() => this.openDrawer(null)}
        //     primaryIcon={globalPrimaryIcon}
        //   >
        //     <CreateDrawer
        //       onItemClicked={() => this.openDrawer(null)}
        //     />
        //   </AkCreateDrawer>
        // ]}
        globalAccountItem={AccountDropdownMenu}
        globalCreateIcon={<CreateIcon label="Create icon" />}
        globalHelpItem={HelpDropdownMenu}
        // onSearchDrawerOpen={() => this.openDrawer('search')}
        // onCreateDrawerOpen={() => this.openDrawer('create')}
      >
        {
          navLinks.map((link:any) => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={url}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={location.pathname===url}
                />
              </Link>
            );
          })
        }
      </Nav>
    );
}
export default withRouter(StarterNavigation)

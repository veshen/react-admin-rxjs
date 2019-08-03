import React, { Fragment, useState } from 'react';
import { GlobalNav } from '@atlaskit/navigation-next';
import AtlassianIcon from '@atlaskit/logo/dist/esm/AtlassianLogo/Icon';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';
import HelpIcon from '@atlaskit/icon/glyph/question-circle';
import MenuIcon from '@atlaskit/icon/glyph/menu';
import Avatar from '@atlaskit/avatar';
import Drawer from '@atlaskit/drawer';

interface TypeOfNav {

}

const Nav:React.SFC<TypeOfNav>= ({}) => {
  const [ isOpenSearchDrawer, serIsOpenSearchDrawer ] = useState(false)
  return(
    <Fragment>
      <GlobalNav primaryItems={[
        {
          icon: () => <AtlassianIcon label="Atlassian" size="medium" />,
          id: 'logo',
          tooltip: 'Atlassian',
          onClick: () => console.log('Logo item clicked'),
        },
        {
          icon: SearchIcon,
          id: 'search',
          tooltip: 'Search',
          onClick: () => serIsOpenSearchDrawer(true),
        },
        {
          icon: MenuIcon,
          id: 'menu',
          tooltip: 'Menu',
          onClick: () => console.log('click item menu'),
        },
        {
          icon: CreateIcon,
          id: 'create',
          tooltip: 'Create',
          onClick: () => console.log('Create item clicked'),
        },
      ]} secondaryItems={[
        {
          icon: HelpIcon,
          id: 'help',
          onClick: () => console.log('Help item clicked'),
          tooltip: 'Help',
        },
        {
          component: ({ className, onClick }: any) => (
            <span className={className}>
              <Avatar
                borderColor="transparent"
                isActive={false}
                isHover={false}
                size="small"
                onClick={onClick}
              />
            </span>
          ),
          icon: null,
          id: 'profile',
          onClick: () => console.log('Profile item clicked'),
          tooltip: 'Profile',
        },
      ]} />
      <Drawer onClose={()=>serIsOpenSearchDrawer(false)} isOpen={isOpenSearchDrawer} width="wide">
        <code>Drawer contents</code>
      </Drawer>
    </Fragment>
  )
}
export default Nav

import React, { Fragment } from 'react';
import { ContainerHeader, ItemAvatar,  HeaderSection, MenuSection,  Item, Separator, GroupHeading } from '@atlaskit/navigation-next';

import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';

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
export default  MyContainerNavigation;

import React from 'react';

class MenuTopSocialItem extends React.PureComponent {
  render() {
    const { menu } = this.props;
    const Icon = menu.icon;
    return (
      <a href={menu.href} rel="noopener noreferrer">
        <Icon width="40" height="40" />
      </a>
    );
  }
}

export default MenuTopSocialItem;

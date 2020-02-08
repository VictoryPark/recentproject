import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkIcon from '../../../assets/icon/link.svg';

class MenuTopItem extends React.PureComponent {
  render() {
    const { menu } = this.props;
    const style = {
      textDecoration: 'none',
      color: '#BABDAB',
    };

    return (
      <div>
        {menu.type === 'internal' ? (
          <NavLink to={menu.href} style={style}>
            {menu.title}
          </NavLink>
        ) : (
          <>
            <a
              href={menu.href}
              rel="noopener noreferrer"
              style={style}
            >
              {menu.title}
              <LinkIcon width="20" height="20" />
            </a>
          </>
        )}
      </div>
    );
  }
}

export default MenuTopItem;

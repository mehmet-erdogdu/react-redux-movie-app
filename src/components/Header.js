import React, { Component } from "react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/">
                <Image
                  size="mini"
                  src="http://www.pngmart.com/files/5/Movie-PNG-Image.png"
                />
                <Menu.Item header>Taigaflix</Menu.Item>
              </Menu.Item>

              <Menu.Item as={NavLink} to="/movies">
                Filmler
              </Menu.Item>
              <Menu.Item as={NavLink} to="/new-movie">
                Yeni Film
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

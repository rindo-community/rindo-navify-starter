import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {

  render() {
    return (
      <nav-tabs>
        <nav-tab tab="tab-home">
          <nav-nav></nav-nav>
        </nav-tab>
        <nav-tab tab="tab-notice">
          <nav-nav></nav-nav>
        </nav-tab>
        <nav-tab-bar slot="bottom">
          <nav-tab-button tab="tab-home">
            <nav-icon name="home"></nav-icon>
            <nav-label>Home</nav-label>
          </nav-tab-button>
          <nav-tab-button tab="tab-notice">
            <nav-icon name="notifications"></nav-icon>
            <nav-badge color="danger">12</nav-badge>
            <nav-label>Notices</nav-label>
          </nav-tab-button>
        </nav-tab-bar>
      </nav-tabs>
    );
  }

}

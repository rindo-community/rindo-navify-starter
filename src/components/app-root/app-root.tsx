import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <nav-app>
        <nav-router useHash={false}>
          <nav-route-redirect from="/" to="/tab/home"></nav-route-redirect>
          <nav-route url="/tab" component="app-tabs">
            <nav-route url="/home" component="tab-home">
              <nav-route component="page-home"></nav-route>
            </nav-route>
            <nav-route url="/notice" component="tab-notice">
              <nav-route component="page-notice"></nav-route>
            </nav-route>
          </nav-route>
          <nav-route url="/profile/:name" component="page-profile"></nav-route>
        </nav-router>
        <nav-nav></nav-nav>
      </nav-app>
    )
  }
}

import { Component, Fragment, h, State } from '@rindo/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() mode: string

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto'
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return
    }
    this.mode = mode
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode)
        break
      default:
        localStorage.removeItem('mode')
        break
    }
    location.reload()
  }

  render() {
    return (
      <Fragment>
        <nav-header>
          <nav-toolbar color="primary">
            <nav-title>Home</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <p>Welcome to Rindo App Starter.</p>
          <nav-list>
            <nav-radio-group value={this.mode} onNavChange={e => this.setMode(e.detail.value)}>
              <nav-list-header>
                <nav-label>Theme Mode</nav-label>
              </nav-list-header>
              <nav-note class="nav-padding-start">
                (Changing theme will reload the whole app.)
              </nav-note>
              <nav-item>
                <nav-label>Auto Detect</nav-label>
                <nav-radio value='auto'></nav-radio>
              </nav-item>
              <nav-item>
                <nav-label>Material Design</nav-label>
                <nav-radio value='md'></nav-radio>
              </nav-item>
              <nav-item>
                <nav-label>iOS</nav-label>
                <nav-radio value='ios'></nav-radio>
              </nav-item>
            </nav-radio-group>
          </nav-list>
          <p>Let's try navigating with navify router!</p>
          <nav-list>
            <nav-item href="/tab/notice">
              <nav-label>Notice Page (/tab/notice)</nav-label>
            </nav-item>
            <nav-item href="/profile/navify">
              <nav-label>Profile Page (/profile/navify)</nav-label>
            </nav-item>
          </nav-list>
        </nav-content>
      </Fragment>
    );
  }

}

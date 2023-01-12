import { Component, Fragment, h, Prop } from '@rindo/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment>
        <nav-header>
          <nav-toolbar color="primary">
            <nav-buttons slot="start">
              <nav-back-button defaultHref="/tab/notice"></nav-back-button>
            </nav-buttons>
            <nav-title>Profile: {this.name}</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content fullscreen class="nav-padding">
          <nav-card>
            <nav-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </nav-card-header>
            <nav-card-content>
              <p>
                This name is passed in through a route param!
              </p>
            </nav-card-content>
          </nav-card>
        </nav-content>
      </Fragment>
    );
  }

}

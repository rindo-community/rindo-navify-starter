import { Component, Fragment, h } from '@rindo/core';

@Component({
  tag: 'page-notice',
  styleUrl: 'page-notice.css',
  // shadow: true,
})
export class PageNotice {

  names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
  ]

  render() {
    return (
      <Fragment>
        <nav-header>
          <nav-toolbar color="primary">
            <nav-title>Notices</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <nav-list>
            {this.names.map(name=>
              <nav-item href={"/profile/"+name.toLowerCase()} key={name}>
                <nav-label>{name} is following you</nav-label>
              </nav-item>
            )}
          </nav-list>
        </nav-content>
      </Fragment>
    );
  }

}

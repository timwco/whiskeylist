(function () {

  'use strict';

  let template = `
    <div class="igImage" style="background-image: url({{image}});"></div>
    <div class="front-hover">
      <div>
        <h5>{{caption}}</h5>
        <a target="_blank" href="{{link}}">View on Instagram</a>
      </div>
    </div>
  `;

  let feed = new Instafeed({
      get: 'user',
      userId: 'self',
      limit: 1,
      accessToken: '1621444019.1677ed0.baed9935b7ab4eb6ace92d9f9d88834a',
      resolution: 'standard_resolution',
      template: template
  });

  feed.run();

})();
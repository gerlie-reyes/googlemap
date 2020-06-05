/**
 * Created by gerlie on 5/9/17.
 */
const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAU_795TciNCYK2dh28smc-s7VNsjplC_U&libraries=places&callback=__onGoogleLoaded';

export class GoogleAPI {
  loadAPI: Promise<any>

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      window['__onGoogleLoaded'] = (ev) => {
        resolve(window['google']['maps']);
      }
      this.loadScript();
    });
  }

  googleAPILoaded() {
    return this.loadAPI.then((gapi) => {
      console.log(gapi);
    });
  }

  loadScript() {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
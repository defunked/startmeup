var latoRegular, latoBold, latoItalic, latoLight;
if (!sessionStorage.fontsLoaded) {
  latoRegular = new FontFaceObserver('Lato', {
    weight: 400
  });
  latoItalic = new FontFaceObserver('Lato', {
    style: italic
  });
  latoLight = new FontFaceObserver('Lato', {
    weight: 300
  });
  latoBold = new FontFaceObserver('Lato', {
    weight: 700
  });
  Promise.all([
    latoRegular.load(),
    latoItalic.load(),
    latoLight.load(),
    latoBold.load()
  ]).then(function() {
    document.documentElement.className += " fonts-loaded";
    sessionStorage.fontsLoaded = true;
  });
} else {
document.documentElement.className += " fonts-loaded";
}

// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from "react-360-web";
import { Surface } from "react-360-web";
function init(bundle, parent, options = {}) {
  const SIZE = 300;
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("Dtl", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );
  const flatsurface = new Surface(1050, 1050, Surface.SurfaceShape.Flat);
  flatsurface.setAngle((-1 * Math.PI) / 2, 0);
  r360.renderToSurface(
    r360.createRoot("Info", {
      /* initial props */
    }),
    flatsurface
  );

  const flatsurface1 = new Surface(1050, 1050, Surface.SurfaceShape.Flat);
  flatsurface1.setAngle(Math.PI / 2, 0);
  r360.renderToSurface(
    r360.createRoot("Info1", {
      /* initial props */
    }),
    flatsurface1
  );

  // const sphereSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  // sphereSurface.setAngle(0, 0);
  // r360.renderToSurface(r360.createRoot("Info"), sphereSurface);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("he4.jpg"));
}

window.React360 = { init };

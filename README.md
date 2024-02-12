# Example of using svg file deployed on CDN in react application

This app contains an example of using svg files hosted on a CDN inside a react application. The following steps need to be taken.
1. At first optimize the SVG file using SVGO and upload the file in any CDN. On this example the SVG file is hosted on github gist.
2. To use the SVG, open the raw file of github gist and copy the url.
3. Fetch the url and get the html content.
4. Set the html content inside the component.

import * as fs from 'fs';
import { resolve } from 'path';

const routesFolder = resolve('./src/routes');

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// HELPER FUNCTION TO GET ALL ROUTES PATH
function getAllRoutesPath() {
  const allRoutesPath = [];

  fs.readdirSync(routesFolder).forEach((file) => {
    const fullPath = `${routesFolder}/${file}`;
    if (fs.existsSync(fullPath) && fullPath.endsWith('.route.js')) {
      allRoutesPath.push({
        fullPath,
        fileName: file.replace('.route.js', ''),
      });
    }
  });

  return allRoutesPath;
}

// MAIN FUNCTION TO REGISTER ALL ROUTES
export async function registerRoutes(expressInstance) {
  const allRoutesPath = getAllRoutesPath();
  // LOAD ALL NESTED ROUTES FILE
  allRoutesPath.forEach((routeFile) => {
    const { router } = import(`${routeFile.fullPath}`);
    expressInstance.use(`/api/${camelCaseToDash(routeFile.fileName)}`, router);
  });
}

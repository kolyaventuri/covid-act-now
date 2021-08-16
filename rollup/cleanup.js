import path from 'path';
import fs from 'fs-extra';
import rimraf from 'rimraf';

const promisify = (func) => (...args) => new Promise((resolve, reject) => {
  func(...args, (error) => {
    if (error) return reject(error);
    resolve();
  })
}); 

const rimrafAsync = promisify(rimraf);

export const cleanupBuild = () => ({
  name: 'covid-act-now-cleanup',
  async writeBundle() {
    const declarationPath = path.join(__dirname, 'lib/dts');

    await rimrafAsync(path.join(declarationPath, 'test')); // Remove DTS test dir
    await fs.copy(path.join(declarationPath, 'src'), declarationPath, {overwrite: true}); // Copy src up one level
    await rimrafAsync(path.join(declarationPath, 'src')); // Delete the src directory
  }
});

export const cleanupDts = () => ({
  name: 'covid-act-now-cleanup-dts',
  async writeBundle() {
    const declarationPath = path.join(__dirname, 'lib/dts');

    await rimrafAsync(declarationPath);
  }
});

export const cloneTypes = () => ({
  name: 'covid-act-now-clone-types',
  async writeBundle() {
    const typePath = path.join(__dirname, 'src/types');
    const dest = path.join(__dirname, 'types');

    await fs.copy(typePath, dest);
  }
});

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Path } from '../utility/path';
import { app } from 'electron';
import { getUnpackedDir } from '../utility/getUnpackedDir';

export const absHosted = process.env.COMPOSER_AUTH_PROVIDER === 'abs-h';
export const absHostRoot = process.env.WEBSITE_HOSTNAME
  ? `https://${process.env.WEBSITE_HOSTNAME}`
  : 'http://localhost:3978';

let folder = process.env.COMPOSER_BOTS_FOLDER;
if (folder && folder.endsWith(':')) {
  folder = folder + '/';
}

console.log('__dirname: ', __dirname);
console.log('electron path: ', app.getAppPath());
console.log('unpacked path: ', getUnpackedDir());
const unpackedDir = getUnpackedDir();

export const environment = process.env.NODE_ENV || 'development';
export const botsFolder = folder;
export const botEndpoint = process.env.BOT_ENDPOINT || 'http://localhost:3979';
export const appDataPath = process.env.COMPOSER_APP_DATA || Path.resolve(__dirname, '../../data.json');
export const runtimeFolder = process.env.COMPOSER_RUNTIME_FOLDER || Path.join(unpackedDir, 'build', 'templates'); // Path.resolve(__dirname, '../../../../../BotProject/Templates');
export const runtimeFrameworkVersion = process.env.COMPOSER_RUNTIME_VERSION || 'netcoreapp3.1';

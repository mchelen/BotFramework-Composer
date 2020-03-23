// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

//import settings from '../settings';
import { settingsService } from '../services/settings';

export default {
  version: 1,
  storageConnections: [
    {
      id: 'default',
      name: 'This PC',
      type: 'LocalDisk',
      path: '', // this is used as last accessed path, if it is invalid, use defaultPath
      defaultPath: settingsService.getSettings().botsFolder,
    },
  ],
  recentBotProjects: [],
  projectLocationMap: {},
};

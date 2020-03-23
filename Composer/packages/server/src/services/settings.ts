// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import defaultSettings, { ApplicationSettings } from '../settings';

let settings: ApplicationSettings;

export const settingsService = {
  getSettings(): ApplicationSettings {
    if (!settings) {
      throw new Error('Settings service must first be initialized by calling .initialize(settings)');
    }
    return settings;
  },
  initialize(appSettings: ApplicationSettings = defaultSettings): void {
    settings = appSettings;
  },
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import defaultSettings, { ApplicationSettings } from '../settings';
import { AssetManager } from '../models/asset/assetManager';
import { settingsService } from './settings';

let assetService: AssetService;
class AssetService {
  public manager: AssetManager;

  constructor(settings: ApplicationSettings = defaultSettings) {
    this.manager = new AssetManager(settings.assetsLibray, settings.runtimeFolder);
  }
}

export default {
  getInstance(): AssetService {
    if (!assetService) {
      assetService = new AssetService(settingsService.getSettings());
    }
    return assetService;
  },
};

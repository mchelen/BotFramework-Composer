// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { app } from 'electron';
import { join, dirname } from 'path';

export function getUnpackedDir(): string {
  if (app.isPackaged) {
    return join(dirname(app.getAppPath()), 'app.asar.unpacked');
  }
  return '';
}

import {
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

Then(
  'the complete banking flow should be successful',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page
    ).not.toHaveURL(
      /error/i
    );
  }
);
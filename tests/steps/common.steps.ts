import {
  Given,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

Given(
  'I am on the ParaBank home page',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page
    ).toHaveTitle(
      /ParaBank/i
    );
  }
);

Then(
  'the page should be displayed',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page
    ).toHaveTitle(
      /ParaBank/i
    );
  }
);
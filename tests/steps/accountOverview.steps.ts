import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  AccountOverviewPage
} from '../pages/AccountOverviewPage';

When(
  'I open Accounts Overview',
  async function(
    this: CustomWorld
  ) {

    const accountPage =
      new AccountOverviewPage(
        this.page
      );

    await accountPage.openOverview();

    await accountPage.verifyOverview();
  }
);

When(
  'I verify Accounts Overview',
  async function(
    this: CustomWorld
  ) {

    const accountPage =
      new AccountOverviewPage(
        this.page
      );

    await accountPage.openOverview();

    await accountPage.verifyOverview();
  }
);

Then(
  'I should see my account details',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.locator(
        '#accountTable'
      )
    ).toBeVisible();
  }
);
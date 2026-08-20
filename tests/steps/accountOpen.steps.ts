import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  AccountOpenPage
} from '../pages/AccountOpenPage';

import testData
  from '../testData/paraBankData.json';

When(
  'I open a new account using account test data',
  async function(
    this: CustomWorld
  ) {

    const accountPage =
      new AccountOpenPage(
        this.page
      );

    await accountPage.openAccount(
      testData.account.accountType
    );
  }
);

Then(
  'the new account should be created successfully',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Account Opened/i
      )
    ).toBeVisible();
  }
);
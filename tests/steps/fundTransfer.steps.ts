import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  FundTransferPage
} from '../pages/FundTransferPage';

import testData
  from '../testData/paraBankData.json';

When(
  'I transfer funds using transfer test data',
  async function(
    this: CustomWorld
  ) {

    const transferPage =
      new FundTransferPage(
        this.page
      );

    await transferPage.transfer(
      testData.transfer.amount
    );
  }
);

Then(
  'the fund transfer should be successful',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Transfer Complete/i
      )
    ).toBeVisible();
  }
);
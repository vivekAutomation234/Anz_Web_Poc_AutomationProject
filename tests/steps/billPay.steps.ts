import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  BillPayPage
} from '../pages/BillPayPage';

import testData
  from '../testData/paraBankData.json';

When(
  'I pay a bill using bill payment test data',
  async function(
    this: CustomWorld
  ) {

    const billPay =
      new BillPayPage(
        this.page
      );

    await billPay.payBill(
      testData.billPay
    );
  }
);

Then(
  'bill payment should be successful',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Bill Payment Complete/i
      )
    ).toBeVisible();
  }
);
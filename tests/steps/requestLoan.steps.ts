import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  RequestLoanPage
} from '../pages/RequestLoanPage';

import testData
  from '../testData/paraBankData.json';

When(
  'I request a loan using loan test data',
  async function(
    this: CustomWorld
  ) {

    const loanPage =
      new RequestLoanPage(
        this.page
      );

    await loanPage.requestLoan(
      testData.loan.amount,
      testData.loan.downPayment
    );
  }
);

Then(
  'the loan request should be processed',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Loan/i
      )
    ).toBeVisible();
  }
);
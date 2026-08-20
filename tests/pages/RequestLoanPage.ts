import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class RequestLoanPage
  extends BasePage {

  readonly requestLoanLink;

  readonly amount;

  readonly downPayment;

  readonly fromAccount;

  readonly applyButton;

  constructor(
    page: Page
  ) {

    super(page);

    this.requestLoanLink =
      page.getByRole('link', {
        name: /Request Loan/i
      });

    this.amount =
      page.locator('#amount');

    this.downPayment =
      page.locator(
        '#downPayment'
      );

    this.fromAccount =
      page.locator(
        '#fromAccountId'
      );

    this.applyButton =
      page.locator(
        'input[value="Apply Now"]'
      );
  }

  async requestLoan(
    amount: string,
    downPayment: string
  ) {

    await this.requestLoanLink.click();

    await this.amount.fill(
      amount
    );

    await this.downPayment.fill(
      downPayment
    );

    const count =
      await this.fromAccount
        .locator('option')
        .count();

    if (count < 2) {

      throw new Error(
        'No account available for loan'
      );
    }

    await this.fromAccount
      .locator('option')
      .nth(1)
      .click();

    await this.applyButton.click();

    await expect(
      this.page.getByText(
        /Loan/i
      )
    ).toBeVisible();
  }
}
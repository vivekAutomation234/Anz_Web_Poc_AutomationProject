import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class FundTransferPage
  extends BasePage {

  readonly transferLink;

  readonly fromAccount;

  readonly toAccount;

  readonly amount;

  readonly transferButton;

  constructor(
    page: Page
  ) {

    super(page);

    this.transferLink =
      page.getByRole('link', {
        name: /Transfer Funds/i
      });

    this.fromAccount =
      page.locator(
        '#fromAccountId'
      );

    this.toAccount =
      page.locator(
        '#toAccountId'
      );

    this.amount =
      page.locator('#amount');

    this.transferButton =
      page.locator(
        'input[value="Transfer"]'
      );
  }

  async transfer(
    amount: string
  ) {

    await this.transferLink.click();

    const accountCount =
      await this.fromAccount
        .locator('option')
        .count();

    if (accountCount < 2) {

      throw new Error(
        'No account available for transfer'
      );
    }

    await this.fromAccount
      .locator('option')
      .nth(1)
      .click();

    const toCount =
      await this.toAccount
        .locator('option')
        .count();

    if (toCount < 2) {

      throw new Error(
        'No destination account available'
      );
    }

    await this.toAccount
      .locator('option')
      .nth(1)
      .click();

    await this.amount.fill(
      amount
    );

    await this.transferButton.click();

    await expect(
      this.page.getByText(
        /Transfer Complete/i
      )
    ).toBeVisible();
  }
}
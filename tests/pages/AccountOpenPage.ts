import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class AccountOpenPage
  extends BasePage {

  readonly openAccountLink;
  readonly accountType;
  readonly fromAccount;
  readonly openButton;

  constructor(
    page: Page
  ) {

    super(page);

    this.openAccountLink =
      page.getByRole('link', {
        name: /Open New Account/i
      });

    this.accountType =
      page.locator('#type');

    this.fromAccount =
      page.locator(
        '#fromAccountId'
      );

    this.openButton =
      page.locator(
        'input[value="Open New Account"]'
      );
  }

  async openAccount(
    accountType: string
  ) {

    await this.openAccountLink.click();

    await this.accountType.selectOption({
      label: accountType
    });

    const count =
      await this.fromAccount
        .locator('option')
        .count();

    if (count < 2) {

      throw new Error(
        'No existing account available'
      );
    }

    await this.fromAccount
      .locator('option')
      .nth(1)
      .click();

    await this.openButton.click();

    await expect(
      this.page.getByText(
        /Account Opened/i
      )
    ).toBeVisible();
  }
}
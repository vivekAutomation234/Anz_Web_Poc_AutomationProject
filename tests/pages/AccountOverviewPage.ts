import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class AccountOverviewPage
  extends BasePage {

  readonly overviewLink;

  readonly accountTable;

  constructor(
    page: Page
  ) {

    super(page);

    this.overviewLink =
      page.getByRole('link', {
        name: /Accounts Overview/i
      });

    this.accountTable =
      page.locator(
        '#accountTable'
      );
  }

  async openOverview() {

    await this.overviewLink.click();
  }

  async verifyOverview() {

    await expect(
      this.page.getByText(
        /Accounts Overview/i
      )
    ).toBeVisible();

    await expect(
      this.accountTable
    ).toBeVisible();
  }
}
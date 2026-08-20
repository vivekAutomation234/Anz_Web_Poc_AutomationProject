import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class BillPayPage
  extends BasePage {

  readonly billPayLink;

  readonly payeeName;
  readonly address;
  readonly city;
  readonly state;
  readonly zipCode;
  readonly phone;
  readonly account;
  readonly verifyAccount;
  readonly amount;
  readonly sendPayment;

  constructor(
    page: Page
  ) {

    super(page);

    this.billPayLink =
      page.getByRole('link', {
        name: /Bill Pay/i
      });

    this.payeeName =
      page.locator(
        'input[name="payee.name"]'
      );

    this.address =
      page.locator(
        'input[name="payee.address.street"]'
      );

    this.city =
      page.locator(
        'input[name="payee.address.city"]'
      );

    this.state =
      page.locator(
        'input[name="payee.address.state"]'
      );

    this.zipCode =
      page.locator(
        'input[name="payee.address.zipCode"]'
      );

    this.phone =
      page.locator(
        'input[name="payee.phoneNumber"]'
      );

    this.account =
      page.locator(
        'input[name="payee.accountNumber"]'
      );

    this.verifyAccount =
      page.locator(
        'input[name="verifyAccount"]'
      );

    this.amount =
      page.locator(
        'input[name="amount"]'
      );

    this.sendPayment =
      page.locator(
        'input[value="Send Payment"]'
      );
  }

  async payBill(
    data: any
  ) {

    await this.billPayLink.click();

    await this.payeeName.fill(
      data.payeeName
    );

    await this.address.fill(
      data.address
    );

    await this.city.fill(
      data.city
    );

    await this.state.fill(
      data.state
    );

    await this.zipCode.fill(
      data.zipCode
    );

    await this.phone.fill(
      data.phone
    );

    await this.account.fill(
      data.account
    );

    await this.verifyAccount.fill(
      data.verifyAccount
    );

    await this.amount.fill(
      data.amount
    );

    await this.sendPayment.click();

    await expect(
      this.page.getByText(
        /Bill Payment Complete/i
      )
    ).toBeVisible();
  }
}
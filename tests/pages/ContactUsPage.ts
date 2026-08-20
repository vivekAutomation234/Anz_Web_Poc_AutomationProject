import {
  Page,
  expect
} from '@playwright/test';

import { BasePage }
  from './BasePage';

export class ContactUsPage
  extends BasePage {

  readonly contactUsLink;

  readonly name;

  readonly email;

  readonly phone;

  readonly message;

  readonly sendButton;

  constructor(
    page: Page
  ) {

    super(page);

    this.contactUsLink =
      page.getByRole('link', {
        name: /Contact Us/i
      });

    this.name =
      page.locator(
        'input[name="name"]'
      );

    this.email =
      page.locator(
        'input[name="email"]'
      );

    this.phone =
      page.locator(
        'input[name="phone"]'
      );

    this.message =
      page.locator(
        'textarea[name="message"]'
      );

    this.sendButton =
      page.locator(
        'input[value="Send to Customer Care"]'
      );
  }

  async submitRequest(
    data: any
  ) {

    await this.contactUsLink.click();

    await this.name.fill(
      data.name
    );

    await this.email.fill(
      data.email
    );

    await this.phone.fill(
      data.phone
    );

    await this.message.fill(
      data.message
    );

    await this.sendButton.click();

    await expect(
      this.page.getByText(
        /Thank you/i
      )
    ).toBeVisible();
  }
}
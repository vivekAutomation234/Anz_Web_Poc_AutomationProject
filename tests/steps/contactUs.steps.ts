import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import {
  ContactUsPage
} from '../pages/ContactUsPage';

import testData
  from '../testData/paraBankData.json';

When(
  'I contact customer care using customer care test data',
  async function(
    this: CustomWorld
  ) {

    const contactPage =
      new ContactUsPage(
        this.page
      );

    await contactPage.submitRequest(
      testData.customerCare
    );
  }
);

Then(
  'the customer care request should be submitted',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Thank you/i
      )
    ).toBeVisible();
  }
);
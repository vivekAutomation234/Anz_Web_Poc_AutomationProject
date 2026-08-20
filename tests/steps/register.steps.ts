import {
  When,
  Then
} from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { CustomWorld } from '../support/world';

import { LoginPage } from '../pages/LoginPage';

import { RegisterPage } from '../pages/registerPage';

import testData from '../testData/paraBankData.json';


When(
  'I register a new user using registration test data',
  async function (this: CustomWorld) {

    console.log(
      'Starting registration...'
    );

    const loginPage =
      new LoginPage(this.page);

    await loginPage.openRegistration();

    const registerPage =
      new RegisterPage(this.page);

    await registerPage.register(
      testData.registration
    );

    console.log(
      'Registration form submitted successfully'
    );
  }
);


Then(
  'registration should be successful',
  async function (this: CustomWorld) {

    await expect(
      this.page.locator('h1.title')
    ).toContainText('Welcome');

    console.log(
      'Registration successful'
    );
  }
);
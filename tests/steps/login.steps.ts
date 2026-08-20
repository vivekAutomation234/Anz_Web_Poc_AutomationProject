import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';

import { expect }
  from '@playwright/test';

import { CustomWorld }
  from '../support/world';

import { LoginPage }
  from '../pages/LoginPage';

Given(
  'I login to ParaBank using valid credentials',
  async function(
    this: CustomWorld
  ) {

    const loginPage =
      new LoginPage(
        this.page
      );

    const username =
      process.env.LOGIN_USERNAME;

    const password =
      process.env.LOGIN_PASSWORD;

    if (!username || !password) {

      throw new Error(
        'LOGIN_USERNAME or LOGIN_PASSWORD is missing in .env'
      );
    }

    await loginPage.login(
      username,
      password
    );
  }
);

When(
  'I login with username {string} and password {string}',
  async function(
    this: CustomWorld,
    username: string,
    password: string
  ) {

    const loginPage =
      new LoginPage(
        this.page
      );

    await loginPage.login(
      username,
      password
    );
  }
);

Then(
  'I should see the Accounts Overview page',
  async function(
    this: CustomWorld
  ) {

    await expect(
      this.page.getByText(
        /Accounts Overview/i
      )
    ).toBeVisible();
  }
);
Feature: Contact Customer Care

  @banking
  @contactUs

  Scenario: Contact customer care

    Given I login to ParaBank using valid credentials

    When I contact customer care using customer care test data

    Then the customer care request should be submitted
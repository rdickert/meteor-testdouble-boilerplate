Feature: Create a new note

    As a Note-taker, 
    I want to create a note,
    So that I can add note content

  Scenario: Create note
    Given I am viewing a "New Note" input
    And I can click on the "New Note" input
    When I type "My New Note" into the field
    And I hit the return key on my keyboard
    Then a note with the title "My New Note" should be created

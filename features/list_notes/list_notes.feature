Feature: List notes

    As a Note-taker, 
    I want to see a list of notes,
    So that I can view the detailed content for a note

  Scenario: List notes
    Given I am viewing a notes list
    And there are 5 notes
    Then I should see a notes list displaying the title of each note

  Scenario: No notes
    Given I am viewing a notes list
    And there are no notes
    Then I should see the message "There are no notes"

  Scenario: Display most recent note on top
    Given I am viewing a notes list
    And I create a new note
    Then the note I created should appear at the top of the notes list

  Scenario: Many notes
    Given I am viewing a notes list
    And there are more notes than can fit in the viewport
    When I scroll down
    Then I should see additional notes

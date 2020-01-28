## Developer Tools

### Google Chrome Dev Tools

- Used to test the responsiveness of the website.
- Used to make on the fly changes to the css to alter the design of the site.
- Debugging of the javascript as errors are easily identified in the console.

### Responsinator

- Used to view to how the site looks on a wide range of screen sizes at once.

## Validation Tools

### Validator W3

- The following issues were found when validating the HTML code, all issues were fixed.

1. 
- `Error: Stray end tag div`
- `From line 38, column 4; to line 38, column 9`

2. 
- `Error: End tag section seen, but there were open elements`
- `From line 112, column 3; to line 112, column 12`

3. 
- `Error: Unclosed element div`
- `From line 80, column 5; to line 80, column 33`

### Jigsaw W3

- Used to validated the CSS code. Numerous errors were found but these were withing the scripts loaded at the beginning of the page.
- Within my custom CSS `-webkit` properties were identified as invalid but this was ignored.

### JSHint 

- The following issues were found when validating the Javascript code, all issues were fixed.
- `35	['uk'] is better written in dot notation`
- `36	['uk'] is better written in dot notation`
- `351	Missing semicolon`

### Esprima Syntax Validator

- Used to validate the Javascript. No errors were found.

## Manual Tests

- The live web address was tested on a variety of web browsers: Chrome/Safari/Opera/Explorer.
- Each link on the site was tested to ensure it linked to the correct place.
- Attempted to search for Copenghagen within the search filters, which came up with the autocomplete.
- Each type of attraction was then tested with each showing the correct locations.
- The info window was then tested to ensure the correct info was shown.
- The Google maps API was also continuously checked in the console of the dev tools whilst testing the website.
- Contact form was checked with each section filled out correctly to ensure the e-mail sent correctly.
- Contact form was then partially filled in to ensure an error was shown if a box wasn't filled in correctly.

## Peer-Code Review

- Once the website was complete it was submitted to my peers for review.
- The background image was coming up in a lower resolution, this was fixed by setting the below in CSS.
    `background-size: cover;`
    `background-repeat: no-repeat;`
    `background-attachment: fixed;`
    `background-position: center;`
    `-webkit-background-size: cover;`
    `-moz-background-size: cover;`
    `-o-background-size: cover;`
- It was suggested that the search filters would look better with rounded corners, this was achieved by adding `border-radius: 25px` in CSS.
- The map heading was also removed as it was suggested this looked cleaner visually.
- One user saw a scroll-bar at the bottom of the page on their screen but after numerous test this didn't occur on any screen size.
![jbcanvas-half.svg](images/jbcanvas-half.svg)
# Accessibility Enhancements for Qodana Reports
# JetBrains Internship Project 2024

## Task Description
Design and develop an accessible registration form with fields for email, password, and username, plus a "Show Password" toggle button, ensuring keyboard navigability and screen reader compatibility.

## Solution outcome
Working on this task has provided me with a unique opportunity to improve my skills in React, specifically with the React Hook Form library. Through hands-on experience, I've deepened practical knowledge in frontend development and UX. 
As I delved into the WCAG 2.1 guidelines, I've not only learned about the importance of inclusive design but also applied these principles directly to my project. 

## Practical Results
I've developed a Registration Form with keyboard navigability and screen reader compatibility. 

1. Semantic HTML: Using appropriate HTML elements like "input", "label", and "button" for correct interpretation by screen readers.

2. Accessible Labels: Each input field is associated with a clear "label" to provide context.

3. ARIA Attributes: Aria-label, aria-required, and aria-describedby attributes gives additional information for assistive technologies.

4. Keyboard Navigation: Managing keyboard focus allows users to navigate the form using the Tab key.

5. Error Handling: Error messages are included for form validation.

Preview in CodeSandBox: [CodeSandBox public project](https://codesandbox.io/p/sandbox/accessible-registration-form-8kcn9p?file=%2Fsrc%2FApp.css%3A6%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvcai6a400063b6gptibo7m2%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvcai6a400023b6gki4fv4xy%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvcai6a400033b6giwfjzao3%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvcai6a400053b6gqmqwidf6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B53.7440958419043%252C46.2559041580957%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvcai6a400023b6gki4fv4xy%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvcai6a300013b6gpt6o4p5u%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clvcawphk00023b6g86itdfk8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A1%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A67%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FReactForm.jsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clvhqgr8700023b6gw4xezv4o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A6%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A6%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.css%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clvcai6a400023b6gki4fv4xy%2522%252C%2522activeTabId%2522%253A%2522clvhqgr8700023b6gw4xezv4o%2522%257D%252C%2522clvcai6a400053b6gqmqwidf6%2522%253A%257B%2522id%2522%253A%2522clvcai6a400053b6gqmqwidf6%2522%252C%2522activeTabId%2522%253A%2522clvcai6a400043b6g3qo61u1k%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvcai6a400043b6g3qo61u1k%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522id%2522%253A%2522clvhqcbtv00243b6irprmdqk4%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clvcai6a400033b6giwfjzao3%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvcai6a400033b6giwfjzao3%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A10%257D)

![preview.gif](images%2Fpreview.gif)

![fill.gif](images%2Ffill.gif)

![responsive.gif](images%2Fresponsive.gif)

## Project compatibility with  [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
This project has sparked my interest in Web Content Accessibility Guidelines.

I scanned some sections of WCAG 2.1 and checked "How to Meet ..." suggestions and tried to implement Sufficient Techniques for relevant features within this task.

### Perceivable
[Orientation](https://www.w3.org/TR/WCAG21/#orientation)

[Identify Input Purpose](https://www.w3.org/TR/WCAG21/#identify-input-purpose)


### Operable
[Keyboard accessible](https://www.w3.org/TR/WCAG21/#keyboard-accessible)

[Focus Order](https://www.w3.org/TR/WCAG21/#focus-order)

[Headings and Lables](https://www.w3.org/TR/WCAG21/#headings-and-labels)

[Focus Visible](https://www.w3.org/TR/WCAG21/#focus-visible)

### Understandable
[Input Assistance](https://www.w3.org/TR/WCAG21/#input-assistance)

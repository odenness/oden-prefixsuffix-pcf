OdennessDev PrefixSuffixTextField PCF Control
A highly customizable PowerApps Component Framework (PCF) control that enhances text input fields with prefix and suffix display capabilities. This control allows you to show additional text or icons before and after the main input field without saving them to the database.

Show Image

Features
Core Functionality
Prefix Text: Display text before the input field (not saved to database)
Suffix Text: Display text after the input field (not saved to database)
Main Text Value: The actual value that gets saved to the database
Placeholder Support: Customizable placeholder text
Clear Button: Optional clear button for easy text removal
Input Validation: Regular expression pattern validation with custom error messages
Visual Customization
Colors: Customizable background, text, and border colors
Typography: Configurable font size and weight
Dimensions: Set custom width and height
Icons: Support for Fluent UI icons in prefix and suffix areas
Responsive Design: Adapts to different screen sizes and themes
Accessibility & UX
Keyboard Navigation: Full keyboard support
Screen Reader Support: Proper ARIA labels and semantic markup
High Contrast Mode: Enhanced visibility in high contrast themes
Dark Theme Support: Automatic adaptation to dark themes
Focus States: Clear visual feedback for focused states
Disabled/Read-only States: Proper handling of control states
Properties
Property	Type	Required	Description
textValue	SingleLine.Text	Yes	The main text value that will be saved to the database
prefixText	SingleLine.Text	No	Text to display before the input field
suffixText	SingleLine.Text	No	Text to display after the input field
placeholderText	SingleLine.Text	No	Placeholder text to show in the input field
maxLength	Whole.None	No	Maximum number of characters allowed
isReadOnly	TwoOptions	No	Make the text field read-only
backgroundColor	SingleLine.Text	No	Background color (hex value, e.g., 
#ffffff)
textColor	SingleLine.Text	No	Text color (hex value, e.g., 
#323130)
borderColor	SingleLine.Text	No	Border color (hex value, e.g., 
#605e5c)
fontSize	Whole.None	No	Font size in pixels
fontWeight	SingleLine.Text	No	Font weight (normal, bold, 600, etc.)
controlWidth	Whole.None	No	Width of the control in pixels
controlHeight	Whole.None	No	Height of the control in pixels
prefixIcon	SingleLine.Text	No	Fluent UI icon name for prefix (e.g., "Search")
suffixIcon	SingleLine.Text	No	Fluent UI icon name for suffix (e.g., "Calendar")
showClearButton	TwoOptions	No	Show a clear button to empty the text field
validationPattern	SingleLine.Text	No	Regular expression pattern for validation
errorMessage	SingleLine.Text	No	Custom error message for validation failures
Installation
Prerequisites
PowerApps CLI
Node.js (LTS version)
Visual Studio Code (recommended)
Building the Control
Initialize the project:
bash
pac pcf init --namespace OdennessDev --name PrefixSuffixTextField --template field
Install dependencies:
bash
npm install
Build the control:
bash
npm run build
Test the control:
bash
npm start
Deployment
Create solution project:
bash
pac solution init --publisher-name odennessdev --publisher-prefix odd
Add control to solution:
bash
pac solution add-reference --path ..\
Build solution:
bash
msbuild /p:configuration=Release
Import into PowerApps:
Navigate to PowerApps admin center
Import the generated solution file
Configure the control on your forms
Usage Examples
Basic Text Field with Prefix
Prefix Text: "$"
Text Value: (bound to currency field)
Result: "$1,234.56" (only "1,234.56" is saved)
Email Field with Icon
Prefix Icon: "Mail"
Placeholder Text: "Enter your email address"
Validation Pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$"
Error Message: "Please enter a valid email address"
Phone Number with Formatting
Prefix Text: "+1 ("
Suffix Text: ")"
Placeholder Text: "555-1234"
Validation Pattern: "\d{3}-\d{4}"
Max Length: 8
Search Field
Prefix Icon: "Search"
Suffix Icon: "Cancel"
Show Clear Button: Yes
Placeholder Text: "Search products..."
Customization
Styling
The control supports extensive styling options through properties:

typescript
// Color customization
backgroundColor: "#f8f9fa"
textColor: "#212529"
borderColor: "#dee2e6"

// Typography
fontSize: 16
fontWeight: "500"

// Dimensions
controlWidth: 300
controlHeight: 40
Icons
Use any Fluent UI icon name for prefix and suffix icons:

Common icons: "Search", "Mail", "Phone", "Calendar", "Lock", "User"
Find more icons at: Fluent UI Icons
Validation
Implement custom validation using regular expressions:

javascript
// Email validation
validationPattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$"

// Phone number validation
validationPattern: "^\(\d{3}\)\s\d{3}-\d{4}$"

// Credit card validation (basic)
validationPattern: "^\d{4}\s\d{4}\s\d{4}\s\d{4}$"
Browser Support
Microsoft Edge (Chromium)
Google Chrome
Mozilla Firefox
Safari (macOS/iOS)
Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch
Make your changes
Add tests if applicable
Submit a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Support
For issues and questions:

Create an issue on GitHub
Contact: support@odennessdev.com
Documentation: Wiki
Changelog
Version 1.0.0
Initial release
Core prefix/suffix functionality
Icon support
Validation features
Customization options
Accessibility improvements
Acknowledgments
Inspired by the original PrefixSuffixTextField by Power-Maverick
Built with PowerApps Component Framework
Uses Fluent UI design system
Community feedback and contributions
Made with ❤️ by OdennessDev


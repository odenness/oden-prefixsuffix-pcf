# OdennessDev Prefix/Suffix Text Field PCF Control

[![PCF Version](https://img.shields.io/badge/PCF-v0.1.0--alpha-orange)](https://github.com/odenness/oden-prefixsuffix-pcf/releases/tag/v0.1.0-alpha)
[![Power Platform](https://img.shields.io/badge/Power%20Platform-Compatible-green)](https://powerplatform.microsoft.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/odenness/oden-prefixsuffix-pcf/blob/main/LICENSE)

A customizable PowerApps Component Framework (PCF) control that enhances text input fields with prefix and suffix display capabilities. Ideal for currency fields, phone numbers, email addresses, and any text input requiring visual context without storing formatting in the database.

![PCF Control Preview](previewimage.png)

## Key Features

**Core Functionality**
- Prefix and suffix text display (not saved to database)
- Main text value storage (saved to database)
- Support for Text, Email, Phone, URL, Currency, Decimal, and Whole Number fields
- Customizable placeholder text
- Optional clear button functionality
- Regular expression pattern validation with custom error messages

**Visual Customization**
- Customizable colors (background, text, border) with Dynamics 365 native styling
- Configurable typography (font size, weight)
- Custom dimensions (width and height)
- 22 built-in Unicode icons plus custom symbol support
- Responsive design with automatic theme adaptation
- **Enhanced**: Complete dark/light theme support for all field types
- **Enhanced**: High contrast mode compatibility with improved accessibility

**Accessibility & User Experience**
- Full keyboard navigation and tab order support
- Screen reader compatibility with proper ARIA labels
- High contrast mode support with enhanced styling
- Clear visual feedback for focus and disabled states
- **New**: Improved focus indicators and visual hierarchy
- **New**: Enhanced print styles for all field types

## Supported Field Types

| Field Type | Description | Example Use Case |
|------------|-------------|------------------|
| Text | Single line text fields | Names, descriptions |
| Email | Email address fields | Contact information |
| Phone | Phone number fields | Business/personal phones |
| URL | Website URL fields | Company websites |
| Currency | Monetary value fields | Prices, salaries |
| Decimal | Decimal number fields | Measurements, percentages |
| Whole Number | Integer fields | Quantities, counts |

## Configuration Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `textValue` | SingleLine.Text | Yes | The main text value saved to the database |
| `prefixText` | SingleLine.Text | No | Text displayed before the input field |
| `suffixText` | SingleLine.Text | No | Text displayed after the input field |
| `placeholderText` | SingleLine.Text | No | Placeholder text shown in the input field |
| `maxLength` | Whole.None | No | Maximum number of characters allowed |
| `isReadOnly` | TwoOptions | No | Make the text field read-only |
| `backgroundColor` | SingleLine.Text | No | Background color (hex value, e.g., `#f8f9fa`) |
| `textColor` | SingleLine.Text | No | Text color (hex value, e.g., `#323130`) |
| `borderColor` | SingleLine.Text | No | Border color (hex value, e.g., `#605e5c`) |
| `fontSize` | Whole.None | No | Font size in pixels |
| `fontWeight` | SingleLine.Text | No | Font weight (normal, bold, 600, etc.) |
| `controlWidth` | Whole.None | No | Width of the control in pixels |
| `controlHeight` | Whole.None | No | Height of the control in pixels |
| `prefixIcon` | SingleLine.Text | No | Icon name for prefix (see available icons) |
| `suffixIcon` | SingleLine.Text | No | Icon name for suffix (see available icons) |
| `showClearButton` | TwoOptions | No | Show a clear button to empty the text field |
| `validationPattern` | SingleLine.Text | No | Regular expression pattern for validation |
| `errorMessage` | SingleLine.Text | No | Custom error message for validation failures |

## Available Icons

The control includes 22 built-in Unicode icons:

| Icon Name | Symbol | Use Case |
|-----------|--------|----------|
| `Person` | 👤 | User fields, names |
| `Mail` | 📧 | Email addresses |
| `Phone` | 📞 | Phone numbers |
| `Building` | 🏢 | Company, organization |
| `CurrencySymbol` | 💲 | Currency fields |
| `Tag` | 🏷️ | Categories, labels |
| `Calendar` | 📅 | Dates, schedules |
| `Lock` | 🔒 | Security, passwords |
| `Search` | 🔍 | Search fields |
| `Edit` | ✏️ | Editable content |
| `Info` | ℹ️ | Information fields |
| `CheckMark` | ✓ | Validation, success |
| `Clear` | ✕ | Clear, delete |
| `Save` | 💾 | Save operations |
| `Upload` | ⬆️ | File uploads |
| `Settings` | ⚙️ | Configuration |
| `Home` | 🏠 | Home address |
| `Heart` | ❤️ | Favorites, likes |
| `Star` | ⭐ | Ratings, importance |
| `Warning` | ⚠️ | Warnings |
| `Error` | ❌ | Errors |
| `Success` | ✅ | Success states |

## Installation

1. Download the latest solution from [Releases](https://github.com/odenness/oden-prefixsuffix-pcf/releases/tag/v0.1.0-alpha)
2. Import into Power Platform:
   - Navigate to [PowerApps](https://make.powerapps.com)
   - Go to **Solutions** > **Import solution**
   - Upload the `.zip` file
   - Follow the import wizard
3. Add to your form:
   - Edit your model-driven app form
   - Select a text field
   - Go to **Properties** > **Controls**
   - Click **Add control**
   - Select **OdennessDev Prefix/Suffix Text Field**
   - Configure properties as needed

## Development Setup

### Prerequisites
- PowerApps CLI - [Install Guide](https://docs.microsoft.com/powerapps/developer/component-framework/pac-cli)
- Node.js (LTS version) - [Download](https://nodejs.org/)
- Visual Studio Code (recommended) - [Download](https://code.visualstudio.com/)

### Building the Control

```bash
# Clone the repository
git clone https://github.com/odenness/oden-prefixsuffix-pcf.git
cd oden-prefixsuffix-pcf

# Install dependencies
npm install

# Build the control
npm run build

# Test the control locally
npm start
```

### Solution Deployment

```bash
# Navigate to solution folder
cd solution

# Build solution package for Release
msbuild /p:configuration=Release

# Build solution package for Debug (development)
msbuild /p:configuration=Debug

# The generated .zip files will be in bin/Release or bin/Debug folder
# - solution.zip (unmanaged solution)
# - solution_managed.zip (managed solution)
```

### Version Management

GitHub Release: **0.1.0-alpha** | Internal Solution: **1.4.1**

The solution uses internal versioning (1.4.1) for development tracking while maintaining the alpha release status on GitHub for public releases.

## Usage Examples

### Currency Field with Symbol
```yaml
Field Type: Currency
Prefix Text: "$"
Text Value: (bound to currency field)
Placeholder: "0.00"
```
**Result**: `$1,234.56` (only "1,234.56" is saved to database)

### Email Field with Validation
```yaml
Field Type: Email  
Prefix Icon: "Mail"
Placeholder Text: "Enter your email address"
Validation Pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$"
Error Message: "Please enter a valid email address"
```

### Phone Number with Formatting
```yaml
Field Type: Phone
Prefix Text: "+1 ("
Suffix Text: ")"
Placeholder Text: "555-1234"
Validation Pattern: "\d{3}-\d{4}"
Max Length: 8
```
**Result**: `+1 (555) 1234` (only "555-1234" is saved)

## Customization

### Color Schemes

**Professional Light Theme**
```yaml
Background Color: "#faf9f8"
Text Color: "#323130"  
Border Color: "#605e5c"
Font Size: 14
Font Weight: "400"
```

**Dark Theme (Auto-detected)**
```yaml
Background Color: "#2d2d30"
Text Color: "#ffffff"
Border Color: "#3e3e42"
Font Size: 14
Font Weight: "400"
```

**High Contrast Mode (Auto-detected)**
- Enhanced border visibility (2-3px borders)
- Stronger font weights for better readability
- Optimized color contrasts meeting WCAG standards

### Theme Support Features

The control automatically adapts to:
- **System theme preference** (light/dark mode detection)
- **High contrast accessibility** settings
- **Print media** with optimized black & white styling
- **Field-type specific** theme variations for enhanced UX

All field types (text, email, phone, URL, currency, decimal, number) receive consistent theming with type-specific enhancements.

### Validation Patterns

```javascript
// Email validation
"^[^\s@]+@[^\s@]+\.[^\s@]+$"

// Phone number (US format)
"^\(\d{3}\)\s\d{3}-\d{4}$"

// Credit card (basic format)
"^\d{4}\s\d{4}\s\d{4}\s\d{4}$"

// ZIP code (US)
"^\d{5}(-\d{4})?$"

// URL validation
"^https?:\/\/.+\..+"
```

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Microsoft Edge | Chromium-based | Full |
| Google Chrome | 80+ | Full |
| Mozilla Firefox | 75+ | Full |
| Safari | 13+ | Full |

## API Reference

### Methods
- `init()` - Initialize the control
- `updateView()` - Update control properties and data
- `getOutputs()` - Return current value to Power Platform
- `destroy()` - Clean up resources

### Events
- `onInputChange` - Triggered when text value changes
- `onInputFocus` - Triggered when field receives focus
- `onInputBlur` - Triggered when field loses focus
- `onClearClick` - Triggered when clear button is clicked

## Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Maintain backward compatibility

## Support

- **Report Issues**: [GitHub Issues](https://github.com/odenness/oden-prefixsuffix-pcf/issues)
- **Discussions**: [GitHub Discussions](https://github.com/odenness/oden-prefixsuffix-pcf/discussions)
- **Email**: [support@odennessdev.com](mailto:support@odennessdev.com)

## Changelog

### Version 0.1.0-alpha (Current GitHub Release)
- Initial alpha release for public testing
- Multi-field type support (Text, Email, Phone, URL, Currency, Decimal, Whole Number)
- 22 built-in Unicode icons with enhanced rendering
- Dynamics 365 native styling with improved theming
- **Enhanced**: Complete dark/light theme support for all field types
- **Enhanced**: High contrast mode compatibility and accessibility
- **Enhanced**: Field-type specific styling optimizations
- **Enhanced**: Print styles for professional documentation
- **Enhanced**: Browser compatibility with standardized CSS properties
- TypeScript implementation with performance optimizations
- Comprehensive validation and error handling

### Internal Development Versions
- **v1.4.0**: Latest internal build with all enhancements
- **v1.3.x**: Theme system improvements
- **v1.2.x**: Enhanced field type support
- **v1.1.x**: Icon system and validation improvements

[View Full Changelog](https://github.com/odenness/oden-prefixsuffix-pcf/releases/tag/v0.1.0-alpha)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [PowerApps Component Framework](https://docs.microsoft.com/powerapps/developer/component-framework/)
- Design inspired by [Fluent UI Design System](https://developer.microsoft.com/fluentui)
- Developed with TypeScript, Webpack, and ESLint

---

**Made by [OdennessDev](https://github.com/odenness)**

[Download](https://github.com/odenness/oden-prefixsuffix-pcf/releases/tag/v0.1.0-alpha) • [Report Bug](https://github.com/odenness/oden-prefixsuffix-pcf/issues) • [Request Feature](https://github.com/odenness/oden-prefixsuffix-pcf/issues/new)
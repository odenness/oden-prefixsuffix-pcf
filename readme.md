# 🎯 OdennessDev Prefix/Suffix Text Field PCF Control

[![PCF Version](https://img.shields.io/badge/PCF-v1.4.0-blue)](https://github.com/odenness/oden-prefixsuffix-pcf)
[![Power Platform](https://img.shields.io/badge/Power%20Platform-Compatible-green)](https://powerplatform.microsoft.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/odenness/oden-prefixsuffix-pcf.svg)](https://github.com/odenness/oden-prefixsuffix-pcf/releases)

A highly customizable **PowerApps Component Framework (PCF)** control that enhances text input fields with prefix and suffix display capabilities. Perfect for currency fields, phone numbers, email addresses, and any text input that needs visual context without storing formatting in the database.

![PCF Control Preview](https://via.placeholder.com/800x200/2196F3/FFFFFF?text=PCF+Control+Preview+-+Coming+Soon)

## ✨ Key Features

### 🎛️ Core Functionality
- **🏷️ Prefix Text**: Display text/icons before the input field (not saved to database)
- **🏷️ Suffix Text**: Display text/icons after the input field (not saved to database)  
- **💾 Main Text Value**: The actual value that gets saved to the database
- **📝 Multi-Field Support**: Works with Text, Email, Phone, URL, Currency, Decimal, and Whole Number fields
- **🔍 Placeholder Support**: Customizable placeholder text
- **❌ Clear Button**: Optional clear button for easy text removal
- **✅ Input Validation**: Regular expression pattern validation with custom error messages

### 🎨 Visual Customization
- **🎨 Colors**: Customizable background, text, and border colors with Dynamics 365 native styling
- **📝 Typography**: Configurable font size, weight, and Dynamics 365 font stack
- **📐 Dimensions**: Set custom width and height for any layout
- **🔥 Icons**: 22 built-in Unicode icons plus support for custom symbols
- **📱 Responsive Design**: Adapts to different screen sizes and themes
- **🌙 Dark Theme**: Automatic adaptation to light and dark themes

### ♿ Accessibility & UX
- **⌨️ Keyboard Navigation**: Full keyboard support and tab order
- **🔊 Screen Reader Support**: Proper ARIA labels and semantic markup
- **🔍 High Contrast Mode**: Enhanced visibility in high contrast themes
- **🎯 Focus States**: Clear visual feedback for focused states
- **🔒 Disabled/Read-only States**: Proper handling of all control states

## 📋 Supported Field Types

| Field Type | Description | Example Use Case |
|------------|-------------|------------------|
| **Text** | Single line text fields | Names, descriptions |
| **Email** | Email address fields | Contact information |
| **Phone** | Phone number fields | Business/personal phones |
| **URL** | Website URL fields | Company websites |
| **Currency** | Monetary value fields | Prices, salaries |
| **Decimal** | Decimal number fields | Measurements, percentages |
| **Whole Number** | Integer fields | Quantities, counts |

## 🔧 Configuration Properties
### 📊 All Configuration Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `textValue` | SingleLine.Text | ✅ | The main text value that will be saved to the database |
| `prefixText` | SingleLine.Text | ❌ | Text to display before the input field |
| `suffixText` | SingleLine.Text | ❌ | Text to display after the input field |
| `placeholderText` | SingleLine.Text | ❌ | Placeholder text to show in the input field |
| `maxLength` | Whole.None | ❌ | Maximum number of characters allowed |
| `isReadOnly` | TwoOptions | ❌ | Make the text field read-only |
| `backgroundColor` | SingleLine.Text | ❌ | Background color (hex value, e.g., `#f8f9fa`) |
| `textColor` | SingleLine.Text | ❌ | Text color (hex value, e.g., `#323130`) |
| `borderColor` | SingleLine.Text | ❌ | Border color (hex value, e.g., `#605e5c`) |
| `fontSize` | Whole.None | ❌ | Font size in pixels |
| `fontWeight` | SingleLine.Text | ❌ | Font weight (normal, bold, 600, etc.) |
| `controlWidth` | Whole.None | ❌ | Width of the control in pixels |
| `controlHeight` | Whole.None | ❌ | Height of the control in pixels |
| `prefixIcon` | SingleLine.Text | ❌ | Icon name for prefix (see icon list below) |
| `suffixIcon` | SingleLine.Text | ❌ | Icon name for suffix (see icon list below) |
| `showClearButton` | TwoOptions | ❌ | Show a clear button to empty the text field |
| `validationPattern` | SingleLine.Text | ❌ | Regular expression pattern for validation |
| `errorMessage` | SingleLine.Text | ❌ | Custom error message for validation failures |

### 🎯 Available Icons

The control includes 22 built-in Unicode icons that work across all platforms:

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

## 🚀 Quick Start
### 📦 Installation

1. **Download the latest solution** from [Releases](https://github.com/odenness/oden-prefixsuffix-pcf/releases)
2. **Import into Power Platform**:
   - Navigate to [PowerApps](https://make.powerapps.com)
   - Go to **Solutions** > **Import solution**
   - Upload the `.zip` file
   - Follow the import wizard

3. **Add to your form**:
   - Edit your model-driven app form
   - Select a text field
   - Go to **Properties** > **Controls**
   - Click **Add control**
   - Select **OdennessDev Prefix/Suffix Text Field**
   - Configure properties as needed

## 🏗️ Development Setup

### Prerequisites
- **PowerApps CLI** - [Install Guide](https://docs.microsoft.com/powerapps/developer/component-framework/pac-cli)
- **Node.js** (LTS version) - [Download](https://nodejs.org/)
- **Visual Studio Code** (recommended) - [Download](https://code.visualstudio.com/)

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

### 🔄 Solution Deployment

```bash
# Navigate to solution folder
cd solution

# Build solution package
msbuild /p:configuration=Release

# The generated .zip file will be in bin/Release folder
```

## 💡 Usage Examples

### 💰 Currency Field with Symbol
```yaml
Field Type: Currency
Prefix Text: "$"
Text Value: (bound to currency field)
Placeholder: "0.00"
```
**Result**: `$1,234.56` (only "1,234.56" is saved to database)

### 📧 Email Field with Validation
```yaml
Field Type: Email  
Prefix Icon: "Mail"
Placeholder Text: "Enter your email address"
Validation Pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$"
Error Message: "Please enter a valid email address"
```

### 📞 Phone Number with Formatting
```yaml
Field Type: Phone
Prefix Text: "+1 ("
Suffix Text: ")"
Placeholder Text: "555-1234"
Validation Pattern: "\d{3}-\d{4}"
Max Length: 8
```
**Result**: `+1 (555) 1234` (only "555-1234" is saved)

### 🔍 Search Field with Clear Button
```yaml
Field Type: Text
Prefix Icon: "Search"
Show Clear Button: Yes
Placeholder Text: "Search products..."
```

### 🏢 Company Field with Building Icon
```yaml
Field Type: Text
Prefix Icon: "Building"
Suffix Text: "Inc."
Placeholder Text: "Company name"
```

## 🎨 Advanced Customization

### Color Schemes

#### **Professional Theme**
```yaml
Background Color: "#ffffff"
Text Color: "#323130"  
Border Color: "#d3d3d3"
Font Size: 14
Font Weight: "400"
```

#### **Dark Theme**
```yaml
Background Color: "#1f1f1f"
Text Color: "#ffffff"
Border Color: "#404040"
Font Size: 14
Font Weight: "400"
```

#### **Brand Colors**
```yaml
Background Color: "#f8f9fa"
Text Color: "#2196F3"
Border Color: "#2196F3"
Font Size: 16
Font Weight: "500"
```

### 🔒 Validation Patterns

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

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| **Microsoft Edge** | Chromium-based | ✅ Full |
| **Google Chrome** | 80+ | ✅ Full |
| **Mozilla Firefox** | 75+ | ✅ Full |
| **Safari** | 13+ | ✅ Full |

## 📚 API Reference

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

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Maintain backward compatibility

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Resources

### 📞 Get Help
- **🐛 Report Issues**: [GitHub Issues](https://github.com/odenness/oden-prefixsuffix-pcf/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/odenness/oden-prefixsuffix-pcf/discussions)
- **📧 Email**: [support@odennessdev.com](mailto:support@odennessdev.com)

### 📖 Documentation
- **📝 Wiki**: [GitHub Wiki](https://github.com/odenness/oden-prefixsuffix-pcf/wiki)
- **🎥 Video Tutorials**: Coming soon
- **📚 API Docs**: [Power Platform Docs](https://docs.microsoft.com/powerapps/developer/component-framework/)

## 📈 Changelog

### Version 1.4.0 (Latest)
- ✅ **NEW**: Multi-field type support (Text, Email, Phone, URL, Currency, Decimal, Whole Number)
- ✅ **NEW**: 22 built-in Unicode icons
- ✅ **NEW**: Dynamics 365 native styling
- ✅ **NEW**: Enhanced accessibility features
- ✅ **NEW**: Dark theme support
- ✅ **IMPROVED**: Better TypeScript types
- ✅ **IMPROVED**: Performance optimizations
- ✅ **FIXED**: Prefix display issues

### Version 1.0.0
- 🎉 Initial release
- ✅ Core prefix/suffix functionality
- ✅ Basic icon support
- ✅ Validation features
- ✅ Customization options

[View Full Changelog](https://github.com/odenness/oden-prefixsuffix-pcf/releases)

## 🙏 Acknowledgments

- **💡 Inspiration**: Power Platform community feedback
- **🛠️ Built with**: [PowerApps Component Framework](https://docs.microsoft.com/powerapps/developer/component-framework/)
- **🎨 Design**: [Fluent UI Design System](https://developer.microsoft.com/fluentui)
- **🔧 Tools**: TypeScript, Webpack, ESLint

---

<div align="center">

**Made with ❤️ by [OdennessDev](https://github.com/odenness)**

⭐ **Star this repo** if you find it useful! ⭐

[📦 Download](https://github.com/odenness/oden-prefixsuffix-pcf/releases) • [🐛 Report Bug](https://github.com/odenness/oden-prefixsuffix-pcf/issues) • [💡 Request Feature](https://github.com/odenness/oden-prefixsuffix-pcf/issues/new)

</div>


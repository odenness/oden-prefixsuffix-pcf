import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class PrefixSuffixTextField implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    // PCF framework delegate which will be assigned to this object which would be called whenever any update happens.
    private _notifyOutputChanged: () => void;
    
    // Reference to the control container HTMLDivElement
    private _container: HTMLDivElement;
    
    // Reference to the main input element
    private _inputElement: HTMLInputElement;
    
    // Reference to the prefix element
    private _prefixElement: HTMLSpanElement;
    
    // Reference to the suffix element
    private _suffixElement: HTMLSpanElement;
    
    // Reference to the wrapper container
    private _wrapperElement: HTMLDivElement;
    
    // Reference to the clear button
    private _clearButton: HTMLButtonElement;
    
    // Reference to the error message element
    private _errorElement: HTMLDivElement;
    
    // PCF framework context
    private _context: ComponentFramework.Context<IInputs>;
    
    // Current value of the field
    private _value: string;
    
    // Flag to track if the control is disabled
    private _isDisabled: boolean;
    
    // Validation pattern
    private _validationPattern: RegExp | null;

    /**
     * Empty constructor.
     */
    constructor() {
        this._validationPattern = null;
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        // Add control initialization code
        this._notifyOutputChanged = notifyOutputChanged;
        this._container = container;
        this._context = context;
        
        // Create the main wrapper
        this._wrapperElement = document.createElement("div");
        this._wrapperElement.className = "odennessdev-prefix-suffix-wrapper";
        
        // Create the input container
        const inputContainer = document.createElement("div");
        inputContainer.className = "odennessdev-input-container";
        
        // Create prefix element
        this._prefixElement = document.createElement("span");
        this._prefixElement.className = "odennessdev-prefix";
        
        // Create the input element
        this._inputElement = document.createElement("input");
        this._inputElement.type = "text";
        this._inputElement.className = "odennessdev-input";
        this._inputElement.addEventListener("input", this._onInputChange.bind(this));
        this._inputElement.addEventListener("blur", this._onInputBlur.bind(this));
        this._inputElement.addEventListener("focus", this._onInputFocus.bind(this));
        
        // Create suffix element
        this._suffixElement = document.createElement("span");
        this._suffixElement.className = "odennessdev-suffix";
        
        // Create clear button
        this._clearButton = document.createElement("button");
        this._clearButton.className = "odennessdev-clear-button";
        this._clearButton.innerHTML = "✕";
        this._clearButton.title = "Clear";
        this._clearButton.addEventListener("click", this._onClearClick.bind(this));
        this._clearButton.style.display = "none";
        
        // Create error message element
        this._errorElement = document.createElement("div");
        this._errorElement.className = "odennessdev-error-message";
        this._errorElement.style.display = "none";
        
        // Append elements to container
        inputContainer.appendChild(this._prefixElement);
        inputContainer.appendChild(this._inputElement);
        inputContainer.appendChild(this._suffixElement);
        inputContainer.appendChild(this._clearButton);
        
        this._wrapperElement.appendChild(inputContainer);
        this._wrapperElement.appendChild(this._errorElement);
        
        this._container.appendChild(this._wrapperElement);
        
        // Apply initial styles
        this._applyDefaultStyles();
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Add code to update control view
        this._context = context;
        
        // Update the input value (handle both text and numeric types)
        const rawValue = context.parameters.textValue.raw;
        const textValue = rawValue !== null && rawValue !== undefined ? rawValue.toString() : "";
        if (this._value !== textValue) {
            this._value = textValue;
            this._inputElement.value = this._value;
        }
        
        // Update placeholder
        const placeholderText = context.parameters.placeholderText.raw || "";
        this._inputElement.placeholder = placeholderText;
        
        // Update max length
        const maxLength = context.parameters.maxLength.raw;
        if (maxLength && maxLength > 0) {
            this._inputElement.maxLength = maxLength;
        } else {
            this._inputElement.removeAttribute("maxlength");
        }
        
        // Update read-only state
        const isReadOnly = context.parameters.isReadOnly.raw || false;
        this._inputElement.readOnly = isReadOnly;
        this._isDisabled = context.mode.isControlDisabled || isReadOnly;
        this._inputElement.disabled = this._isDisabled;
        
        // Update validation pattern
        const validationPattern = context.parameters.validationPattern.raw;
        if (validationPattern) {
            try {
                this._validationPattern = new RegExp(validationPattern);
            } catch (e) {
                this._validationPattern = null;
                console.warn("Invalid validation pattern:", validationPattern);
            }
        } else {
            this._validationPattern = null;
        }
        
        // Update clear button visibility
        const showClearButton = context.parameters.showClearButton.raw || false;
        if (showClearButton && !this._isDisabled && this._value) {
            this._clearButton.style.display = "inline-block";
        } else {
            this._clearButton.style.display = "none";
        }
        
        // Update icons
        this._updateIcons();
        
        // Apply custom styling
        this._applyCustomStyles();
        
        // Update dimensions
        this._updateDimensions();
        
        // Validate input
        this._validateInput();
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        // Return the value as string, PCF will handle the conversion
        return {
            textValue: this._value || undefined
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
        if (this._inputElement) {
            this._inputElement.removeEventListener("input", this._onInputChange.bind(this));
            this._inputElement.removeEventListener("blur", this._onInputBlur.bind(this));
            this._inputElement.removeEventListener("focus", this._onInputFocus.bind(this));
        }
        
        if (this._clearButton) {
            this._clearButton.removeEventListener("click", this._onClearClick.bind(this));
        }
    }
    
    /**
     * Handle input change events
     */
    private _onInputChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        this._value = target.value;
        
        // Update clear button visibility
        const showClearButton = this._context.parameters.showClearButton.raw || false;
        if (showClearButton && !this._isDisabled && this._value) {
            this._clearButton.style.display = "inline-block";
        } else {
            this._clearButton.style.display = "none";
        }
        
        // Validate input
        this._validateInput();
        
        // Notify PCF framework of the change
        this._notifyOutputChanged();
    }
    
    /**
     * Handle input blur events
     */
    private _onInputBlur(event: Event): void {
        this._wrapperElement.classList.remove("focused");
        this._validateInput();
    }
    
    /**
     * Handle input focus events
     */
    private _onInputFocus(event: Event): void {
        this._wrapperElement.classList.add("focused");
    }
    
    /**
     * Handle clear button click
     */
    private _onClearClick(event: Event): void {
        event.preventDefault();
        this._value = "";
        this._inputElement.value = "";
        this._clearButton.style.display = "none";
        this._validateInput();
        this._notifyOutputChanged();
        this._inputElement.focus();
    }
    
    /**
     * Validate input value
     */
    private _validateInput(): void {
        let isValid = true;
        let errorMessage = "";
        
        if (this._validationPattern && this._value) {
            isValid = this._validationPattern.test(this._value);
            if (!isValid) {
                errorMessage = this._context.parameters.errorMessage.raw || "Invalid input format";
            }
        }
        
        if (isValid) {
            this._wrapperElement.classList.remove("error");
            this._errorElement.style.display = "none";
        } else {
            this._wrapperElement.classList.add("error");
            this._errorElement.textContent = errorMessage;
            this._errorElement.style.display = "block";
        }
    }
    
    /**
     * Update prefix and suffix icons
     */
    private _updateIcons(): void {
        const prefixIcon = this._context.parameters.prefixIcon.raw;
        const suffixIcon = this._context.parameters.suffixIcon.raw;
        const prefixText = this._context.parameters.prefixText.raw || "";
        const suffixText = this._context.parameters.suffixText.raw || "";
        
        // Map common icon names to Unicode symbols
        const iconMap: { [key: string]: string } = {
            "Person": "👤",
            "Mail": "📧",
            "Phone": "📞",
            "Building": "🏢",
            "CurrencySymbol": "💲",
            "Tag": "🏷️",
            "Calendar": "📅",
            "Lock": "🔒",
            "Search": "🔍",
            "Edit": "✏️",
            "Info": "ℹ️",
            "CheckMark": "✓",
            "Clear": "✕",
            "Save": "💾",
            "Upload": "⬆️",
            "Settings": "⚙️",
            "Home": "🏠",
            "Heart": "❤️",
            "Star": "⭐",
            "Warning": "⚠️",
            "Error": "❌",
            "Success": "✅"
        };
        
        // Get icon symbols
        const prefixSymbol = prefixIcon ? (iconMap[prefixIcon] || prefixIcon) : "";
        const suffixSymbol = suffixIcon ? (iconMap[suffixIcon] || suffixIcon) : "";
        
        // Update prefix icon and text
        if (prefixSymbol && prefixText) {
            this._prefixElement.innerHTML = `<span class="odennessdev-icon">${prefixSymbol}</span> ${prefixText}`;
            this._prefixElement.style.display = "inline-block";
        } else if (prefixSymbol) {
            this._prefixElement.innerHTML = `<span class="odennessdev-icon">${prefixSymbol}</span>`;
            this._prefixElement.style.display = "inline-block";
        } else if (prefixText) {
            this._prefixElement.textContent = prefixText;
            this._prefixElement.style.display = "inline-block";
        } else {
            this._prefixElement.innerHTML = "";
            this._prefixElement.style.display = "none";
        }
        
        // Update suffix icon and text
        if (suffixSymbol && suffixText) {
            this._suffixElement.innerHTML = `${suffixText} <span class="odennessdev-icon">${suffixSymbol}</span>`;
            this._suffixElement.style.display = "inline-block";
        } else if (suffixSymbol) {
            this._suffixElement.innerHTML = `<span class="odennessdev-icon">${suffixSymbol}</span>`;
            this._suffixElement.style.display = "inline-block";
        } else if (suffixText) {
            this._suffixElement.textContent = suffixText;
            this._suffixElement.style.display = "inline-block";
        } else {
            this._suffixElement.innerHTML = "";
            this._suffixElement.style.display = "none";
        }
    }
    
    /**
     * Apply custom styles based on parameters
     */
    private _applyCustomStyles(): void {
        const backgroundColor = this._context.parameters.backgroundColor.raw;
        const textColor = this._context.parameters.textColor.raw;
        const borderColor = this._context.parameters.borderColor.raw;
        const fontSize = this._context.parameters.fontSize.raw;
        const fontWeight = this._context.parameters.fontWeight.raw;
        
        if (backgroundColor) {
            this._inputElement.style.backgroundColor = backgroundColor;
        }
        
        if (textColor) {
            this._inputElement.style.color = textColor;
            this._prefixElement.style.color = textColor;
            this._suffixElement.style.color = textColor;
        }
        
        if (borderColor) {
            this._wrapperElement.style.borderColor = borderColor;
        }
        
        if (fontSize && fontSize > 0) {
            this._inputElement.style.fontSize = fontSize + "px";
            this._prefixElement.style.fontSize = fontSize + "px";
            this._suffixElement.style.fontSize = fontSize + "px";
        }
        
        if (fontWeight) {
            this._inputElement.style.fontWeight = fontWeight;
            this._prefixElement.style.fontWeight = fontWeight;
            this._suffixElement.style.fontWeight = fontWeight;
        }
    }
    
    /**
     * Update control dimensions
     */
    private _updateDimensions(): void {
        const controlWidth = this._context.parameters.controlWidth.raw;
        const controlHeight = this._context.parameters.controlHeight.raw;
        
        if (controlWidth && controlWidth > 0) {
            this._wrapperElement.style.width = controlWidth + "px";
        }
        
        if (controlHeight && controlHeight > 0) {
            this._wrapperElement.style.height = controlHeight + "px";
            this._inputElement.style.height = (controlHeight - 2) + "px"; // Account for border
        }
    }
    
    /**
     * Apply default styles to the control
     */
    private _applyDefaultStyles(): void {
        // These styles will be overridden by the CSS file
        this._wrapperElement.style.display = "flex";
        this._wrapperElement.style.flexDirection = "column";
        this._wrapperElement.style.position = "relative";
    }
}
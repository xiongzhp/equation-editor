eqEd.LeftSquareBracket = function(symbolSizeConfig) {
	eqEd.LeftBracket.call(this, symbolSizeConfig); // call super constructor.
	this.className = "eqEd.LeftSquareBracket";

    this.matchingBracketCtor = eqEd.RightSquareBracket;
    this.wholeBracket = new eqEd.LeftSquareWholeBracket("MathJax_Main", this.symbolSizeConfig);
    this.topBracket = null;
    this.middleBrackets = [];
    this.bottomBracket = null;

    this.wholeBracket.parent = this;

    this.domObj = this.buildDomObj();
    this.domObj.append(this.wholeBracket.domObj);

    this.children = [this.wholeBracket];

	// Set up the width calculation
    var width = 0;
    this.properties.push(new Property(this, "width", width, {
        get: function() {
            return width;
        },
        set: function(value) {
            width = value;
        },
        compute: function() {
            var widthVal = 0;
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            if (this.heightRatio <= 1.5) {
                widthVal = 0.288888 * fontHeight;
            } else if (this.heightRatio > 1.5 && this.heightRatio <= 2.4) {
                widthVal = 0.533333 * fontHeight;
            } else if (this.heightRatio > 2.4 && this.heightRatio <= 3) {
                widthVal = 0.577777 * fontHeight;
            } else {
                widthVal = 0.666666 * fontHeight;
            }
            return widthVal;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));

    // Set up the height calculation
    var height = 0;
    this.properties.push(new Property(this, "height", height, {
        get: function() {
            return height;
        },
        set: function(value) {
            height = value;
        },
        compute: function() {
            var heightVal = 0;
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            if (this.heightRatio <= 1.5) {
                heightVal = fontHeight;
            } else if (this.heightRatio > 1.5 && this.heightRatio <= 2.4) {
                heightVal = 2.4 * fontHeight;
            } else if (this.heightRatio > 2.4 && this.heightRatio <= 3) {
                heightVal = 3 * fontHeight;
            } else {
                heightVal = (0.6 + (0.45 * (this.middleBrackets.length - 1))) * fontHeight;
            }
            return heightVal;
        },
        updateDom: function() {
            this.domObj.updateHeight(this.height);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.LeftSquareBracket.prototype = Object.create(eqEd.LeftBracket.prototype);
    eqEd.LeftSquareBracket.prototype.constructor = eqEd.LeftSquareBracket;
    eqEd.LeftSquareBracket.prototype.buildDomObj = function() {
        return new eqEd.EquationDom(this,
            '<div class="bracket leftBracket leftSquareBracket"></div>')
    };
    // This is a callback that happens after this.heightRation gets calculated.
    eqEd.LeftSquareBracket.prototype.updateBracketStructure = function() {
        this.domObj.empty();
        this.wholeBracket = null;
        this.topBracket = null;
        this.middleBrackets = [];
        this.bottomBracket = null;
        this.children = [];
        if (this.heightRatio <= 1.5) {
            this.wholeBracket = new eqEd.LeftSquareWholeBracket("MathJax_Main", this.symbolSizeConfig);
            this.wholeBracket.parent = this;
            this.domObj.append(this.wholeBracket.domObj);
            this.children = [this.wholeBracket];
        } else if (this.heightRatio > 1.5 && this.heightRatio <= 2.4) {
            this.wholeBracket = new eqEd.LeftSquareWholeBracket("MathJax_Size3", this.symbolSizeConfig);
            this.wholeBracket.parent = this;
            this.domObj.append(this.wholeBracket.domObj);
            this.children = [this.wholeBracket];
        } else if (this.heightRatio > 2.4 && this.heightRatio <= 3) {
            this.wholeBracket = new eqEd.LeftSquareWholeBracket("MathJax_Size4", this.symbolSizeConfig);
            this.wholeBracket.parent = this;
            this.domObj.append(this.wholeBracket.domObj);
            this.children = [this.wholeBracket];
        } else {
            var numberOfMiddleBrackets = Math.ceil((this.heightRatio - 0.6)/0.45) + 1;
            this.topBracket = new eqEd.LeftSquareTopBracket(this.symbolSizeConfig);
            this.bottomBracket = new eqEd.LeftSquareBottomBracket(this.symbolSizeConfig);
            this.topBracket.parent = this;
            this.bottomBracket.parent = this;
            this.domObj.append(this.topBracket.domObj);
            this.domObj.append(this.bottomBracket.domObj);
            for (var i = 0; i < numberOfMiddleBrackets; i++) {
                var middleBracket = new eqEd.LeftSquareMiddleBracket(i, this.symbolSizeConfig);
                middleBracket.parent = this;
                this.domObj.append(middleBracket.domObj);
                this.middleBrackets.push(middleBracket);
            }
            this.children = [this.topBracket].concat(this.middleBrackets).concat([this.bottomBracket]);
        }
    }
})();
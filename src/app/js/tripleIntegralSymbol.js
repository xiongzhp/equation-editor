eqEd.TripleIntegralSymbol = function(symbolSizeConfig) {
    eqEd.BigOperatorSymbol.call(this, symbolSizeConfig); // call super constructor.
    this.className = "eqEd.TripleIntegralSymbol";

    this.domObj = this.buildDomObj();

    // Height has already been added to properties in superclass
    // needs removed to be overriden
    for(var i = 0; i < this.properties.length; i++) {
        if (this.properties[i].propName === "height") {
            this.properties.splice(i, 1);
        }
    }

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
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            return 2 * fontHeight;
        },
        updateDom: function() {
            this.domObj.updateHeight(this.height);
        }
    }));

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
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            return 0.86633665265 * this.height;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.TripleIntegralSymbol.prototype = Object.create(eqEd.BigOperatorSymbol.prototype);
    eqEd.TripleIntegralSymbol.prototype.constructor = eqEd.TripleIntegralSymbol;
    eqEd.TripleIntegralSymbol.prototype.buildDomObj = function() {
        var htmlRep = '<div class="bigOperatorSymbol tripleIntegralSymbol" style="width: 76.999008; height: 88.878853;"><svg style="position: absolute; width: 100%; height: 100%;" viewBox="0 0 76.999008 88.878853" preserveAspectRatio="none"><g transform="translate(-242.19997,-417.96288)"><g><path d="m 246.67991,502.0018 c -0.0167,-0.67085 -0.23333,-1.20918 -0.64999,-1.61498 -0.41666,-0.40586 -0.93332,-0.61419 -1.54998,-0.62499 -0.74249,0.0116 -1.30748,0.2383 -1.69498,0.67999 -0.38749,0.44163 -0.58249,1.02829 -0.58499,1.75998 0.0833,1.29578 0.52666,2.3841 1.32998,3.26496 0.80332,0.88078 1.82664,1.33911 3.06997,1.37498 0.94664,-0.025 1.7933,-0.28503 2.53996,-0.77999 0.74665,-0.49503 1.35331,-1.07502 1.81998,-1.73998 0.57998,-0.75835 1.13997,-1.70167 1.67998,-2.82996 0.53998,-1.12835 1.05997,-2.45166 1.55998,-3.96995 0.31248,-0.95335 0.63747,-2.03667 0.97498,-3.24996 0.33748,-1.21334 0.73248,-2.71665 1.18499,-4.50994 1.21577,-4.8797 2.32193,-9.52902 3.31847,-13.94797 0.99651,-4.41895 1.9486,-8.92902 2.85626,-13.5302 0.90762,-4.60116 1.83601,-9.61491 2.78515,-15.04128 0.46414,-2.82161 0.8558,-5.08824 1.17499,-6.79992 0.31913,-1.71161 0.6608,-3.45825 1.02499,-5.23993 0.58663,-2.96575 1.10329,-5.34406 1.54998,-7.13491 0.44663,-1.79076 0.90329,-3.31907 1.36998,-4.58494 0.42329,-1.1666 0.85662,-2.09325 1.29998,-2.77996 0.4433,-0.68661 0.87662,-1.09327 1.29998,-1.21999 0.0733,-0.0333 0.16664,-0.0466 0.28,-0.04 0.20746,0.002 0.43246,0.0384 0.67499,0.11 0.24247,0.0717 0.45746,0.16839 0.64499,0.29 0.13913,0.0984 0.3008,0.23172 0.485,0.39999 0.18413,0.16839 0.27579,0.26172 0.27499,0.28 -0.61336,0.14505 -1.11668,0.38505 -1.50998,0.71999 -0.39336,0.33505 -0.59669,0.85504 -0.60999,1.55998 0.0166,0.67087 0.2333,1.2092 0.64999,1.61498 0.41663,0.40587 0.93329,0.61421 1.54998,0.62499 0.75996,-0.0108 1.32995,-0.23912 1.70998,-0.68499 0.37996,-0.44578 0.56996,-1.0441 0.56999,-1.79498 -0.0884,-1.2941 -0.53169,-2.37575 -1.32998,-3.24495 -0.79836,-0.86911 -1.90168,-1.32077 -3.30996,-1.35499 -0.48169,0.008 -0.93835,0.10256 -1.36998,0.285 -0.43169,0.18255 -0.82835,0.40755 -1.18998,0.67499 -1.70834,1.37503 -3.09166,3.575 -4.14995,6.59992 -1.05835,3.025 -1.98167,6.18496 -2.76996,9.47987 -1.22915,4.92837 -2.34419,9.6004 -3.34515,14.01612 -1.00099,4.41576 -1.95308,8.92484 -2.85626,13.52723 -0.90321,4.60242 -1.8227,9.64778 -2.75848,15.1361 -0.56834,3.30495 -1.07167,6.13491 -1.50998,8.48989 -0.43834,2.35496 -0.88167,4.56493 -1.32998,6.62992 -0.73334,3.4591 -1.43666,6.16073 -2.10998,8.10489 -0.67333,1.94412 -1.35665,3.25576 -2.04997,3.93495 -0.21,0.19747 -0.39,0.33247 -0.53999,0.405 -0.15001,0.0725 -0.33,0.0975 -0.53999,0.075 -0.34001,0.002 -0.66,-0.0617 -0.95999,-0.19 -0.3,-0.12836 -0.58,-0.33169 -0.83999,-0.60999 -0.08,-0.0625 -0.14,-0.11753 -0.18,-0.165 -0.04,-0.0475 -0.06,-0.0725 -0.06,-0.075 0.61332,-0.14503 1.11665,-0.38502 1.50998,-0.71999 0.39332,-0.33503 0.59665,-0.85502 0.60999,-1.55998 z m 21.11973,0 c -0.0167,-0.67085 -0.23336,-1.20918 -0.64999,-1.61498 -0.41669,-0.40586 -0.93335,-0.61419 -1.54998,-0.62499 -0.74252,0.0116 -1.30751,0.2383 -1.69498,0.67999 -0.38752,0.44163 -0.58251,1.02829 -0.58499,1.75998 0.0833,1.29578 0.52664,2.3841 1.32998,3.26496 0.8033,0.88078 1.82662,1.33911 3.06996,1.37498 0.94663,-0.025 1.79328,-0.28503 2.53997,-0.77999 0.74663,-0.49503 1.35328,-1.07502 1.81998,-1.73998 0.57996,-0.75835 1.13995,-1.70167 1.67998,-2.82996 0.53995,-1.12835 1.05995,-2.45166 1.55998,-3.96995 0.31246,-0.95335 0.63745,-2.03667 0.97498,-3.24996 0.33746,-1.21334 0.73246,-2.71665 1.18499,-4.50994 1.21575,-4.8797 2.3219,-9.52902 3.31847,-13.94797 0.99649,-4.41895 1.94858,-8.92902 2.85626,-13.5302 0.9076,-4.60116 1.83598,-9.61491 2.78515,-15.04128 0.46412,-2.82161 0.85578,-5.08824 1.17499,-6.79992 0.31911,-1.71161 0.66077,-3.45825 1.02498,-5.23993 0.58661,-2.96575 1.10327,-5.34406 1.54998,-7.13491 0.44661,-1.79076 0.90327,-3.31907 1.36999,-4.58494 0.42327,-1.1666 0.8566,-2.09325 1.29998,-2.77996 0.44327,-0.68661 0.8766,-1.09327 1.29998,-1.21999 0.0733,-0.0333 0.16661,-0.0466 0.28,-0.04 0.20744,0.002 0.43244,0.0384 0.67499,0.11 0.24244,0.0717 0.45744,0.16839 0.64499,0.29 0.13911,0.0984 0.30078,0.23172 0.485,0.39999 0.1841,0.16839 0.27577,0.26172 0.27499,0.28 -0.61338,0.14505 -1.11671,0.38505 -1.50998,0.71999 -0.39338,0.33505 -0.59671,0.85504 -0.60999,1.55998 0.0166,0.67087 0.23328,1.2092 0.64999,1.61498 0.41661,0.40587 0.93327,0.61421 1.54998,0.62499 0.75993,-0.0108 1.32993,-0.23912 1.70998,-0.68499 0.37994,-0.44578 0.56993,-1.0441 0.56999,-1.79498 -0.0884,-1.2941 -0.53172,-2.37575 -1.32998,-3.24495 -0.79838,-0.86911 -1.9017,-1.32077 -3.30996,-1.35499 -0.48171,0.008 -0.93837,0.10256 -1.36998,0.285 -0.43172,0.18255 -0.82838,0.40755 -1.18999,0.67499 -1.70836,1.37503 -3.09167,3.575 -4.14994,6.59992 -1.05837,3.025 -1.98169,6.18496 -2.76997,9.47987 -1.22916,4.92837 -2.34421,9.6004 -3.34514,14.01612 -1.00101,4.41576 -1.9531,8.92484 -2.85626,13.52723 -0.90323,4.60242 -1.82273,9.64778 -2.75848,15.1361 -0.56836,3.30495 -1.07169,6.13491 -1.50998,8.48989 -0.43836,2.35496 -0.88169,4.56493 -1.32998,6.62992 -0.73336,3.4591 -1.43668,6.16073 -2.10998,8.10489 -0.67335,1.94412 -1.35668,3.25576 -2.04997,3.93495 -0.21003,0.19747 -0.39003,0.33247 -0.53999,0.405 -0.15003,0.0725 -0.33003,0.0975 -0.54,0.075 -0.34002,0.002 -0.66002,-0.0617 -0.95998,-0.19 -0.30003,-0.12836 -0.58002,-0.33169 -0.83999,-0.60999 -0.08,-0.0625 -0.14003,-0.11753 -0.18,-0.165 -0.04,-0.0475 -0.06,-0.0725 -0.06,-0.075 0.6133,-0.14503 1.11662,-0.38502 1.50998,-0.71999 0.3933,-0.33503 0.59663,-0.85502 0.60999,-1.55998 z m 20.31974,0 c -0.0167,-0.67085 -0.23338,-1.20918 -0.64999,-1.61498 -0.41671,-0.40586 -0.93337,-0.61419 -1.54998,-0.62499 -0.74254,0.0116 -1.30753,0.2383 -1.69498,0.67999 -0.38754,0.44163 -0.58254,1.02829 -0.58499,1.75998 0.0833,1.29578 0.52661,2.3841 1.32998,3.26496 0.80328,0.88078 1.8266,1.33911 3.06996,1.37498 0.94661,-0.025 1.79326,-0.28503 2.53997,-0.77999 0.7466,-0.49503 1.35326,-1.07502 1.81998,-1.73998 0.57993,-0.75835 1.13993,-1.70167 1.67997,-2.82996 0.53994,-1.12835 1.05994,-2.45166 1.55998,-3.96995 0.31244,-0.95335 0.63744,-2.03667 0.97499,-3.24996 0.33744,-1.21334 0.73243,-2.71665 1.18499,-4.50994 1.21572,-4.8797 2.32188,-9.52902 3.31847,-13.94797 0.99647,-4.41895 1.94855,-8.92902 2.85626,-13.5302 0.90758,-4.60116 1.83596,-9.61491 2.78515,-15.04128 0.46409,-2.82161 0.85575,-5.08824 1.17499,-6.79992 0.31909,-1.71161 0.66075,-3.45825 1.02498,-5.23993 0.58659,-2.96575 1.10325,-5.34406 1.54998,-7.13491 0.44659,-1.79076 0.90325,-3.31907 1.36998,-4.58494 0.42326,-1.1666 0.85659,-2.09325 1.29999,-2.77996 0.44325,-0.68661 0.87658,-1.09327 1.29998,-1.21999 0.0733,-0.0333 0.16659,-0.0466 0.28,-0.04 0.20742,0.002 0.43242,0.0384 0.67499,0.11 0.24242,0.0717 0.45742,0.16839 0.64499,0.29 0.13909,0.0984 0.30075,0.23172 0.48499,0.39999 0.18409,0.16839 0.27576,0.26172 0.275,0.28 -0.6134,0.14505 -1.11673,0.38505 -1.50998,0.71999 -0.3934,0.33505 -0.59673,0.85504 -0.60999,1.55998 0.0166,0.67087 0.23325,1.2092 0.64999,1.61498 0.41659,0.40587 0.93324,0.61421 1.54998,0.62499 0.75991,-0.0108 1.3299,-0.23912 1.70998,-0.68499 0.37991,-0.44578 0.56991,-1.0441 0.56999,-1.79498 -0.0884,-1.2941 -0.53174,-2.37575 -1.32998,-3.24495 -0.7984,-0.86911 -1.90172,-1.32077 -3.30996,-1.35499 -0.48173,0.008 -0.93839,0.10256 -1.36998,0.285 -0.43174,0.18255 -0.8284,0.40755 -1.18999,0.67499 -1.70838,1.37503 -3.09169,3.575 -4.14994,6.59992 -1.05839,3.025 -1.98171,6.18496 -2.76997,9.47987 -1.22918,4.92837 -2.34423,9.6004 -3.34514,14.01612 -1.00104,4.41576 -1.95312,8.92484 -2.85626,13.52723 -0.90326,4.60242 -1.82275,9.64778 -2.75848,15.1361 -0.56838,3.30495 -1.07171,6.13491 -1.50998,8.48989 -0.43838,2.35496 -0.88171,4.56493 -1.32999,6.62992 -0.73337,3.4591 -1.4367,6.16073 -2.10997,8.10489 -0.67337,1.94412 -1.3567,3.25576 -2.04997,3.93495 -0.21005,0.19747 -0.39005,0.33247 -0.54,0.405 -0.15004,0.0725 -0.33004,0.0975 -0.53999,0.075 -0.34004,0.002 -0.66004,-0.0617 -0.95999,-0.19 -0.30004,-0.12836 -0.58004,-0.33169 -0.83999,-0.60999 -0.08,-0.0625 -0.14004,-0.11753 -0.17999,-0.165 -0.0401,-0.0475 -0.06,-0.0725 -0.06,-0.075 0.61328,-0.14503 1.1166,-0.38502 1.50998,-0.71999 0.39328,-0.33503 0.59661,-0.85502 0.60999,-1.55998 z" /></g></g></svg></div>';
        return new eqEd.EquationDom(this, htmlRep);
    };
})();
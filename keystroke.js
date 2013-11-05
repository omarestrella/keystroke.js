(function (global) {
    var whitespace = {
        TAB: 9,
        ENTER: 13,
        SPACE: 32
    };

    var capAlpha = {
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90
    };

    var lowAlpha = {
        A: 97,
        B: 98,
        C: 99,
        D: 100,
        E: 101,
        F: 102,
        G: 103,
        H: 104,
        I: 105,
        J: 106,
        K: 107,
        L: 108,
        M: 109,
        N: 110,
        O: 111,
        P: 112,
        Q: 113,
        R: 114,
        S: 115,
        T: 116,
        U: 117,
        V: 118,
        W: 119,
        X: 120,
        Y: 121,
        Z: 122
    };

    var numbers = {
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57
    };

    var navigation = {
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40
    };

    function _isNumber (keyCode) {
        return keyCode >= numbers[0] && keyCode <= numbers[9];
    }

    function _isAlphabet (keyCode) {
        return (keyCode >= capAlpha.A && keyCode <= capAlpha.Z) || (keyCode >= lowAlpha.A && keyCode <= lowAlpha.Z);
    }

    function _isNavigation(keyCode) {
        return keyCode >= navigation.LEFT_ARROW && keyCode <= navigation.DOWN_ARROW;
    }

    function _isWhitespace (keyCode) {
        return keyCode === whitespace.SPACE || keyCode === whitespace.ENTER || keyCode === whitespace.TAB;
    }

    if(!global.keystroke) {
        global.keystroke = {
            isNumber: _isNumber,
            isAlphabet: _isAlphabet,
            isNavigation: _isNavigation,
            isWhitespace: _isWhitespace
        }
    }
}(window));

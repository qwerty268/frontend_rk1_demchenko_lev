function romanToInteger(roman) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0; 
    let prevValue = 0; 
    // Проходим по римской записи справа налево
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanMap[roman[i]]; // Получаем значение текущей римской цифры

        // Если стоит слева, то уменьшаем. Справа - увеличиваем
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        prevValue = currentValue; 
    }

    return total; 
}


Object.defineProperty(Number.prototype, 'I', {
    get: function () {
        return Array.from({ length: this + romanToInteger('I') }, (_, i) => i);
    }
});

Object.defineProperty(Number.prototype, 'III', {
    get: function () {
        return Array.from({ length: this + romanToInteger('III') }, (_, i) => i);
    }
});

Object.defineProperty(Number.prototype, 'IV', {
    get: function () {
        return Array.from({ length: this + romanToInteger('IV') }, (_, i) => i);
    }
});

Object.defineProperty(Number.prototype, 'X', {
    get: function () {
        return Array.from({ length: this + romanToInteger('X') }, (_, i) => i);
    }
});


Object.defineProperty(Number.prototype, 'V', {
    get: function () {
        return Array.from({ length: this + romanToInteger('V') }, (_, i) => i);
    }
});

Object.defineProperty(Number.prototype, 'VII', {
    get: function () {
        return Array.from({ length: this + romanToInteger('VII') }, (_, i) => i);
    }
});

console.log(0..V);   // [0, 1, 2, 3, 4]
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6]

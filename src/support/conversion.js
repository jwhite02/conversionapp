export let conversion = (num, stuResponse, inputMeasure, targetMeasure) => {
    let caseVal = inputMeasure + 'To' + targetMeasure;
    num = parseFloat(num);
    num = num.toFixed(2);
    stuResponse = parseFloat(stuResponse);
    if (isNaN(stuResponse)) {
        console.log("this is not a number")
        return "Invalid"
    }
    else {
        let solu;
        switch (caseVal) {
            case 'cupsTocubicfeet':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.008355;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cupsTocubicinches':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 14.4375;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cupsTogallons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0625;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cupsToliters':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.2366;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cupsTotablespoons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 16;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicfeetTocups':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 119.6883;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicfeetTocubicinches':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 1728;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicfeetTogallons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 7.4805;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicfeetToliters':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 28.3168;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicfeetToTablspoons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 1915.013;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicinchesTocups':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0693;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicinchesTocubicfeet':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0005787;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicinchesTogallons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.004329;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicinchesToliters':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.01640;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'cubicinchesTotablespoons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 1.1082;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'gallonsTocups':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 16;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'gallonsTocubicfeet':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.1337;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'gallonsTocubicinches':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 231;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'gallonsToliters':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 3.7854;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'gallonsTotablespoons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 256;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'litersTocups':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 4.2268;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'litersTocubicfeet':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0353;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'litersTocubicinches':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 61.0237;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'litersTogallons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.2642;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'litersTotablespoons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 67.628;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'tablespoonsTocups':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0625;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'tablespoonsTocubicfeet':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0005222;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'tablespoonsTocubicinches':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.9023;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'tablespoonsTogallons':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.003906;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'tablespoonsToliters':
                if (negNum(num)) { return "Number is Invalid" }
                solu = num * 0.0148;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'celsiusTofahrenheit':
                solu = (num * (9 / 5)) + 32;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'celsiusTokelvin':
                solu = num * 273.15;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'celsiusTorankine':
                solu = (num + 273.15) * 9 / 5;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'fahrenheitTocelsius':
                solu = (num - 32) * 5 / 9;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'fahrenheitTokelvin':
                solu = (num + 459.67) * 5 / 9;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'fahrenheitTorankine':
                solu = num + 459.67;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'kelvinTocelsius':
                solu = num - 273.15;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'kelvinTofahrenheit':
                solu = (9 / 5 * (num - 273)) + 32;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'kelvinTorankine':
                solu = num * 9 / 5;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'rankineTocelsius':
                solu = (num - 491.67) * 5 / 9;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'rankineTokelvin':
                solu = num * 5 / 9;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            case 'rankineTofahrenheit':
                solu = num - 459.67;
                solu = solu.toFixed(2);
                stuResponse = stuResponse.toFixed(2);
                return stuResult(solu, stuResponse);
                break;
            default:
                return "Case Not Found"
                break;
        }

    }
}

let negNum = (num) => {
    if (num < 0) {
        return true
    }
}

let stuResult = (calculatedVal, studentResponse) => {
    if (calculatedVal === studentResponse) {
        return "Correct"
    }
    else { return "Incorrect" }
}



console.log(conversion(32, 17.78, 'rankine', 'kelvin'))
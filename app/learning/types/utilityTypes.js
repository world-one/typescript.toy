"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
//Partial
//Required
var peopleInfo = {
    id: 1,
    name: 'se-il',
    age: 19
};
var peopleInfoPartial = {
    id: 1,
    name: 'se-il'
};
var peopleInfoRequired = {
    id: 1,
    name: 'se-il',
    age: 19
};
//Readonly
var peoples = [
    {
        id: 1,
        name: 'se-il',
        age: 18
    }
];
//Record
var companies = [
    {
        name: 'google',
        description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.'
    }
];
var CompanyNames;
(function (CompanyNames) {
    CompanyNames["GOOGLE"] = "google";
    CompanyNames["FACEBOOK"] = "facebook";
    CompanyNames["APPLE"] = "apple";
})(CompanyNames || (CompanyNames = {}));
var companyInfo = {
    'google': companies[0].description
};
var companyInfo2 = {
    'google': companies[0].description,
    'facebook': companies[0].description,
    'apple': companies[0].description
};
var companyInfo3 = {
    'google': companies[0].description,
    'facebook': companies[0].description,
    'apple': companies[0].description
};
var fruitsNames = {
    name: 'watermelon'
};
var fruitsInfoWithoutId = {
    name: 'watermelon',
    description: 'many water'
};
var excludeFruitsName = 'apple';
var extractFruitsName = 'watermelon';
// ??????
var fruitsName1 = null;
var fruitsName2 = undefined;
//Parameters
function findFruitsByName(_a) {
    var string = _a.name;
    return 'watermelon';
}
var fruitsNames2 = [{
        name: 'watermelon'
    }];
var what = [[['hi', 'hello']]];
var returnName = 'string';
//InstanceType
var InstanceClass = /** @class */ (function () {
    function InstanceClass() {
        this.name = 'world-one';
        this.age = '18';
    }
    return InstanceClass;
}());
var what2 = new InstanceClass();
//ThisParameterType
function toHex() {
    return this.toString(16);
}
function numberToString(n) {
    return toHex.apply(n);
}
//OmitThisParameter
var fiveToHex = toHex.bind(5);
function makeObject(desc) {
    var data = desc.data || {};
    var methods = desc.methods || {};
    return __assign(__assign({}, data), methods);
}
var obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy: function (dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        }
    }
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
//String 변환 해주는 것들
//Uppercase<StringType>
//Lowercase<StringType>
//Capitalize<StringType>
//Uncapitalize<StringType>

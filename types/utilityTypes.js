"use strict";
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
var what = ['hi'];
//ReturnType
//InstanceType
//ThisParameterType
//OmitThisParameter
//ThisType
//Uppercase
//Lowercase
//Capitalize
//Uncapitalize

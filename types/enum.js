"use strict";
exports.__esModule = true;
var CompanyNames;
(function (CompanyNames) {
    CompanyNames["GOOGLE"] = "google";
    CompanyNames["FACEBOOK"] = "facebook";
    CompanyNames["APPLE"] = "apple";
})(CompanyNames || (CompanyNames = {}));
var IndexEnum;
(function (IndexEnum) {
    IndexEnum[IndexEnum["A"] = 0] = "A";
    IndexEnum[IndexEnum["B"] = 1] = "B";
    IndexEnum[IndexEnum["C"] = 2] = "C";
    IndexEnum[IndexEnum["D"] = 3] = "D";
})(IndexEnum || (IndexEnum = {}));
var IndexEnumAddValue1;
(function (IndexEnumAddValue1) {
    IndexEnumAddValue1[IndexEnumAddValue1["A"] = 2] = "A";
    IndexEnumAddValue1[IndexEnumAddValue1["B"] = 3] = "B";
    IndexEnumAddValue1[IndexEnumAddValue1["C"] = 4] = "C";
    IndexEnumAddValue1[IndexEnumAddValue1["D"] = 5] = "D";
})(IndexEnumAddValue1 || (IndexEnumAddValue1 = {}));
var IndexEnumAddValue2;
(function (IndexEnumAddValue2) {
    IndexEnumAddValue2[IndexEnumAddValue2["A"] = 0] = "A";
    IndexEnumAddValue2[IndexEnumAddValue2["B"] = 1] = "B";
    IndexEnumAddValue2[IndexEnumAddValue2["C"] = 1] = "C";
    IndexEnumAddValue2[IndexEnumAddValue2["D"] = 2] = "D";
})(IndexEnumAddValue2 || (IndexEnumAddValue2 = {}));
var what = IndexEnumAddValue2[1];
console.log(what);
var IndexEnumAddValue3;
(function (IndexEnumAddValue3) {
    IndexEnumAddValue3[IndexEnumAddValue3["A"] = 0] = "A";
    IndexEnumAddValue3[IndexEnumAddValue3["B"] = 1] = "B";
    IndexEnumAddValue3[IndexEnumAddValue3["C"] = 12] = "C";
    IndexEnumAddValue3[IndexEnumAddValue3["D"] = 13] = "D";
})(IndexEnumAddValue3 || (IndexEnumAddValue3 = {}));

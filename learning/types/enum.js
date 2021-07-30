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
// enum tree shaking
var selectedName = CompanyNames.APPLE;
var selectedName2 = "kakao" /* KAKAO */;
var selectedName3 = "naver" /* NAVER */;
var selectedName4 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." /* LONG_NAME */;
var COMPANY_NAMES = {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    APPLE: 'apple'
};
var selectedName5 = COMPANY_NAMES.FACEBOOK;
var selectedName6 = CompanyNames.APPLE;

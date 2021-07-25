export {};

enum CompanyNames {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

enum IndexEnum{
  A,
  B,
  C,
  D
}

enum IndexEnumAddValue1{
  A = 2,
  B,
  C,
  D
}

enum IndexEnumAddValue2{
  A,
  B,
  C = 1,
  D
}

const what = IndexEnumAddValue2[1];
console.log(what);

enum IndexEnumAddValue3{
  A,
  B,
  C = 12,
  D
}
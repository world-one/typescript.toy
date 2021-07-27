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

// enum tree shaking
const selectedName = CompanyNames.APPLE;

const enum CompanyNames2 {
  NAVER = 'naver',
  KAKAO = 'kakao',
  LONG_NAME = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
}

const selectedName2 = CompanyNames2.KAKAO;
const selectedName3 = CompanyNames2.NAVER;
const selectedName4 = CompanyNames2.LONG_NAME;

const COMPANY_NAMES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  APPLE: 'apple',
}
type COMPANY_NAMES = typeof COMPANY_NAMES[keyof typeof COMPANY_NAMES];

const selectedName5: COMPANY_NAMES = COMPANY_NAMES.FACEBOOK;
const selectedName6: CompanyNames = CompanyNames.APPLE;
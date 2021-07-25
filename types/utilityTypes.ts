export {};

interface PeopleTypes {
  id: number;
  name?: string;
  age: number
}

//Partial
//Required
const peopleInfo: PeopleTypes = {
  id: 1,
  name: 'se-il',
  age: 19,
}

const peopleInfoPartial: Partial<PeopleTypes> = {
  id: 1,
  name: 'se-il',
}

const peopleInfoRequired: Required<PeopleTypes> = {
  id: 1,
  name: 'se-il',
  age: 19,
}

//Readonly
const peoples: Readonly<PeopleTypes[]> = [
  {
    id: 1,
    name: 'se-il',
    age: 18,
  }
];


//Record
const companies: Record<string, string>[] = [
  {
    name: 'google',
    description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.',
  }
];

type companyNames = 'google' | 'facebook' | 'apple';

enum CompanyNames {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

const companyInfo: {[key: string]: string} = {
  'google': companies[0].description
};

const companyInfo2: Record<companyNames, string> = {
  'google': companies[0].description,
  'facebook': companies[0].description,
  'apple': companies[0].description,
};

const companyInfo3: Record<CompanyNames, string> = {
  'google': companies[0].description,
  'facebook': companies[0].description,
  'apple': companies[0].description,
};

//Pick
//Omit
//Exclude
//Extract
//NonNullable
//Parameters
//ConstructorParameters
//ReturnType
//InstanceType
//ThisParameterType
//OmitThisParameter
//ThisType
//Uppercase
//Lowercase
//Capitalize
//Uncapitalize
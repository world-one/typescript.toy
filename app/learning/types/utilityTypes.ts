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
interface FruitsInfoTypes {
  id: number;
  name: string;
  description: string;
}

type PickFruitsInfoTypes = Pick<FruitsInfoTypes, 'name'>;
const fruitsNames: PickFruitsInfoTypes = {
  name: 'watermelon',
}

//Omit
type OmitFruitsInfoTypes = Omit<FruitsInfoTypes, 'id'>;
const fruitsInfoWithoutId: OmitFruitsInfoTypes = {
  name: 'watermelon',
  description: 'many water',
}

//Exclude
type FruitsNameTypes = 'orange' | 'apple' | 'banana' | 'watermelon' | 'dog';
type ExcludeFruitsNameTypes = Exclude<FruitsNameTypes, 'dog'>;
const excludeFruitsName: ExcludeFruitsNameTypes = 'apple';

//Extract
type ExtractFruitsNameTypes = Extract<ExcludeFruitsNameTypes, 'watermelon' | 'strawberry'>;
const extractFruitsName: ExtractFruitsNameTypes = 'watermelon';

//NonNullable
type FruitNameTypes = NonNullable<string | null | undefined>;
// ??????
const fruitsName1: FruitNameTypes = null;
const fruitsName2: FruitNameTypes = undefined;

//Parameters
function findFruitsByName({ name }: { name: string }): string {
  return 'watermelon';
}

type FindFruitsByNameParameterTypes = Parameters<typeof findFruitsByName>
const fruitsNames2: FindFruitsByNameParameterTypes = [{
  name: 'watermelon',
}]

//ConstructorParameters
interface MessageTypes {
  new(message: [string[]]): {
    name: string;
  } 
}
type ConstructorParametersTypes = ConstructorParameters<MessageTypes>;
const what: ConstructorParametersTypes = [[['hi','hello']]]

//ReturnType
type ReturnNameTypes = ReturnType<() => string>;
type ReturnNameTypes2 = ReturnType<typeof findFruitsByName>;
const returnName: ReturnNameTypes2 = 'string';

//InstanceType
class InstanceClass {
  name = 'world-one';
  age = '18';
}
type InstanceTypes = InstanceType<typeof InstanceClass>;
type InstanceTypes2 = InstanceType<new (...args: any) => string>;
const what2: InstanceClass = new InstanceClass();

//ThisParameterType
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>): string {
  return toHex.apply(n);
}

//OmitThisParameter
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

//ThisType
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

//String 변환 해주는 것들
//Uppercase<StringType>
//Lowercase<StringType>
//Capitalize<StringType>
//Uncapitalize<StringType>
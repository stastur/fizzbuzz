type Tuple<N, T extends any[] = []> = T extends { length: N }
  ? T
  : Tuple<N, [...T, any]>;

type Evaluate<T extends any[]> = T["length"];

type Add<N1, N2> = Evaluate<[...Tuple<N1>, ...Tuple<N2>]>;

type Subtract<N1, N2> = Tuple<N1> extends [...infer R, ...Tuple<N2>]
  ? Evaluate<R>
  : never;

type Multiply<N1, N2, R = 0> = N1 extends 0
  ? R
  : Multiply<Subtract<N1, 1>, N2, Add<R, N2>>;

type Divide<N1, N2, R = 0> = Subtract<N1, N2> extends never
  ? R
  : Divide<Subtract<N1, N2>, N2, Add<R, 1>>;

type IsDivisible<N1, N2> = N1 extends Multiply<Divide<N1, N2>, N2>
  ? true
  : false;

type FizzBuzz<N> = IsDivisible<N, 15> extends true
  ? "FizzBuzz"
  : IsDivisible<N, 5> extends true
  ? "Buzz"
  : IsDivisible<N, 3> extends true
  ? "Fizz"
  : N;

type Expect<T, E extends T> = never;

type Test1 = Expect<FizzBuzz<1>, 1>;
type Test2 = Expect<FizzBuzz<2>, 2>;
type Test3 = Expect<FizzBuzz<3>, "Fizz">;
type Test4 = Expect<FizzBuzz<4>, 4>;
type Test5 = Expect<FizzBuzz<5>, "Buzz">;
type Test6 = Expect<FizzBuzz<6>, "Fizz">;
type Test7 = Expect<FizzBuzz<7>, 7>;
type Test8 = Expect<FizzBuzz<8>, 8>;
type Test9 = Expect<FizzBuzz<9>, "Fizz">;
type Test10 = Expect<FizzBuzz<10>, "Buzz">;
type Test11 = Expect<FizzBuzz<11>, 11>;
type Test12 = Expect<FizzBuzz<12>, "Fizz">;
type Test13 = Expect<FizzBuzz<13>, 13>;
type Test14 = Expect<FizzBuzz<14>, 14>;
type Test15 = Expect<FizzBuzz<15>, "FizzBuzz">;
type Test16 = Expect<FizzBuzz<16>, 16>;
type Test17 = Expect<FizzBuzz<17>, 17>;
type Test18 = Expect<FizzBuzz<18>, "Fizz">;
type Test19 = Expect<FizzBuzz<19>, 19>;
type Test20 = Expect<FizzBuzz<20>, "Buzz">;
type Test21 = Expect<FizzBuzz<21>, "Fizz">;
type Test22 = Expect<FizzBuzz<22>, 22>;
type Test23 = Expect<FizzBuzz<23>, 23>;
type Test24 = Expect<FizzBuzz<24>, "Fizz">;
type Test25 = Expect<FizzBuzz<25>, "Buzz">;
type Test26 = Expect<FizzBuzz<26>, 26>;
type Test27 = Expect<FizzBuzz<27>, "Fizz">;
type Test28 = Expect<FizzBuzz<28>, 28>;
type Test29 = Expect<FizzBuzz<29>, 29>;
type Test30 = Expect<FizzBuzz<30>, "FizzBuzz">;
type Test31 = Expect<FizzBuzz<31>, 31>;
type Test32 = Expect<FizzBuzz<32>, 32>;
type Test33 = Expect<FizzBuzz<33>, "Fizz">;
type Test34 = Expect<FizzBuzz<34>, 34>;
type Test35 = Expect<FizzBuzz<35>, "Buzz">;
type Test36 = Expect<FizzBuzz<36>, "Fizz">;
type Test37 = Expect<FizzBuzz<37>, 37>;
type Test38 = Expect<FizzBuzz<38>, 38>;
type Test39 = Expect<FizzBuzz<39>, "Fizz">;
type Test40 = Expect<FizzBuzz<40>, "Buzz">;
type Test41 = Expect<FizzBuzz<41>, 41>;

//41 is a maximum for this implementation

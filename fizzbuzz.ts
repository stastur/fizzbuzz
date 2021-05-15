// Test utilities
type Equal<L, R> = L extends R ? true : false;
type Expect<T extends true> = T;

// Utilities
type Length<T extends any[]> = T["length"];
type Tuple<N, T extends any[] = []> = Length<T> extends N
  ? T
  : Tuple<N, [...T, any]>;

// Binary operations
type Add<N1, N2> = Length<[...Tuple<N1>, ...Tuple<N2>]>;

type Sub<N1, N2> = Tuple<N1> extends [...infer R, ...Tuple<N2>]
  ? Length<R>
  : never;

type Multiply<N1, N2, R = 0> = N1 extends 0
  ? R
  : Multiply<Decrement<N1>, N2, Add<R, N2>>;

type Divide<N1, N2, R = 0> = Sub<N1, N2> extends never
  ? R
  : Divide<Sub<N1, N2>, N2, Increment<R>>;

type IsDivisibleBy<N1, N2> = N1 extends Multiply<Divide<N1, N2>, N2>
  ? true
  : false;

// Unary operations
type Increment<N> = Add<N, 1>;
type Decrement<N> = Sub<N, 1>;

// FizzBuzz
type FizzBuzz<N> = IsDivisibleBy<N, 15> extends true
  ? "FizzBuzz"
  : IsDivisibleBy<N, 5> extends true
  ? "Buzz"
  : IsDivisibleBy<N, 3> extends true
  ? "Fizz"
  : N;

type Tests = [
  Expect<Equal<FizzBuzz<15>, "FizzBuzz">>,
  Expect<Equal<FizzBuzz<5>, "Buzz">>,
  Expect<Equal<FizzBuzz<3>, "Fizz">>,
  Expect<Equal<FizzBuzz<27>, "Fizz">>,
  Expect<Equal<FizzBuzz<30>, "FizzBuzz">>,
  Expect<Equal<FizzBuzz<40>, "Buzz">>
];

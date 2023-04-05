let age: number;
age = 50;
let namee: string;
namee = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;

function calc(
  a: number,
  b: number,
  callback: (num: number, num1: number) => number
): void {
  callback(a, b);
}

let anything: unknown;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 10];

enum Role {
  LOADING,
  READY,
}

let union: string | number;

let literal: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc2(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

class Key {}

class Person {}

abstract class House {}

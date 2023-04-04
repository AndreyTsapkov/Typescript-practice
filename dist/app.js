"use strict";
let age;
age = 50;
let namee;
namee = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
function calc(a, b, callback) {
    callback(a, b);
}
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 10];
var Role;
(function (Role) {
    Role[Role["LOADING"] = 0] = "LOADING";
    Role[Role["READY"] = 1] = "READY";
})(Role || (Role = {}));
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc2(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map
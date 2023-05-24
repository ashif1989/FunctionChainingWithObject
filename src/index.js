function calc(num) {
  this.result = num;

  let add = (int) => {
    this.result += int;
    return calc(this.result);
  };

  let sub = (int) => {
    this.result -= int;
    return calc(this.result);
  };

  let mul = (int) => {
    this.result *= int;
    return calc(this.result);
  };

  let div = (int) => {
    this.result /= int;
    return calc(this.result);
  };

  let get = () => {
    return this.result;
  };

  return { add, sub, mul, div, get };
}

let chainFunction = new calc(2).add(2).sub(1).mul(4).div(2).get();
console.log(chainFunction);

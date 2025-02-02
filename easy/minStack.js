// @see https://leetcode.com/problemset/algorithms/?difficulty=Easy
/**
 * initialize your data structure here.
 */

// get min contant time
var MinStack = function () {
  this.elements = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: this.elements.length ? Math.min(x, this.getMin()) : x, // min value update
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

"use strict";
var expect = require("must")
var keysOfObj = require("../")

describe("keys-of-obj", function () {
  it("should support empty object", function () {
    expect(keysOfObj({})).to.eql([])
  })

  it("should get simple keys", function () {
    var data = {
      foo: "bar",
      spam: "ham"
    }
    expect(keysOfObj(data)).to.eql(["foo", "spam"])
  })

  it("should add parent of empty obj as key", function () {
    var data = {foo: {}}
    expect(keysOfObj(data)).to.eql(["foo"])
  })

  it("should traverse lists", function () {
    var data = [{foo: "bar"}, {ham: "spam"}]
    expect(keysOfObj(data)).to.eql(["0.foo", "1.ham"])
  })

  it("should add parent of empty list as key", function () {
    var data = {foo: []}
    expect(keysOfObj(data)).to.eql(["foo"])
  })

  it("should support nested properties", function () {
    var data = {
      foo: {
        bar: {baz: 1}
      },
      ham: {
        spam: 2,
        eggs: 3
      }
    }
    expect(keysOfObj(data)).to.eql(["foo.bar.baz", "ham.spam", "ham.eggs"])
  })
})

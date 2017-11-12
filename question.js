'use strict';
class Question {
  constructor(content){
    this.content = content
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }
  static All(){
    return this._All;
  }
  static Find(id){
    return this.All()[id - 1]
  }
}
Question._All = [];

let newQuestion = new Question("What's your favorite food?")
newQuestion.save()

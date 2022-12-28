class Database {
  static courseToInt = {};
  static intToCourse = {};
  static currIndex = 0;

  constructor() {
  
  }
  static getInt(course) {
    if (this.courseToInt.hasOwnProperty(course)) {
      return this.courseToInt[course];
    }
    return null;
  }

  static getCourse(val) {
      if (this.intToCourse.hasOwnProperty(val)) {
        return this.intToCourse[val];
      }
      return null;
  }

  static addCourse(course) {
    if (this.courseToInt.hasOwnProperty(course)) {
      return;
    }
    this.courseToInt[course] = this.currIndex;
    this.intToCourse[this.currIndex] = course;
    this.currIndex++;
  }
}

export {Database}
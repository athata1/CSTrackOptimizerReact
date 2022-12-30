const courseMap = [
  ["CS490-CLC", "Cloud Computing"],
  ["MA266","Ordinary Differential Equations"],
  ["MA366","Ordinary Differential Equations"],
  ["CS314","Numerical Methods"],
  ["CS373","Data Mining and Machine Learning"],
  ["CS473","Web Information Search and Management"],
  ["CS478","Introduction to Bioinformatics"],
  ["IE336","Operations Research - Stochastic Models"],
  ["CS381","Introduction To The Analysis Of Algorithms"],
  ["ECE301","Signals and Systems"],
  ["CS352","Compilers: Principles and Practice"],
  ["CS353","Principles of Concurrency and Parallelism"],
  ["CS354","Operating Systems"],
  ["CS307","Software Engineering I"],
  ["CS422","Computer Networks"],
  ["CS456","Programming Languages"],
  ["CS471","Introduction to Artificial Intelligence"],
  ["CS483","Introduction to the Theory of Computation"],
  ["CS514","Numerical Analysis"],
  ["CS515","Numerical Linear Algebra"],
  ["CS520","Computational Methods In Optimization"],
  ["CS525","Parallel Computing"],
  ["IE335","Operations Research - Optimization"],
  ["MA341","Foundations of Analysis"],
  ["MA440","Honors Real Analysis I"],
  ["CS334","Fundamentals of Computer Graphics"],
  ["CS434","Advanced Computer Graphics"],
  ["CS490-IDV","Introduction to Data Visualization"],
  ["CS348","Information Systems"],
  ["CS448","Introduction to Relational Databases"],
  ["CS355","Introduction to Cryptography"],
  ["CS426","Computer Security"],
  ["CS490","Senior Project"],
  ["CS497","Honors Research Project"],
  ["EPICS411","Honors Research Project"],
  ["EPICS412","Honors Research Project"],
  ["MA353","Linear Algebra II With Applications"],
  ["MA362","Topics In Vector Calculus"],
  ["MA385","Introduction To Logic"],
  ["MA421","Linear Programming And Optimization Techniques"],
  ["MA453","Elements Of Algebra I"],
  ["STAT416 or MA416 or STAT512","Probability/Regression"],
  ["CS490-HCI","Human-Computer Interactions"],
  ["CS490-LDA","Large-Scale Data Analysis"],
  ["CS577","Natural Language Processing"],
  ["CS578","Statistical Machine Learning"],
  ["CS408","Software Testing"],
  ["CS560","Reasoning About Programs"],
  ["CS489","Embedded Systems"],
  ["CS490-DSO","Distributed Systems"],
  ["CS490-SWS","Software Security"],
  ["CS407","Software Engineering Senior Project"],
  ["CS510", "Software Engineering"],
  ["CS590-SRS", "Software Reliability and Security"],
];
courseMap.sort((a,b) => a[0].localeCompare(b[0]));

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

  static getAbbr(courseNum) {
    let length = courseMap.length;
    let l = 0;
    let r = length - 1;
    let courseName = Database.getCourse(courseNum);
    if (courseName === undefined)
      return undefined;
    while (l <= r) {
      let m = (l + Math.floor((r - l) / 2));
      if (courseMap[m][0] === courseName) {
        return courseMap[m][1];
      }
      else if (courseName.localeCompare(courseMap[m][0]) < 0) {
        r = m - 1;
      }
      else {
        l = m + 1;
      }
    }

    return undefined;
  }
}

export {Database}
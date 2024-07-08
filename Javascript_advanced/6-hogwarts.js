class StudentHogwarts {
  #privateScore = 0;
  #name = null;

  constructor() {
    // Return an "object" as the task says and each key has the related function
    return {
      setName: (newName) => { this.#name = newName; },
      rewardStudent: () => this.#changeScoreBy(1),
      penalizeStudent: () => this.#changeScoreBy(-1),
      getScore: () => {
        return `${this.#name}: ${this.#privateScore}`;
      }
    };
  }
  // Class does not give access to this method and it is private
  #changeScoreBy(points) {
    this.#privateScore += points;
  }
}

// Harry
const harry = new StudentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
console.log(harry)

// Draco
const draco = new StudentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

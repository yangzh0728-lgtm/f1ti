const assert = require("assert");
const { calculateF1Result, f1Questions } = require("./f1-quiz");

function answersFor(optionIndex) {
  return f1Questions.map((question) => question.options[optionIndex].id);
}

function testAggressiveAnswersMatchVerstappen() {
  const result = calculateF1Result(answersFor(0));

  assert.strictEqual(f1Questions.length, 16);
  assert.strictEqual(result.allDrivers.length, 22);
  assert.strictEqual(result.driver.id, "verstappen");
  assert.strictEqual(result.driver.number, "3");
  assert.strictEqual(result.driver.skinTone, "#f1c7a8");
  assert.ok(result.percent > 0);
  assert.ok(result.matches.every((match) => match.percent > 0));
  assert.ok(result.driver.avatar.startsWith("data:image/svg+xml"));
  assert.ok(result.driver.detail.length > result.driver.summary.length);
  assert.ok(result.score > 0);
  assert.ok(result.matches.length >= 3);
}

function testSmoothStrategicAnswersMatchPiastri() {
  const result = calculateF1Result(answersFor(1));

  assert.strictEqual(result.driver.id, "piastri");
  assert.ok(result.driver.traits.includes("冷静"));
}

function testEmotionalAnswersMatchHamilton() {
  const result = calculateF1Result(answersFor(2));

  assert.strictEqual(result.driver.id, "hamilton");
}

function testStrategistAnswersMatchAlonso() {
  const result = calculateF1Result(answersFor(3));

  assert.strictEqual(result.driver.id, "alonso");
}

function testQuestionsIncludeF1Memes() {
  const quizText = f1Questions
    .flatMap((question) => [question.title, ...question.options.map((option) => option.label)])
    .join(" ");

  assert.ok(quizText.includes("Plan B"));
  assert.ok(quizText.includes("Box"));
  assert.ok(quizText.includes("保胎"));
  assert.ok(quizText.includes("围场数学"));
  assert.ok(quizText.includes("T-pose"));
  assert.ok(quizText.includes("Stay out"));
  assert.ok(quizText.includes("Copy"));
  assert.ok(quizText.includes("I am stupid"));
  assert.ok(quizText.includes("Ok fine"));
  assert.ok(quizText.includes("F***"));
  assert.ok(quizText.includes("摩纳哥"));
  assert.ok(quizText.includes("蒙扎"));
}

function testSomeQuestionsUseAgreementScale() {
  const scaleQuestions = f1Questions.filter((question) => question.type === "scale");

  assert.strictEqual(scaleQuestions.length, 8);
  scaleQuestions.forEach((question) => {
    assert.strictEqual(question.options.length, 3);
    assert.deepStrictEqual(question.options.map((option) => option.choice), ["A", "B", "C"]);
    assert.deepStrictEqual(question.options.map((option) => option.label), ["不认同", "中立", "认同"]);
  });
}

function testMixedAnswersReturnStableClosestDrivers() {
  const answers = [
    "q1-calm",
    "q2-neutral",
    "q3-adapt",
    "q4-neutral",
    "q5-risk",
    "q6-neutral",
    "q7-agree",
    "q8-late",
    "q9-data",
    "q10-agree",
    "q11-read",
    "q12-disagree",
    "q13-agree",
    "q14-gamble",
    "q15-neutral",
    "q16-monaco"
  ];
  const result = calculateF1Result(answers);

  assert.strictEqual(result.driver.id, "alonso");
  assert.strictEqual(result.matches[0].driver.id, "alonso");
  assert.ok(result.matches[1].score <= result.matches[0].score);
}

function testMissingAnswersAreRejected() {
  assert.throws(
    () => calculateF1Result(["q1-attack"]),
    /Answer count must match question count/
  );
}

function testAll2026DriversHaveResultContent() {
  const result = calculateF1Result(answersFor(2));
  const driverNames = result.allDrivers.map((driver) => driver.name);
  const nicknamesByName = Object.fromEntries(
    result.allDrivers.map((driver) => [driver.name, driver.nickname])
  );
  const numbersByName = Object.fromEntries(
    result.allDrivers.map((driver) => [driver.name, driver.number])
  );
  const skinTonesByName = Object.fromEntries(
    result.allDrivers.map((driver) => [driver.name, driver.skinTone])
  );

  assert.deepStrictEqual(driverNames.sort(), [
    "Alex Albon",
    "Arvid Lindblad",
    "Carlos Sainz",
    "Charles Leclerc",
    "Esteban Ocon",
    "Fernando Alonso",
    "Franco Colapinto",
    "Gabriel Bortoleto",
    "George Russell",
    "Isack Hadjar",
    "Kimi Antonelli",
    "Lance Stroll",
    "Lando Norris",
    "Lewis Hamilton",
    "Liam Lawson",
    "Max Verstappen",
    "Nico Hulkenberg",
    "Oliver Bearman",
    "Oscar Piastri",
    "Pierre Gasly",
    "Sergio Perez",
    "Valtteri Bottas"
  ].sort());

  assert.deepStrictEqual(nicknamesByName, {
    "Max Verstappen": "汽车人",
    "Isack Hadjar": "面包超人",
    "Lewis Hamilton": "拔罐王刘爵士",
    "Charles Leclerc": "围场数学家",
    "Lando Norris": "给",
    "Oscar Piastri": "复仇考拉",
    "George Russell": "赛车皇帝",
    "Kimi Antonelli": "篡位太子",
    "Fernando Alonso": "头哥",
    "Lance Stroll": "少爷",
    "Carlos Sainz": "猫肉哥",
    "Alex Albon": "中国女婿",
    "Pierre Gasly": "加大师",
    "Franco Colapinto": "可乐瓶",
    "Nico Hulkenberg": "绿巨人",
    "Gabriel Bortoleto": "博托",
    "Esteban Ocon": "奥康",
    "Oliver Bearman": "熊人",
    "Liam Lawson": "劳森",
    "Arvid Lindblad": "林宝",
    "Valtteri Bottas": "工具人",
    "Sergio Perez": "佩大师/保胎大师"
  });

  assert.deepStrictEqual(numbersByName, {
    "Max Verstappen": "3",
    "Isack Hadjar": "6",
    "Lewis Hamilton": "44",
    "Charles Leclerc": "16",
    "Lando Norris": "1",
    "Oscar Piastri": "81",
    "George Russell": "63",
    "Kimi Antonelli": "12",
    "Fernando Alonso": "14",
    "Lance Stroll": "18",
    "Carlos Sainz": "55",
    "Alex Albon": "23",
    "Pierre Gasly": "10",
    "Franco Colapinto": "43",
    "Nico Hulkenberg": "27",
    "Gabriel Bortoleto": "5",
    "Esteban Ocon": "31",
    "Oliver Bearman": "87",
    "Liam Lawson": "30",
    "Arvid Lindblad": "41",
    "Valtteri Bottas": "77",
    "Sergio Perez": "11"
  });

  assert.strictEqual(skinTonesByName["Lewis Hamilton"], "#5b3427");
  assert.strictEqual(skinTonesByName["Oscar Piastri"], "#f1c7a8");

  result.allDrivers.forEach((driver) => {
    assert.ok(driver.avatar.startsWith("data:image/svg+xml"));
    assert.ok(driver.detail.length > driver.summary.length);
    assert.ok(driver.traits.length >= 4);
  });
}

testAggressiveAnswersMatchVerstappen();
testSmoothStrategicAnswersMatchPiastri();
testEmotionalAnswersMatchHamilton();
testStrategistAnswersMatchAlonso();
testQuestionsIncludeF1Memes();
testSomeQuestionsUseAgreementScale();
testMixedAnswersReturnStableClosestDrivers();
testMissingAnswersAreRejected();
testAll2026DriversHaveResultContent();

console.log("F1 quiz logic tests passed");

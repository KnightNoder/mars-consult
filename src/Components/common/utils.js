const getCategory = (choice) => {
  switch (choice) {
    case "Hairfall":
      return "hair-1";
    case "Beard":
      return "beard";
    case "Skin":
      return "skin";
    case "Performance":
      return "performance";
    case "WeightLoss":
      return "weight-loss";
  }
};

const getProductId = (choice) => {
  const hair_current_condition = window.localStorage.getItem(
    "hair_current_condition"
  );
  const past_allergy = window.localStorage.getItem("past_allergy");
  const big_event_120_days = window.localStorage.getItem("big_event_120_days");
  const age = window.localStorage.getItem("age");
  switch (choice) {
    case "Hairfall":
      if (hair_current_condition == "Condition one") {
        return "6933666726052";
      } else if (hair_current_condition == "Condition two") {
        return "6920580530340";
      } else if (
        (hair_current_condition == "Condition three" ||
          hair_current_condition == "Condition four") &&
        past_allergy == "no" &&
        parseInt(age) > 30
      ) {
        return "6920192950436";
      } else if (
        (hair_current_condition == "Condition three" ||
          hair_current_condition == "Condition four") &&
        (past_allergy == "yes" || big_event_120_days == "yes")
      ) {
        return "6920580530340";
      } else {
        return "6732124520612";
      }
    case "Beard":
      const beard_stage = window.localStorage.getItem("beard_condition");
      if (
        beard_stage == "Patchy Beard" ||
        beard_stage == "No Beard growth" ||
        beard_stage == "Very less"
      )
        return "6980058677412";
      else return "6743341072548";
    case "WeightLoss":
      const weight = parseInt(window.localStorage.getItem("weight"));
      const height = parseInt(window.localStorage.getItem("height"));
      const BMI = (weight * 10000) / (height * height);
      if (BMI > 25) return "6679222288548";
      else if (BMI > 22 && BMI <= 25) return "6774754902180";
      else return "6766304428196";
    case "Performance":
      const erection_case = window.localStorage.getItem("erection_problem");
      const ejaculation_case = window.localStorage.getItem("ejaculation_case");
      const history_of_heart_issues = window.localStorage.getItem(
        "history_of_heart_issues"
      );
      if (
        (erection_case ==
          "Sometimes, I have issues with maintaining erection" ||
          erection_case ==
            "Most of the times, I have issues with getting & maintaining an erection") &&
        ejaculation_case == "Ejaculate too early during performance" &&
        history_of_heart_issues == "No"
      )
        return "5805028966564";
      else if (
        (erection_case ==
          "Sometimes, I have issues with maintaining erection" ||
          erection_case ==
            "Most of the times, I have issues with getting & maintaining an erection") &&
        ejaculation_case == "Ejaculate too early during performance" &&
        history_of_heart_issues != "No"
      )
        return "6734347174052";
      else if (
        erection_case == "No issues in maintaining erection" &&
        ejaculation_case == "Ejaculate too early during performance"
      )
        return "6734347174052";
      else if (
        erection_case == "No issues in maintaining erection" &&
        history_of_heart_issues == "No"
      )
        return "6718215651492";
      else return "6734347174052";
    case "Skin":
      const skin_concern = window.localStorage.getItem("skin_concern");
      const skin_allergy_to = window.localStorage.getItem("skin_allergy_to");
      if (skin_allergy_to == "None") {
        if (skin_concern == "Open pores") return "7524809375992";
        if (skin_concern == "Pigmentation") return "7524809375992";
        if (skin_concern == "Active Acne") return "6826093478052";
        if (skin_concern == "Aging") return "6877087105188";
        if (skin_concern == "Dark circles") return "7524809375992";
        if (skin_concern == "Acne marks & spots") return "7524809375992";
        if (skin_concern == "Dull Skin") return "7524809375992";
      } else if (skin_allergy_to == "Vitamin C") {
        if (skin_concern == "Open pores") return "7637440266488";
        if (skin_concern == "Pigmentation") return "7524810391800";
        if (skin_concern == "Active Acne") return "6826093478052";
        if (skin_concern == "Aging") return "6825877635236";
        if (skin_concern == "Dark circles") return "7637452128504";
        if (skin_concern == "Acne marks & spots") return "6826093478052";
        if (skin_concern == "Dull Skin") return "7516963406072";
      } else if (skin_allergy_to == "Salicylic Acid") {
        if (skin_concern == "Open pores") return "7516963406072";
        if (skin_concern == "Pigmentation") return "7524810391800";
        if (skin_concern == "Active Acne") return "7637452128504";
        if (skin_concern == "Aging") return "6973442228388";
        if (skin_concern == "Dark circles") return "7637473067256";
        if (skin_concern == "Acne marks & spots") return "7524810391800";
        if (skin_concern == "Dull Skin") return "7516963406072";
      } else if (skin_allergy_to == "Retinol") {
        if (skin_concern == "Open pores") return "7516963406072";
        if (skin_concern == "Pigmentation") return "7524810391800";
        if (skin_concern == "Active Acne") return "6826093478052";
        if (skin_concern == "Aging") return "6825877635236";
        if (skin_concern == "Dark circles") return "7637452128504";
        if (skin_concern == "Acne marks & spots") return "6826093478052";
        if (skin_concern == "Dull Skin") return "7637440266488";
      } else if (skin_allergy_to == "Niacinamide") {
        if (skin_concern == "Open pores") return "7524809375992";
        if (skin_concern == "Pigmentation") return "7524810391800";
        if (skin_concern == "Active Acne") return "7637452128504";
        if (skin_concern == "Aging") return "6825877635236";
        if (skin_concern == "Dark circles") return "6906399129764";
        if (skin_concern == "Acne marks & spots") return "7524810391800";
        if (skin_concern == "Dull Skin") return "6906399129764";
      } else if (skin_allergy_to == "Kojic Acid") {
        if (skin_concern == "Open pores") return "7516963406072";
        if (skin_concern == "Pigmentation") return "7524810391800";
        if (skin_concern == "Active Acne") return "6876951576740";
        if (skin_concern == "Aging") return "6825877635236";
        if (skin_concern == "Dark circles") return "6877027401892";
        if (skin_concern == "Acne marks & spots") return "6826093478052";
        if (skin_concern == "Dull Skin") return "7516963406072";
      }
  }
};

const getSendMailData = () => {
  const choice = window.localStorage.getItem("choice");
  var stateObject = {
    Hairfall: {
      "What is the current condition of your hair and scalp?":
        window.localStorage.getItem("hair_current_condition"),
      "Does anyone in your family have hair loss?":
        window.localStorage.getItem("family_hair_loss"),
      "Do you have any past allergic reactions to medicines?":
        window.localStorage.getItem("past_allergy"),
      "Do you have any big events coming up in next 120 days?":
        window.localStorage.getItem("big_event_120_days"),
    },
    Beard: {
      "Choose a condition that best describes your beard":
        window.localStorage.getItem("beard_condition"),
      "What exactly are you looking for?":
        window.localStorage.getItem("looking_for"),
      "How do you trim your beard?": window.localStorage.getItem("trim_beard"),
      "Does anyone in your family have beard growth issues?":
        window.localStorage.getItem("family_beard_growth_issues"),
    },
    WeightLoss: {
      Height: window.localStorage.getItem("height"),
      Weight: window.localStorage.getItem("weight"),
      "How often do you eat meals in a day?":
        window.localStorage.getItem("meals_a_day"),
      "How many days do you exercise in a week?":
        window.localStorage.getItem("exercise_a_week"),
      "Do you have any pre-existing problems?": window.localStorage.getItem(
        "pre_existing_problems"
      ),
    },
    Skin: {
      "Please select your skin concern":
        window.localStorage.getItem("skin_concern"),
      "Please select your skin texture":
        window.localStorage.getItem("skin_texture"),
      "Please select your skin type": window.localStorage.getItem("skin_type"),
      "Are you allergic to any of the ingredients?":
        window.localStorage.getItem("skin_allergy_to"),
    },
    Performance: {
      "How is your sexual drive over the last one year?":
        window.localStorage.getItem("sexual_drive_over_a_year"),
      "Do you have a problem getting or maintaining an erection during sex?":
        window.localStorage.getItem("erection_problem"),
      "Which of the following is the case with you?":
        window.localStorage.getItem("ejaculation_case"),
      "Do you have any existing or any history of Heart issues?":
        window.localStorage.getItem("history_of_heart_issues"),
      "Do you experience any cramps or tiredness while performing?":
        window.localStorage.getItem("cramps_tiredness"),
    },
  };

  const questionnaire = [];

  const testObj = {
    question: "",
    answer: "",
  };

  for (const key in stateObject[choice]) {
    questionnaire.push({
      question: key,
      answer: stateObject[choice][key],
    });
  }

  if (Object.keys(stateObject[choice].length == 4)) {
    questionnaire.push(testObj);
  }

  const data = JSON.stringify({
    firstName: window.localStorage.getItem("first_name"),
    lastName: window.localStorage.getItem("last_name"),
    age: window.localStorage.getItem("age"),
    phone: window.localStorage.getItem("phone_number"),
    email: window.localStorage.getItem("email"),
    consultancy_type: "30 sec",
    category: choice,
    booking: "Request a call back",
    image: "",
    user_survey: questionnaire,
  });

  return data;
};
module.exports = { getCategory, getProductId, getSendMailData };

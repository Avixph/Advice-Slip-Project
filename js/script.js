// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getAdviceButton = document.querySelector("#getAdvice");
const adviceContent = document.querySelector(".advice-container");
const adviceQuote = document.querySelector(".advice-container p");

getAdviceButton.addEventListener("click", async () => {
  try {
    // Get advice quote
    let adviceSlip = await axios.get("https://api.adviceslip.com/advice");
    console.log(adviceSlip);

    // Display the advice to the UI
    let advice = adviceSlip.data.slip.advice;
    adviceQuote.innerText = advice;
  } catch (err) {
    //Error handling
    console.log("Sorry, all out of advice", err);
    let errorMessage = "Error: All out of advice.";
    adviceQuote.innerText = errorMessage;
  }
});

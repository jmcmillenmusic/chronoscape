const fetchQuestionAndRender = async (questionId) => {
  try {
    const response = await fetch(`/api/questions/${questionId}`); // Replace questionId with the actual question ID
    if (response.ok) {
      const questionData = await response.json();
      const questionContainer = document.querySelector('#question-container');

      const questionTemplate = Handlebars.compile(document.querySelector('#question-template').innerHTML);
      questionContainer.innerHTML = questionTemplate({ question: questionData });
    } else {
      console.error('Failed to fetch question');
    }
  } catch (error) {
    console.error('Error fetching question:', error);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Extract the question ID from the URL or from wherever you get it
  const questionId = 1; // Replace with the actual question ID
  fetchQuestionAndRender(questionId);
});
document.addEventListener("DOMContentLoaded", function() {
    const quizHeader = document.getElementById("quiz-header");
    const rulesSection = document.getElementById("rules");
    const quizSection = document.getElementById("quiz");

    quizHeader.onclick = function() {
        rulesSection.style.display = "none";
        quizSection.style.display = "block";
    };
});

const questions = [
    {
        question: "ما هو السلوك المطلوب من العسكريين عند التعامل مع المواطنين؟",
        options: ["التعامل بخشونة", "التعامل الراقي والأسلوب الحسن", "التجاهل التام"],
        answer: "التعامل الراقي والأسلوب الحسن"
    },
    {
        question: "ما هي المدة التي يجب انتظارها قبل الصدم في حالة المطاردة؟",
        options: ["3 ثواني", "5 ثواني", "10 ثواني"],
        answer: "5 ثواني"
    },
    {
        question: "ما هي الخطوات التي يجب اتباعها عند مطاردة مواطن هارب؟",
        options: ["طلق فوري", "تقديم بلاغ وإنذارين ثم الطلق على الكفرات", "الصدم مباشرة"],
        answer: "تقديم بلاغ وإنذارين ثم الطلق على الكفرات"
    },
    {
        question: "على أي أساس يتم نظام الترقيات في الوزارات؟",
        options: ["العلاقات الشخصية", "التواجد والجهد في القطاع", "الصدفة"],
        answer: "التواجد والجهد في القطاع"
    },
    {
        question: "ما هي الإجراءات التي يجب على العسكري اتخاذها عند استقبال شكوى داخل المركز؟",
        options: ["تجاهل الشكوى", "استقبال الشكوى باحترام وتقدير", "الصراخ على المواطن"],
        answer: "استقبال الشكوى باحترام وتقدير"
    },
    {
        question: "ما هي العقوبة المفروضة على التفحيط أمام مركز الشرطة؟",
        options: ["تحذير واحد ثم الطلق والقتل", "سجن 5 أشهر", "غرامة مالية"],
        answer: "تحذير واحد ثم الطلق والقتل"
    },
    {
        question: "هل يسمح للعسكري بتفتيش المواطن خارج المركز؟",
        options: ["نعم، في جميع الأوقات", "لا، فقط داخل المركز", "فقط بإذن من المواطن"],
        answer: "لا، فقط داخل المركز"
    },
    {
        question: "ما هي المدة القصوى لسجن المواطن؟",
        options: ["5 أشهر", "10 أشهر", "15 شهر"],
        answer: "15 شهر"
    },
    {
        question: "ماذا يحدث إذا ثبت الفساد على أحد الوزراء؟",
        options: ["يتم تجاهله", "يتم التحقيق معه بعد أخذ الإذن", "يتم ترقيته"],
        answer: "يتم التحقيق معه بعد أخذ الإذن"
    },
    {
        question: "هل يحق للعسكري استخدام السفاتي بدون سبب؟",
        options: ["نعم، في أي وقت", "لا، يمنع تشغيل السفاتي بدون سبب", "فقط في الليل"],
        answer: "لا، يمنع تشغيل السفاتي بدون سبب"
    },
    {
        question: "ما هي الإجراءات المتبعة عند رفض المتهم تسليم أسلحته؟",
        options: ["تركه يذهب", "استخدام القوة الجبرية", "الصراخ عليه"],
        answer: "استخدام القوة الجبرية"
    },
    {
        question: "هل يحق للعسكري قتل المواطن إذا ضربه؟",
        options: ["نعم، فورًا", "لا، يجب التحقيق أولاً", "فقط إذا كان مسلحًا"],
        answer: "نعم، فورًا"
    },
    {
        question: "ما هي المدة المسموح بها للسيطرة على مقر العصابة؟",
        options: ["10 دقائق", "15 دقيقة", "20 دقيقة"],
        answer: "15 دقيقة"
    },
    {
        question: "هل يحق للعسكري مداهمة الأماكن الآمنة بدون إعلان؟",
        options: ["نعم، دائمًا", "فقط بإذن من المسؤولين", "لا، يمنع ذلك"],
        answer: "فقط بإذن من المسؤولين"
    },
    {
        question: "ما هي العقوبة على اهانة العسكري؟",
        options: ["طلاق فوري وسجن 15 شهر", "تحذير فقط", "غرامة مالية"],
        answer: "طلاق فوري وسجن 15 شهر"
    },
    {
        question: "هل يحق للعسكري المشاركة في أي سيناريو داخل المدن؟",
        options: ["نعم، دائمًا", "فقط بإذن من القائد", "لا، يمنع ذلك"],
        answer: "نعم، دائمًا"
    },
    {
        question: "ما هي الإجراءات المتبعة عند دخول مواطن إلى مركز الشرطة بدون إذن؟",
        options: ["سجنه فورًا", "تحذيره ثم سجنه", "تركه يذهب"],
        answer: "سجنه فورًا"
    },
    {
        question: "هل يحق للعسكري استخدام المدرعات في أي وقت؟",
        options: ["نعم، دائمًا", "فقط في حالة الاستنفار الأمني", "لا، يمنع ذلك"],
        answer: "فقط في حالة الاستنفار الأمني"
    },
    {
        question: "ما هي الإجراءات المتبعة عند هروب مواطن بعد استيقافه؟",
        options: ["تركه يهرب", "إطلاق النار عليه فورًا", "تقديم بلاغ"],
        answer: "إطلاق النار عليه فورًا"
    },
    {
        question: "هل يحق للعسكري تفتيش حقيبة المواطن خارج المركز؟",
        options: ["نعم، دائمًا", "فقط داخل المركز", "فقط إذا كان مشتبهًا به"],
        answer: "فقط داخل المركز"
    }
];

let currentQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById("startQuizButton").style.display = "none"; // إخفاء زر "ابدأ الاختبار"
    currentQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    userAnswers = [];
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById("questions");
    quizContainer.innerHTML = "";

    if (currentQuestionIndex < currentQuestions.length) {
        const question = currentQuestions[currentQuestionIndex];
        let questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;
        question.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        const buttonsContainer = document.createElement("div");

        if (currentQuestionIndex > 0) {
            const prevButton = document.createElement("button");
            prevButton.textContent = "السؤال السابق";
            prevButton.onclick = prevQuestion;
            buttonsContainer.appendChild(prevButton);
        }

        const nextButton = document.createElement("button");
        nextButton.textContent = currentQuestionIndex < currentQuestions.length - 1 ? "التالي" : "اظهار الدرجة";
        nextButton.onclick = nextQuestion;
        buttonsContainer.appendChild(nextButton);

        questionElement.appendChild(buttonsContainer);
        quizContainer.appendChild(questionElement);
    } else {
        showResults();
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        userAnswers.push(selectedOption.value);
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert("الرجاء اختيار إجابة قبل الانتقال إلى السؤال التالي.");
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResults() {
    const quizContainer = document.getElementById("questions");
    const resultsContainer = document.getElementById("results");
    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";

    let correctAnswers = 0;
    let resultsHTML = "<h2>نتيجة الاختبار:</h2>";

    userAnswers.forEach((answer, index) => {
        const question = currentQuestions[index];
        const isCorrect = answer === question.answer;
        if (isCorrect) {
            correctAnswers++;
        }

        resultsHTML += `
            <div style="margin-bottom: 20px;">
                <p><strong>السؤال ${index + 1}:</strong> ${question.question}</p>
                <p><strong>إجابتك:</strong> ${answer}</p>
                <p><strong>الإجابة الصحيحة:</strong> ${question.answer}</p>
                <p style="color: ${isCorrect ? 'green' : 'red'};">${isCorrect ? '✔ إجابة صحيحة' : '✘ إجابة خاطئة'}</p>
            </div>
        `;
    });

    resultsHTML += `<h3>النتيجة النهائية: ${correctAnswers} من ${currentQuestions.length}</h3>`;
    resultsContainer.innerHTML = resultsHTML;
}
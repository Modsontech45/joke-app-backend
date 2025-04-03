import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));
// 1. GET a random financial tip
app.get("/random", (req, res) => {
  let randomTips = Math.random() * 100;
  randomTips = Math.floor(randomTips);
  res.send(financialTips[randomTips]);
});

// 2. GET a specific financial tip
app.get("/tips/:id", (req, res) => {
  let tipId = parseInt(req.params.id); // Convert string to number

  for (let tip of financialTips) {  // Use "of" to loop through objects
    if (tip.id === tipId) {
      return res.json(tip); // Return response immediately if found
    }
  }

  res.status(404).send("Tip not found"); // Send response after the loop
});

// Filter financial tips by type
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const filteredTips = financialTips.filter((tip) => tip.tipType === type);
  res.json(filteredTips);
});

// Post a new financial tip
app.post("/tips", (req, res) => {
  const newTip = {
    id: financialTips.length + 1,
    tipText: req.body.text,
    tipType: req.body.type,
  };
  financialTips.push(newTip);
  console.log(financialTips.slice(-1));
  res.json(newTip);
});

// Put a financial tip
app.put("/tips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementTip = {
    id: id,
    tipText: req.body.text,
    tipType: req.body.type,
  };

  const searchIndex = financialTips.findIndex((tip) => tip.id === id);

  financialTips[searchIndex] = replacementTip;
  res.json(replacementTip);
});

// Patch a financial tip
app.patch("/tips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingTip = financialTips.find((tip) => tip.id === id);
  const replacementTip = {
    id: id,
    tipText: req.body.text || existingTip.tipText,
    tipType: req.body.type || existingTip.tipType,
  };
  const searchIndex = financialTips.findIndex((tip) => tip.id === id);
  financialTips[searchIndex] = replacementTip;
  console.log(financialTips[searchIndex]);
  res.json(replacementTip);
});

// DELETE a specific financial tip
app.delete("/tips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = financialTips.findIndex((tip) => tip.id === id);
  if (searchIndex > -1) {
    financialTips.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res
      .status(404)
      .json({ error: `Tip with id: ${id} not found. No tips were deleted.` });
  }
});

// DELETE all financial tips
app.delete("/all", (req, res) => {
  const userKey = req.query.key;
  if (userKey === masterKey) {
    financialTips = [];
    res.sendStatus(200);
  } else {
    res
      .status(404)
      .json({ error: `You are not authorised to perform this action.` });
  }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});


var financialTips = [
  {
    id: 1,
    tipText: "Start saving early to take advantage of compound interest.",
    tipType: "Savings",
  },
  {
    id: 2,
    tipText: "Create a budget and stick to it to control your spending.",
    tipType: "Budgeting",
  },
  {
    id: 3,
    tipText: "Build an emergency fund to cover unexpected expenses.",
    tipType: "Savings",
  },
  {
    id: 4,
    tipText: "Invest in a diversified portfolio to reduce risk.",
    tipType: "Investing",
  },
  {
    id: 5,
    tipText: "Pay off high-interest debt as quickly as possible.",
    tipType: "Debt Management",
  },
  {
    id: 6,
    tipText: "Take advantage of employer-sponsored retirement plans, like 401(k)s.",
    tipType: "Retirement",
  },
  {
    id: 7,
    tipText: "Automate your savings to ensure consistency.",
    tipType: "Savings",
  },
  {
    id: 8,
    tipText: "Consider index funds for low-cost, long-term investing.",
    tipType: "Investing",
  },
  {
    id: 9,
    tipText: "Keep track of your net worth to monitor your financial progress.",
    tipType: "Finance Management",
  },
  {
    id: 10,
    tipText: "Avoid lifestyle inflation by living below your means.",
    tipType: "Budgeting",
  },
  {
    id: 11,
    tipText: "Invest in your financial education to make better money decisions.",
    tipType: "Education",
  },
  {
    id: 12,
    tipText: "Review your credit report regularly to maintain a healthy credit score.",
    tipType: "Credit Management",
  },
  {
    id: 13,
    tipText: "Shop around for the best rates when making major purchases.",
    tipType: "Purchasing",
  },
  {
    id: 14,
    tipText: "Invest in real estate for passive income opportunities.",
    tipType: "Investing",
  },
  {
    id: 15,
    tipText: "Take advantage of tax-advantaged accounts like IRAs and HSAs.",
    tipType: "Tax Management",
  },
  {
    id: 16,
    tipText: "Be mindful of fees when selecting financial products and services.",
    tipType: "Investing",
  },
  {
    id: 17,
    tipText: "Plan for retirement early, even if it’s just small contributions at first.",
    tipType: "Retirement",
  },
  {
    id: 18,
    tipText: "Create multiple income streams to increase your financial security.",
    tipType: "Income",
  },
  {
    id: 19,
    tipText: "Keep an eye on your spending habits and make adjustments where necessary.",
    tipType: "Budgeting",
  },
  {
    id: 20,
    tipText: "Live within your means and prioritize saving over spending.",
    tipType: "Personal Finance",
  },
  {
    id: 21,
    tipText: "Start investing early to maximize the power of compound interest.",
    tipType: "Investing",
  },
  {
    id: 22,
    tipText: "Contribute regularly to your retirement accounts to take full advantage of tax benefits.",
    tipType: "Retirement",
  },
  {
    id: 23,
    tipText: "Track your spending to identify unnecessary expenses.",
    tipType: "Budgeting",
  },
  {
    id: 24,
    tipText: "Focus on paying off high-interest debts first before tackling low-interest ones.",
    tipType: "Debt Management",
  },
  {
    id: 25,
    tipText: "Don’t rely solely on credit cards for purchases; try to pay with cash when possible.",
    tipType: "Spending",
  },
  {
    id: 26,
    tipText: "Invest in yourself by acquiring new skills and qualifications to boost your earning potential.",
    tipType: "Education",
  },
  {
    id: 27,
    tipText: "Use budgeting apps or spreadsheets to track income and expenses.",
    tipType: "Budgeting",
  },
  {
    id: 28,
    tipText: "Reinvest dividends from investments to grow your wealth faster.",
    tipType: "Investing",
  },
  {
    id: 29,
    tipText: "Plan for long-term financial goals, such as buying a home or funding education.",
    tipType: "Goal Setting",
  },
  {
    id: 30,
    tipText: "Cut unnecessary subscriptions and memberships to reduce monthly expenses.",
    tipType: "Spending",
  },
  {
    id: 31,
    tipText: "Don’t be afraid to ask for a raise if you’re underpaid for your skills.",
    tipType: "Career",
  },
  {
    id: 32,
    tipText: "Regularly review and adjust your budget to reflect any changes in income or expenses.",
    tipType: "Budgeting",
  },
  {
    id: 33,
    tipText: "Consider a side hustle to supplement your income and build savings.",
    tipType: "Income",
  },
  {
    id: 34,
    tipText: "Understand your financial goals and create a plan to achieve them.",
    tipType: "Finance Management",
  },
  {
    id: 35,
    tipText: "Don’t ignore your student loans; create a repayment plan early.",
    tipType: "Debt Management",
  },
  {
    id: 36,
    tipText: "Use cashback or rewards credit cards wisely to earn benefits on purchases.",
    tipType: "Spending",
  },
  {
    id: 37,
    tipText: "Invest in tax-efficient funds to reduce your tax liability.",
    tipType: "Tax Management",
  },
  {
    id: 38,
    tipText: "Avoid making financial decisions based on emotions like fear or greed.",
    tipType: "Investing",
  },
  {
    id: 39,
    tipText: "Set up automatic transfers to savings accounts so you save consistently.",
    tipType: "Savings",
  },
  {
    id: 40,
    tipText: "Consider investing in dividend-paying stocks for steady income.",
    tipType: "Investing",
  },
  {
    id: 41,
    tipText: "Understand the difference between assets and liabilities to make smarter investment decisions.",
    tipType: "Education",
  },
  {
    id: 42,
    tipText: "Review your insurance coverage regularly to ensure adequate protection.",
    tipType: "Insurance",
  },
  {
    id: 43,
    tipText: "Take advantage of employer benefits like health insurance or retirement contributions.",
    tipType: "Employee Benefits",
  },
  {
    id: 44,
    tipText: "Stay disciplined and avoid emotional spending when you face financial stress.",
    tipType: "Mental Health",
  },
  {
    id: 45,
    tipText: "Start a small business or invest in one to build wealth.",
    tipType: "Income",
  },
  {
    id: 46,
    tipText: "Review your credit card statements carefully for errors or fraudulent charges.",
    tipType: "Credit Management",
  },
  {
    id: 47,
    tipText: "Don’t underestimate the importance of networking for career and business opportunities.",
    tipType: "Career",
  },
  {
    id: 48,
    tipText: "Diversify your investments across different asset classes to reduce risk.",
    tipType: "Investing",
  },
  {
    id: 49,
    tipText: "Set up a will or trust to protect your assets for future generations.",
    tipType: "Estate Planning",
  },
  {
    id: 50,
    tipText: "Take the time to educate yourself on tax planning and avoid overpaying in taxes.",
    tipType: "Tax Management",
  },
  {
    id: 51,
    tipText: "Find a financial advisor to guide you in making long-term investment decisions.",
    tipType: "Advice",
  },
  {
    id: 52,
    tipText: "Be cautious about impulse purchases, and take time to evaluate if it’s necessary.",
    tipType: "Spending",
  },
  {
    id: 53,
    tipText: "Regularly assess your insurance policies to avoid overpaying for unnecessary coverage.",
    tipType: "Insurance",
  },
  {
    id: 54,
    tipText: "Avoid high-interest payday loans and explore alternatives like credit unions.",
    tipType: "Debt Management",
  },
  {
    id: 55,
    tipText: "Invest in yourself through courses, books, and seminars to enhance your financial knowledge.",
    tipType: "Education",
  },
  {
    id: 56,
    tipText: "Focus on building passive income streams to increase wealth over time.",
    tipType: "Income",
  },
  {
    id: 57,
    tipText: "Review your spending habits regularly to ensure they align with your financial goals.",
    tipType: "Budgeting",
  },
  {
    id: 58,
    tipText: "Prioritize long-term goals over short-term pleasures for financial success.",
    tipType: "Goal Setting",
  },
  {
    id: 59,
    tipText: "Invest in stocks or funds with a proven track record for consistent returns.",
    tipType: "Investing",
  },
  {
    id: 60,
    tipText: "Diversify your income streams by investing in both traditional and digital assets.",
    tipType: "Income",
  },
  {
    id: 61,
    tipText: "Live frugally without sacrificing quality of life by focusing on what really matters.",
    tipType: "Lifestyle",
  },
  {
    id: 62,
    tipText: "Maximize employer retirement contributions by contributing enough to meet the match.",
    tipType: "Retirement",
  },
  {
    id: 63,
    tipText: "Avoid making large purchases without doing research on the best deals.",
    tipType: "Purchasing",
  },
  {
    id: 64,
    tipText: "Create an investment strategy that aligns with your risk tolerance and goals.",
    tipType: "Investing",
  },
  {
    id: 65,
    tipText: "Consider investing in a robo-advisor if you're a beginner to investing.",
    tipType: "Investing",
  },
  {
    id: 66,
    tipText: "Develop multiple skills to increase your value in the job market.",
    tipType: "Career",
  },
  {
    id: 67,
    tipText: "Save for major life events like weddings, home purchases, and children’s education.",
    tipType: "Planning",
  },
  {
    id: 68,
    tipText: "Avoid buying depreciating assets, such as luxury cars, unless you can afford them.",
    tipType: "Spending",
  },
  {
    id: 69,
    tipText: "Use tax-deferred retirement accounts to reduce your taxable income now.",
    tipType: "Tax Management",
  },
  {
    id: 70,
    tipText: "Cut down on discretionary spending to boost savings and investments.",
    tipType: "Spending",
  },
  {
    id: 71,
    tipText: "Don't put all your money into one investment; spread the risk.",
    tipType: "Investing",
  },
  {
    id: 72,
    tipText: "Automate your bill payments to avoid late fees and build good credit.",
    tipType: "Credit Management",
  },
  {
    id: 73,
    tipText: "Review your insurance policies annually to adjust coverage as needed.",
    tipType: "Insurance",
  },
  {
    id: 74,
    tipText: "Be cautious when using debt; borrow only for assets that increase in value.",
    tipType: "Debt Management",
  },
  {
    id: 75,
    tipText: "Take time to learn about asset allocation and rebalancing your investment portfolio.",
    tipType: "Investing",
  },
  {
    id: 76,
    tipText: "Track your spending with apps to identify patterns and areas for improvement.",
    tipType: "Budgeting",
  },
  {
    id: 77,
    tipText: "Use rewards points wisely to maximize their value over time.",
    tipType: "Spending",
  },
  {
    id: 78,
    tipText: "Understand the risks involved in investing, and don't invest money you can't afford to lose.",
    tipType: "Investing",
  },
  {
    id: 79,
    tipText: "Start planning for long-term financial security as soon as possible.",
    tipType: "Retirement",
  },
  {
    id: 80,
    tipText: "Avoid emotional decision-making when it comes to money, especially in volatile markets.",
    tipType: "Investing",
  },
  {
    id: 81,
    tipText: "Utilize tax-advantaged accounts to save for healthcare costs in retirement.",
    tipType: "Tax Management",
  },
  {
    id: 82,
    tipText: "Cut down on impulse buying and focus on your long-term goals.",
    tipType: "Spending",
  },
  {
    id: 83,
    tipText: "Make use of cash-flow budgeting tools to balance income and expenses.",
    tipType: "Budgeting",
  },
  {
    id: 84,
    tipText: "Consider working with a financial planner if your financial situation is complex.",
    tipType: "Advice",
  },
  {
    id: 85,
    tipText: "Create a long-term financial plan that includes your goals, savings, and investments.",
    tipType: "Planning",
  },
  {
    id: 86,
    tipText: "Don't neglect your health when planning for retirement – healthcare costs can be significant.",
    tipType: "Health",
  },
  {
    id: 87,
    tipText: "Focus on making small, consistent changes to improve your financial situation.",
    tipType: "Financial Improvement",
  },
  {
    id: 88,
    tipText: "Keep track of your financial progress and celebrate milestones along the way.",
    tipType: "Motivation",
  },
  {
    id: 89,
    tipText: "Stay disciplined and stick to your financial goals, even when faced with distractions.",
    tipType: "Discipline",
  },
  {
    id: 90,
    tipText: "Take time to understand how inflation affects your savings and investments.",
    tipType: "Investing",
  },
  {
    id: 91,
    tipText: "Avoid relying too heavily on one source of income – diversify.",
    tipType: "Income",
  },
  {
    id: 92,
    tipText: "Be mindful of credit card debt, and pay it off quickly to avoid high-interest costs.",
    tipType: "Debt Management",
  },
  {
    id: 93,
    tipText: "Invest in appreciating assets, such as stocks and real estate, to build wealth.",
    tipType: "Investing",
  },
  {
    id: 94,
    tipText: "Look into opportunities for passive income, such as dividend stocks and rental properties.",
    tipType: "Income",
  },
  {
    id: 95,
    tipText: "Maximize the value of your home by maintaining it properly.",
    tipType: "Property",
  },
  {
    id: 96,
    tipText: "Be disciplined about not spending money on unnecessary items.",
    tipType: "Spending",
  },
  {
    id: 97,
    tipText: "Start investing in stocks or mutual funds with the goal of growing wealth over time.",
    tipType: "Investing",
  },
  {
    id: 98,
    tipText: "Cut back on luxury items and invest the money instead.",
    tipType: "Spending",
  },
  {
    id: 99,
    tipText: "Pay off high-interest debt before putting money into investments.",
    tipType: "Debt Management",
  },
  {
    id: 100,
    tipText: "Seek professional financial advice if you’re unsure about your financial decisions.",
    tipType: "Advice",
  },
];


import { CheckCircleFilled } from "@ant-design/icons";
import { Alert, notification } from "antd";
import { useState } from "react";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 10, category: "Utilities" },
  ]);

  const [alertVisible, setAlertVisible] = useState(false);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Well done!",
      description: "Expense Was added successfully.",
      icon: <CheckCircleFilled style={{ color: "#52c41a" }} />,
    });
  };

  return (
    <div>
      {contextHolder}

      {alertVisible && (
        <>
          <Alert
            message="Well done!"
            description="Expense Was added successfully."
            type="success"
            showIcon
            closable
          />
          <br></br>
        </>
      )}

      {/* {alertVisible && (
        <div
          className="alert alert-success alert-dismissible fade-out"
          role="alert"
        >
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlertVisible(false)}
          ></button>
          <h1 className="alert-heading">Well done!</h1>
          <p>Expense Was added successfully</p>
        </div>
      )} */}
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(newExpense) => {
            setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
            setAlertVisible(true);
            openNotification();
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((expense) => expense.id !== id));
        }}
      />
    </div>
  );
}

export default App;

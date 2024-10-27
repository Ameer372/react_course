import { CheckCircleFilled } from "@ant-design/icons";
import { Alert, notification } from "antd";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 10, category: "Utilities" },
  ]);

  const [alertVisible, setAlertVisible] = useState(false);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const [api, showNotification] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Well done!",
      description: "Expense Was added successfully.",
      icon: <CheckCircleFilled style={{ color: "#52c41a" }} />,
    });
  };

  return (
    <div>
      {showNotification}
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(newExpense) => {
            setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
            setAlertVisible(true);
            // setTimeout(() => setAlertVisible(false), 3000);
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
      {alertVisible && (
        <Alert
          message="Well done!"
          description="Expense Was added successfully."
          type="success"
          showIcon
          closable
        />
      )}
    </div>
  );
}

export default App;

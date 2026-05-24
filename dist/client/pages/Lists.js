"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const categories_1 = require("../services/categories");
function Lists() {
    const [categories, setCategories] = (0, react_1.useState)([]);
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)(null);
    const [selectedTasks, setSelectedTasks] = (0, react_1.useState)([]);
    const [selectableTasks, setSelectableTasks] = (0, react_1.useState)([]);
    const [showCategory, setShowCategory] = (0, react_1.useState)(true);
    const [enteredCategory, setEnteredCategory] = (0, react_1.useState)("");
    const [enteredTask, setEnteredTask] = (0, react_1.useState)("");
    const init = () => {
        (0, categories_1.getCategories)().then((cats) => setCategories(cats));
    };
    (0, react_1.useEffect)(() => {
        init();
    }, []);
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setSelectedTasks([]);
        setSelectableTasks([...category.tasks]);
        setShowCategory(false);
        setEnteredCategory("");
    };
    const handleNewCategory = async () => {
        const name = enteredCategory.trim();
        if (!name)
            return;
        const found = categories.find((c) => c.name === name);
        if (found) {
            handleSelectCategory(found);
        }
        else {
            const created = await (0, categories_1.addCategory)(name);
            init();
            handleSelectCategory(created);
        }
        setEnteredCategory("");
    };
    const handleNewTask = async () => {
        const name = enteredTask.trim();
        if (!name || !selectedCategory)
            return;
        const found = selectableTasks.find((t) => t.name === name);
        if (found) {
            handleSelectTask(found);
        }
        else {
            await (0, categories_1.addTask)(selectedCategory.name, name);
            const newTask = { name };
            setSelectableTasks((prev) => [...prev, newTask]);
            handleSelectTask(newTask);
        }
        setEnteredTask("");
    };
    const handleSelectTask = (task) => {
        setSelectedTasks((prev) => [...prev, task]);
        setSelectableTasks((prev) => prev.filter((t) => t.name !== task.name));
        setEnteredTask("");
    };
    const handleUnselectTask = (task) => {
        setSelectableTasks((prev) => [...prev, task]);
        setSelectedTasks((prev) => prev.filter((t) => t.name !== task.name));
    };
    const filteredCategories = categories
        .filter((c) => !enteredCategory || c.name.toLowerCase().includes(enteredCategory.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 10);
    const filteredTasks = selectableTasks
        .filter((t) => !enteredTask || t.name.toLowerCase().includes(enteredTask.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 10);
    return (<div className="container">
      <form className="form-group">
        <h2 onClick={() => setShowCategory(selectedCategory ? !showCategory : true)} style={{ cursor: "pointer", fontSize: showCategory ? "2em" : "1.2em" }}>
          <i className={`fa ${showCategory ? "fa-caret-down" : "fa-caret-right"}`}/> Category
        </h2>
        {showCategory && (<div>
            <div className="input-group">
              <input type="text" value={enteredCategory} onChange={(e) => setEnteredCategory(e.target.value)} className="form-control" placeholder="Search or Add Category"/>
              <span className="input-group-btn">
                <button onClick={handleNewCategory} className="btn btn-default" type="button">
                  <i className="fa fa-plus"/>
                </button>
              </span>
            </div>
            {filteredCategories.map((category) => (<button key={category.name} className="btn btn-default choice" onClick={() => handleSelectCategory(category)} type="button">
                {category.name}
              </button>))}
          </div>)}
      </form>

      {selectedCategory && (<div>
          <hr />
          <form className="form-group">
            <h2>{selectedCategory.name}</h2>
            <div className="input-group">
              <input type="text" value={enteredTask} onChange={(e) => setEnteredTask(e.target.value)} className="form-control" placeholder="Search or Add Item"/>
              <span className="input-group-btn">
                <button onClick={handleNewTask} className="btn btn-default" type="button">
                  <i className="fa fa-plus"/>
                </button>
              </span>
            </div>
          </form>
          {filteredTasks.map((task) => (<button key={task.name} className="btn btn-default choice" onClick={() => handleSelectTask(task)}>
              {task.name}
            </button>))}
        </div>)}

      {selectedTasks.length > 0 && (<div>
          <hr />
          <h2>Prioritize these:</h2>
          {selectedTasks.map((task) => (<button key={task.name} className="btn btn-primary choice" onClick={() => handleUnselectTask(task)}>
              {task.name}
            </button>))}
        </div>)}
    </div>);
}
exports.default = Lists;
//# sourceMappingURL=Lists.js.map
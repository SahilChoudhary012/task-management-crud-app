function taskReducer(tasks, action) {
  console.log("taskreducer");
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case "ADD_TASK": {
      console.log(action);
      return [
        ...tasks,
        {
          _id: action.id,
          title: action.title,
          description: action.description,
          completed: false,
        },
      ];
    }
    case "SET_TASK": {
      return action.payload;
    }
    case "REMOVE_TASK": {
      return tasks.filter((task) => task._id !== action.id);
    }
    case "MARK_DONE": {
      return tasks.map((task, index) => {
        if (task._id === action.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    }
    default: {
      throw Error("Unknown Action" + action.type);
    }
  }
}

export default taskReducer;

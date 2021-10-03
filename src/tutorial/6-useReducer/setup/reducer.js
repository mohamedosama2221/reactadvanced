export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDITEM":
      return (state = {
        ...state,
        isModalOpen: true,
        people: [...state.people, action.payload],
        modalContent: "Item Added",
      });
    case "REMOVE_ITEM":
      const newData = state.people.filter((p) => p.id !== action.payload);
      return (state = {
        ...state,
        isModalOpen: true,
        people: newData,
        modalContent: "Item Deleted",
      });
    case "NOVALUE":
      return (state = {
        ...state,
        isModalOpen: true,
        modalContent: "Please Add Value",
      });
    case "CLOSEMODAL":
      return (state = {
        ...state,
        isModalOpen: false,
      });
    default:
      return state;
  }
};

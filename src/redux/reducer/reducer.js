const initialState = {
  contactList: [],
  keyword: "",
};
const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, tel: payload.tel },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
};

export default contactReducer;

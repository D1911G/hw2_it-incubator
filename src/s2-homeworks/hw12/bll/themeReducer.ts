const initState: ThemeState = {
  themeId: 1,
};

type ThemeState = {
  themeId: number;
};

type ChangeThemeActionType = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (
  state: ThemeState = initState,
  action: ChangeThemeActionType,
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописатьSET_THEME_ID
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeThemeActionType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any

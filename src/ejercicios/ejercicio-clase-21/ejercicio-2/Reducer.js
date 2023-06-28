export function funcionReducer(state, action) {
  if (action.type === "agregar") {
    return { tareas: [...state.tareas, action.payload] };
  }
  if (action.type === "completar") {
    return {
      tareas: state.tareas.map((t) => {
        if (t.id === action.id) {
          t.estaCompleta = true;
          return t;
        }
        return t;
      }),
    };
  }
  if (action.type === "eliminar") {
    return { tareas: state.tareas.filter((t) => t.id !== action.id) };
  }
  if (action.type === "completar-todas") {
    return {
      tareas: state.tareas.map((t) => {
        t.estaCompleta = true;
        return t;
      }),
    };
  }
  if (action.type === "eliminar-completas") {
    return { tareas: state.tareas.filter((t) => t.estaCompleta === false) };
  }
}

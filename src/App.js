import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CursorShapes from "./components/CursorShapes/CursorShapes";
import Main from "./Main";

function App() {

  return (
    <div className={"invisibleCursor"} >
      <DndProvider backend={HTML5Backend}>
        <CursorShapes />
        <Main />
      </DndProvider>
    </div>
  );
}

export default App;

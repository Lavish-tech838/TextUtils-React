import react from "react";
export default function Todo() {
    return(
  <li className="todo stack-samll">
      <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
           <label className="todo-label" htmlFor="todo-0">
               Eat
           </label>
      </div>
      <div className="btn-group">
          <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn_danger">
              Delete <span className="visually-hidden">Eat</span>
          </button>
      </div>
 </li>
    );
}

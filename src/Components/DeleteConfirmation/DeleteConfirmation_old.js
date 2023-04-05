import React from "react";

export const DeleteConfirmation = ({ message, onDialog }) => {
  return (
    <>
      <div>
        <span
          onclick="document.getElementById('id01').style.display='none'"
          title="Close Modal"
        >
          &times;
        </span>
        <form action="/action_page.php">
          <div>
            <h1>Delete Account</h1>
            <p>{message}</p>

            <div>
              <button type="button" onClick={() => onDialog(false)}>
                Cancel
              </button>
              <button type="button" onClick={() => onDialog(true)}>
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

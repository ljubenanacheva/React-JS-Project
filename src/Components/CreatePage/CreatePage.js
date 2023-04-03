export const CreatePage = () => {
  return (
    <section id="createPage">
      <form className="createForm">
        <img src="./images/landmark.png" />
        <div className="createDiv">
          <h2>Create Landmark</h2>
          <div className="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" placeholder="Max" />
          </div>
          <div className="breed">
            <label for="breed">City:</label>
            <input
              name="breed"
              id="breed"
              type="text"
              placeholder="Shiba Inu"
            />
          </div>
          <div className="category">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              cols="33"
              placeholder=" It is a very interesting place..."
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Create Landmark
          </button>
        </div>
      </form>
    </section>
  );
};

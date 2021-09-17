
const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" name="Add task" id="" />
            </div>
            <div className="form-control">
                <label htmlFor="">Day and Time</label>
                <input type="text" name="Add task" id="" />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" id="" />
            </div>
            <input className="btn btn-block" type="submit" value="Save" />
        </form>
    )

}
export default AddTask

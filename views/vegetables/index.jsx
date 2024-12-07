const React = require("react");
// const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    // const vegetables = this.props.vegetables;

    return (
      // <DefaultLayout title={"Vegetables Index Page"}>
      <>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
        <ul>
          {vegetables.map((Vegetable, i) => {
            return (
              <li>
                The
                <a href={`api/vegetables/${Vegetable._id}`}>
                  {Vegetable.name}
                </a>{" "}
                is {Vegetable.color} <br></br>
                {Vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is NOT ready to eat`}
                <br />
                <a href={`/vegetables/${Vegetable._id}/edit`}>
                  Edit This Vegetable
                </a>
                <form
                  action={`api/vegetables/${Vegetable._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </>
      // </DefaultLayout>
    );
  }
}

module.exports = Index;

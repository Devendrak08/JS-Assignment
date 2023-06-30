import React, { Fragment } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Character extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      Characters: [""],
    };
  }

  componentDidMount(): void {
    axios
      .get("https://the-one-api.dev/v2/character", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Ws6KjZ59Rn5XzGEFVca_",
        },
      })
      .then((res) => {
        this.setState({ Characters: res.data.docs });
      });
  }
  render() {
    const { Characters }: any = this.state;
    return (
      <div>
        <h2> list of characters</h2>
        <ul>
          {Characters.map((character: any, index: any) => {
            return <li key={index}> {character.name}</li>;
          })}
        </ul>

        <Link to={"/"}> Go to Home</Link>
      </div>
    );
  }
}
export default Character;

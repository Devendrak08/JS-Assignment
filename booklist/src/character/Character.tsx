import React from "react";
import axios from "axios";

class Character extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      Characters: [],
      token: "",
    };
  }
  componentDidMount(): void {
    axios
      .get(`https://the-one-api.dev/v2/character`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer Ws6KjZ59Rn5XzGEFVca_`,
        },
      })
      .then((res) => {
        console.log(res, "sdfdfdfdff");
        this.setState({ Characters: res.data.docs });
      });
  }
  render() {
    const { Characters }: any = this.state;
    return (
      <div>
        <h1>List of characters </h1>
        {Characters.map((character: any, index: any) => {
          return <div key={index}>{character.name}</div>;
        })}
      </div>
    );
  }
}

export default Character;

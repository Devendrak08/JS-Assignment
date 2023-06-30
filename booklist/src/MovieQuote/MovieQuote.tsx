import React from "react";
import axios from "axios";

class MovieQuote extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      quotes: [],
      id: {},
    };
  }
  componentDidMount(): void {
    axios
      .get(`https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Ws6KjZ59Rn5XzGEFVca_",
        },
      })
      .then((res) => {
        console.log(res, "++++++++++++++++++++");
        this.setState({ quotes: res.data.docs });
      });
  }
  render() {
    const { quotes }: any = this.state;
    return (
      <div>
        {quotes.map((quote: any, index: any) => {
          return <div key={index}> {quote.dialog}</div>;
        })}
      </div>
    );
  }
}

export default MovieQuote;

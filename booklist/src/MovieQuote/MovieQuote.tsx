import React, { Fragment } from "react";
import axios from "axios";

class MovieQuote extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      quotes: [],
      id: this.props.match.params.id
    };
  }
  componentDidMount(): void {
    // const { id }: any = this.props.match.params;
    axios
      .get(`https://the-one-api.dev/v2/movie/${id}/quote`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Ws6KjZ59Rn5XzGEFVca_",
        },
      })
      .then((res) => {
        this.setState({ quotes: res.data.docs });
      });
  }
  render() {
    const { quotes }: any = this.state;
    return (
      <Fragment>
        {quotes.map((quote: any, index: any) => {
          return <p key={index}> {quote.dialog}</p>;
        })}
      </Fragment>
    );
  }
}

export default MovieQuote;


// 5cd95395de30eff6ebccde5d
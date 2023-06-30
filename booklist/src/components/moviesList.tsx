import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


class MoviesList extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      moviesList: [""],
    };
  }
  //url/endpoint
  // headers
  //body in case of post, put

  componentDidMount(): void {
    axios
      .get("https://the-one-api.dev/v2/movie", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer wZsfvIS0DJQK0rGBo2MB ",
        },
      })
      .then((res) => {
        // console.log(res, '+++++++++')
        this.setState({ moviesList: res.data.docs });
      });
  }

  render() {
    const { moviesList }: any = this.state;
    return (
      <Row>
        {moviesList.map((movie: any, index: any) => (
          <Col key={index} sm={4} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdu9aJJyFRyTPNVGJEvOpZLJ18fhkRMS1lbD8wy2k8pRv3GLMDG3SyoLgZPb71WnGIV4M&usqp=CAU"
                }
              />
              <Card.Body>
                <Card.Title><h2>{movie.name}</h2></Card.Title>
                <Card.Text><b>Movies budget:-</b>{movie.budgetInMillions}</Card.Text>
                <Card.Text><b>boxOfficeRevenueInMillions:-</b> {movie.boxOfficeRevenueInMillions}</Card.Text>
                <Button>button</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <div>
        <Link to={"/"}> Go to Home</Link>
        </div>
      </Row>
    );
  }
}

export default MoviesList;



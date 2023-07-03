import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class MoviesList extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = ({
      moviesList: [""],
    })
  }
  //url/endpoint
  // headers
  //body in case of post, put

  componentDidMount(): void {
    axios.get('https://the-one-api.dev/v2/movie', {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer wZsfvIS0DJQK0rGBo2MB ",
      }
    }).then(res => {
      // console.log(res, '+++++++++')
      this.setState({moviesList: res.data.docs})
    })
    
  }
  

  
  render() {

    const { moviesList }: any = this.state;
    return(
      <div>
        <h1>List of Movie name  </h1>
        {
          moviesList.map((movie: any , index: any)=>{
            return(
              <div key={index}> {movie.name}</div>
            )
          })
        }
      </div>
    )
  }
}

export default MoviesList;

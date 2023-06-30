import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


class Page extends React.Component<any, any> {
  constructor(props: any ){
    super(props)

    this.state = {
      books: []
    }
  }
  componentDidMount(): void {
    axios.get('https://the-one-api.dev/v2/book')
    .then(res =>  {
      this.setState({books: res.data.docs})
    })
  } 
    
  render() {
    return (
      <div>
        <h1>List of book name</h1>
        {
          this.state.books.map((book: any, index: any) => {
            return (
              <div key={index}>{book.name}</div>
            )
          })
        }
        <div>
        <Link to={"/"}> Go to Home</Link>
        </div>
      </div>
    );
  }
}
export default Page

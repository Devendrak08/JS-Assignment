import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Character extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      Characters: [],
      currentPage: 1,
      recordPerPage: 5,
      data: "",
    };
  }

  apiHandler = () => {
    const { data }: any = this.state;
    axios
      .get(`https://the-one-api.dev/v2/character?name=${data}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Ws6KjZ59Rn5XzGEFVca_",
        },
      })
      .then((res) => {
        this.setState({ Characters: res.data.docs });
      });
  };

  componentDidMount(): void {
    this.apiHandler();
  }
  handlePageChange = (page: any) => {
    this.setState({ currentPage: page });
  };
  valueChange = () => {
    this.apiHandler();
  };

  render() {
    const { Characters, currentPage, recordPerPage }: any = this.state;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Characters.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(Characters.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    return (
      <div>
        <input
          type='text'
          placeholder='search'
          onChange={(e) => this.setState({ data: e.target.value })}
        ></input>
        <button onClick={this.valueChange}>submit</button>
        <table className='table table-bordered table-striped table-dark'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Race</th>
              <th>Gender</th>
              <th>Birth</th>
              <th>Spouse</th>
              <th>Death</th>
              <th>wikiUrl</th>
            </tr>
          </thead>
          <tbody>
            {records.map((character: any, i: any) => {
              return (
                <tr key={i}>
                  <td> {character.name}</td>
                  <td> {character.race}</td>
                  <td> {character.gender}</td>
                  <td> {character.birth}</td>
                  <td> {character.spouse}</td>
                  <td> {character.death}</td>
                  <td>
                    <a target='_blank' href={character.wikiUrl}>
                      {" "}
                      {character.wikiUrl}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav className='pagination'>
          {numbers.map((number) => (
            <li className='page-link'>
              <a
                className={currentPage === number ? "active" : ""}
                onClick={() => this.handlePageChange(number)}
                key={number}
              >
                {number}
              </a>
            </li>
          ))}
        </nav>
      </div>
    );
  }
}
export default Character;




import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalShow: false

    }
  }

  //Open and Close Modal Functions

  handleOpenModal = () => {
    this.setState({
      modalShow: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      modalShow: false
    })
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      this.setState({
        books:bookData.data
      });

    } catch (error) {
      console.log('Jinkies! We have an error:',error.response)

    }
  }

  handleBookSubmission = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.Title.value,
      description: event.target.Description.value,
      status:event.target.Status.value
    }

    this.postBooks(newBook);
    this.handleCloseModal();
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      let createdBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })

    }catch (error) {
      console.log(error.message);
    }
  }

  deleteTheBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      });


    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */
    let books = this.state.books.map(book => {
      return (
        <Carousel.Item>

          <img
          className="jp-box w-100"
          src="https://images.pexels.com/photos/4582544/pexels-photo-4582544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Little Free Libray for first slide"
          />

          <h3>{book.title}</h3>

          <Carousel.Caption>
            <h4>Description</h4>
            <p>{book.description}</p>
          </Carousel.Caption>

        </Carousel.Item>
        
      )
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
         <Carousel>{books}</Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Button variant='primary' onClick={this.handleOpenModal}>Add Book</Button>
        <BookFormModal modalShow={this.state.modalShow} modalHide={this.handleCloseModal} handleSubmit={this.handleBookSubmission} />
      </>
    )
  }
}

export default BestBooks;

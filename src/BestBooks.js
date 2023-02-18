import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import BookFormModalUpdate from './BookFormModalUpdate';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalShow: false,
      modalShowUpdate: false

    }
  }

  //Open and Close Modal Functions

  handleOpenModal = () => {
    this.setState({
      modalShow: true
    })
  }


  openUpdateModal = (bookObj) => {
    this.setState({
      modalShowUpdate: true,
      book: bookObj
    })
  }

  handleCloseModal = () => {
    this.setState({
      modalShow: false
    })
  }

  closeUpdateModal = () => {
    this.setState({
      modalShowUpdate: false
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
    // console.log('We made it');
    event.preventDefault();
    let newBook = {
      title: event.target.Title.value,
      description: event.target.Description.value,
      status: event.target.Status.value === 'on' 
      
    }
    console.log(newBook);

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
    console.log(id, 'This is the id');
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

  updatedBook = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
      
        await axios.put(url, bookToUpdate);

      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
        ? bookToUpdate : existingBook
      })
      this.setState({
        books: updatedBookArray
      });

    } catch(error) {
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
        <Carousel.Item key={book._id}>

          <img
          className="jp-box w-100"
          src="https://images.pexels.com/photos/1850021/pexels-photo-1850021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Little Free Libray for first slide"
          />

          
          <Carousel.Caption>
          <h2>{book.title}</h2>
            <h5>Description</h5>
            <p>{book.description}</p>
          <Button variant='danger' onClick={()=> this.deleteTheBook(book._id)}>Delete this Book</Button>
          <Button variant="info" onClick={() => { this.openUpdateModal(book) }}>Update this Book</Button>
          </Carousel.Caption>

        </Carousel.Item>
        
      )
    })

    return (
      <>
        <h2>Some Essential Lifelong Learning &amp; Development Shelf</h2>

        {this.state.books.length > 0 ? (
         <Carousel interval={null}>{books}</Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Button variant='primary' onClick={this.handleOpenModal}>Add Book</Button>
        <BookFormModal modalShow={this.state.modalShow} modalHide={this.handleCloseModal} handleSubmit={this.handleBookSubmission} />

        <BookFormModalUpdate
        modalShowUpdate={this.state.modalShowUpdate} modalHideUpdate={this.closeUpdateModal} updatedBook={this.updatedBook} book={this.state.book}
        /> 
      </>
    )
  }
}

export default BestBooks;

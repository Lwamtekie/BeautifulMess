import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button, Modal,
} from 'reactstrap';

import BlogData from '../../Helpers/Data/BlogData';
import UserData from '../../Helpers/Data/UserData';

import './AddBlog.scss';


// const defaultBlog = {
//   title: 'test',
//   imageUrl: '',
//   article: '',
//   modal: false,
// };

class AddBlog extends React.Component {
  state = {
    Blog: [],
    title: '',
    imageUrl: '',
    article: '',
    modal: false,
  }

  userInputHandler = (e) => {
    const { value } = e.target;
    const InputName = e.target.name;
    this.setState({ [InputName]: value });
  }


  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  AddBlog = (e) => {
    e.preventDefault();
    const userSessionInfo = UserData.getSessionUser();
    const tempBlog = {
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      article: this.state.article,
      userId: userSessionInfo.id,
    };

    BlogData.postNewBlog(tempBlog)
      .then(() => {
        this.setState({
          title: '',
          imageUrl: '',
          article: '',
          modal: false,
        });
        this.props.getBlogs();
      })
      .catch(error => console.error(error));
  };

  render() {
    const {
      modal, title, imageUrl, article,
    } = this.state;
    return (
      <div className="newBlogForm">
        <div className="row">
          <Button color="danger" onClick={this.toggle}>Add</Button>
          <Modal isOpen={modal} toggle={this.toggle}>
            <Form className="col-8 offset-2 mb-3" onSubmit={this.AddBlog}>
              <FormGroup>
                <Label for="blogtitle"><h5>Blogtitle</h5></Label>
                <Input
                  type="text"
                  name="title"
                  className="blogtitle"
                  id="blogTtile"
                  placeholder="Enter A Blogtitle"
                  value={title}
                  onChange={this.userInputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="blogimageUrl"><h5>NewimageUrl</h5></Label>
                <Input
                  type="imageUrl"
                  name="imageUrl"
                  className="blogimageUrl"
                  id="blogimageUrl"
                  placeholder="Enter A BlogimageUrl"
                  value={imageUrl}
                  onChange={this.userInputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText"><h5>Article</h5></Label>
                <Input
                  type="textarea"
                  name="article"
                  className="article"
                  id="blogArticle"
                  placeholder="paragraph"
                  value={article}
                  onChange={this.userInputHandler} />
              </FormGroup>
              <Button type="submit" className="btn btn-success">Add Blog</Button>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(AddBlog);

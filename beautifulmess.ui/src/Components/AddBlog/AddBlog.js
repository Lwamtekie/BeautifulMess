import React from 'react';
import {
  Form, FormGroup, Label, Input, Button, Modal,
} from 'reactstrap';

import BlogData from '../../Helpers/Data/BlogData';

import './AddBlog.scss';


const defaultBlog = {
  title: '',
  imageUrl: '',
  article: '',
  modal: false,
};

class AddBlog extends React.Component {
    state = {
      Blog: [],
      newBlog: defaultBlog,
      title: '',
      imageUrl: '',
      article: '',
      modal: false,
    }

    stringStateField = (title, e) => {
      const newBlog = { ...this.state.newBlog };
      newBlog[title] = e.target.value;
      this.setState({ newBlog: newBlog });
    }

    blogtitle = e => this.formFieldstringState('title', e);

    imageUrlchange = e => this.formFieldstringState('imageUrl', e);

    article = e => this.formFieldstringState('article', e);


    toggle = () => {
      this.setState({ modal: !this.state.modal });
    }

    AddBlog = (e) => {
      e.preventDegfault();
      const saveNewBlog = { ...this.state.newBlog };
      BlogData
        .postNewBlog(saveNewBlog)
        .then(() => {
          this.setState({ newBlog: defaultBlog });
          console.error(saveNewBlog);
        });
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
                    <Form className="col-8 offset-2 mb-3" onSubmit={this.addBlog}>
                    <FormGroup>
                    <Label for="blogtitle"><h5>Newtitle</h5></Label>
                        <Input
                        type="text"
                        className="blogtitle"
                        id="blogTtile"
                        placeholder="Enter A Blogtitle"
                        value={title}
                        onChange={this.blogtitleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                    <Label for="blogimageUrl"><h5>NewimageUrl</h5></Label>
                        <Input
                        type="imageUrl"
                        className="blogimageUrl"
                        id="blogimageUrl"
                        placeholder="Enter A BlogimageUrl"
                        value={imageUrl}
                        onChange={this.blogimageUrlChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"><h5>Article</h5></Label>
                        <Input
                        type="textarea"
                        className="article"
                        id="blogArticle"
                        placeholder="paragraph"
                        value={article}
                        onChange={this.articleChange} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-success">Add User</Button>
                    </Form>
                    </Modal>
                </div>
            </div>
      );
    }
}

export default AddBlog;

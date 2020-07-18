import React, { Component } from 'react';
import './sass/main.scss';
import Contact from './Components/Contact';
import Filter from './Components/Filter';
import InputForm from './Components/InputForm';
import ThemeContext from './Components/ThemeContext';
import ThemeButton from './Components/ThemeButton';
import { themeConfig } from './Components/ThemeContext';
import { v1 as uuidv1 } from 'uuid';
import './app.scss';
let key = '';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    theme: 'lightTheme',
  };

  handleDelete = key => {
    const newContacts = this.state.contacts.filter(el => el.id !== key);
    this.setState({ contacts: newContacts });
  };

  getKey = () => {
    return (key = uuidv1());
  };

  checkContact = (array, name) => {
    return array.find(element => element.nam === name);
  };

  handleFilter = valueToFind => {
    this.setState({ filter: valueToFind });
  };
  handleSubmit = (event, name, number) => {
    this.getKey();
    event.preventDefault();
    if (this.checkContact(this.state.contacts, name) === undefined) {
      if (name !== '' && number !== '') {
        this.setState({
          contacts: [
            ...this.state.contacts,
            { nam: name, id: key, number: number },
          ],
        });
      }
    } else return alert(name + ' is already exist!');
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts != null) {
      this.setState({ contacts: localContacts });
    }
    const localTheme = JSON.parse(localStorage.getItem('theme'));
    if (localTheme != null) {
      this.setState({ theme: localTheme });
    }
  }

  componentDidUpdate() {
    localStorage.clear();
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  }

  handleClick = () => {
    if (this.state.theme === 'lightTheme') {
      this.setState({ theme: 'darkTheme' });
    } else {
      this.setState({ theme: 'lightTheme' });
    }
  };

  render() {
    const { filter, contacts, theme } = this.state;
    return (
      <div style={{ background: themeConfig[theme].bodybg }}>
        <ThemeContext.Provider value={themeConfig[theme]}>
          <div className="container">
            <ThemeButton onClick={this.handleClick} />
            <InputForm onSubmit={this.handleSubmit} />
            <Filter onFilter={this.handleFilter} />
            <Contact
              deleteCon={this.handleDelete}
              contacts={contacts}
              filterValue={filter}
            />
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

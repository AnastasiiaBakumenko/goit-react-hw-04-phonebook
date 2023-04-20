import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";

export function App(){
const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem('contacts')));
    const [filter, setFilter] = useState("");

  useEffect(()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts] );


  const takeDataFromSubmitForm = (name, number) => {
    const existingContact = contacts.find((element) =>
      element.name === name
    );
    if(existingContact) {
      window.alert(`${name} is already in contacts`);
      return;
    }; 
    setContacts(prevState => [...prevState, {name: name, number: number}]);
    Notify.success(`${name} is successfully added to your contact list`);
  };

  const getFilterRequest = (inputValue) => {
    setFilter(inputValue);
  };

  const getFilteredContacts = () => {
    return contacts.filter(element => element.name.toLowerCase().includes(filter));
  };

  const deleteContact = (target) => {
    if(target.nodeName !== 'BUTTON') {
      return;
    }
    const name = target.name;
    setContacts(prevState => (prevState.filter(contact => contact.name !== name)));
    Notify.failure(`${name} is deleted from your contact list`);
  };


 
    const visibleContacts = getFilteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm takeDataFromSubmitForm={takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Container>
            <Filter getFilterRequest={getFilterRequest}/>
            <ContactList
              contacts={visibleContacts} 
              onDeleteContact={deleteContact}>
            </ContactList>
          </Container>
        </Section>
      </>
    );
    };
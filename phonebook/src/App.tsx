import React, { useReducer, FC, useState, useEffect } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import { contactsReducer, AppState } from './reducer/contactsReducer';
import ContactList from './components/ContactList';
import ExportCSV from './components/ExportCSV';

import {Contact} from './types';
import EditModal from './components/EditModal';


const initialState: AppState = {
  contacts: []
};

const App: FC = () => {

  const data = [{ name: 'Иван', email: 'ivan@example.com' }, { name: 'Мария', email: 'maria@example.com' }];
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);
  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);
  const toggleModal = () => {
    setShowModal((show) => !show);
  };
  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <ContactForm 
        dispatch={dispatch}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
        <ContactList 
        contacts={state.contacts}
        handleEdit={handleEdit}
        dispatch={dispatch}
        />)}
      </div>
      <ExportCSV data={data} />
      <EditModal 
       showModal={showModal}
       dataToEdit={dataToEdit}
       toggleModal={toggleModal}
       dispatch={dispatch}
       />
    </>
  );
};

function downloadCSV() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input type={"file"} accept={".csv"} />
        <button>IMPORT CSV</button>
      </form>
    </div>
  );
}

export default App;
import {Contact} from "../model/contact.model";
import {contactList} from "../db/db";

// Retrieve all saved contacts
export const getAllContacts = (): Contact[] => {
    return contactList;
}

// Save a contact
export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
}

// Validate a contact
export const validateContact = (contact: Contact) => {
    if (!contact.email || !contact.subject || !contact.message) {
        return 'All fields are required';
    }
    return null;
}

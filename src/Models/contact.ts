import { Schema, model, Document } from 'mongoose'

interface IContact extends Document {
  name?: string
  surname?: string
  telephone?: string
  category?: string
}

const contactSchema = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  telephone: {
    type: String,
    unique: true,
    trim: true
  },
  idUser: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String,
    enum: ['movil', 'telephone', 'business']
  }
})

const contact = model<IContact>('contact', contactSchema)

export default contact

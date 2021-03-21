import { RequestHandler, Request, Response } from 'express'
import Contact from '../Models/contact'

export const readContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.find({ idUser: req.user }).exec()
    if (!contact) {
      res.status(200).json({ status: 'almost', data: null })
    }
    res.status(200).json({ status: 'success', data: contact })
  } catch (error) {
    res.status(400).json({ status: 'error', data: 'error database' })
  }
}

export const createContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create({ ...req.body, idUser: req.user })

    if (!contact) {
      res.status(200).json({ status: 'almost', data: null })
    }
    res.status(200).json({ status: 'success', data: contact })
  } catch (error) {
    res.status(400).json({ status: 'error', data: 'error database' })
  }
}

export const deleteContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.find({ idUser: req.user }).remove({ _id: req.body.id }).exec()
    if (!contact) {
      res.status(200).json({ status: 'almost', data: null })
    }
    res.status(200).json({ status: 'success', data: contact })
  } catch (error) {
    res.status(400).json({ status: 'error', data: 'error database' })
  }
}

export const updateContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.find({ idUser: req.user })
      .update({ _id: req.body.id }, { ...req.body }, { new: true })
      .exec()
    if (!contact) {
      res.status(200).json({ status: 'almost', data: null })
    }
    res.status(200).json({ status: 'success', data: contact })
  } catch (error) {
    res.status(400).json({ status: 'error', data: null })
  }
}
